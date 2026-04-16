// firebase-messaging.js — Firestore-backed real-time messaging
// Layered on top of the existing localStorage system.
// LocalStorage stays as the source-of-truth for UI; Firestore syncs in real time.

import { db, auth } from './firebase.js';
import {
  collection, doc, addDoc, setDoc, updateDoc, getDoc, getDocs,
  query, orderBy, onSnapshot, serverTimestamp, where, limit
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function localAccountId() {
  return localStorage.getItem('athletehub_current_account');
}

function localAccountById(id) {
  const accounts = JSON.parse(localStorage.getItem('athletehub_accounts') || '[]');
  return accounts.find(a => a.id === id) || null;
}

// ─── Firestore paths ──────────────────────────────────────────────────────────

const convCol  = () => collection(db, 'conversations');
const msgCol   = (convId) => collection(db, 'conversations', convId, 'messages');
const convDoc  = (convId) => doc(db, 'conversations', convId);

// ─── Sync a localStorage conversation to Firestore ────────────────────────────

async function ensureConvInFirestore(conv) {
  try {
    const ref = convDoc(conv.id);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        id:            conv.id,
        participants:  conv.participants,
        isGroup:       conv.isGroup || false,
        groupName:     conv.groupName || null,
        lastMessageAt: conv.lastMessageAt || new Date().toISOString(),
        createdAt:     conv.createdAt || new Date().toISOString(),
      });
    }
  } catch (e) { /* offline / permission error — graceful fallback */ }
}

// ─── Send a message (Firestore + localStorage) ────────────────────────────────

export async function sendMessageFS(conversationId, senderId, content) {
  // 1. Save to localStorage immediately (existing behaviour)
  if (typeof sendMessage === 'function') {
    sendMessage(conversationId, senderId, content);
  }

  // 2. Mirror to Firestore if Firebase is authenticated
  try {
    const senderAcc = localAccountById(senderId);
    await addDoc(msgCol(conversationId), {
      senderId,
      senderName:   senderAcc?.name || 'Unknown',
      senderEmail:  senderAcc?.email || '',
      content,
      createdAt:    new Date().toISOString(),
      ts:           serverTimestamp(),
    });

    // Update conversation doc's lastMessageAt
    await setDoc(convDoc(conversationId), {
      lastMessageAt: new Date().toISOString(),
      lastMessage:   { content, senderId },
    }, { merge: true });
  } catch (e) { /* offline — localStorage already saved */ }
}

// ─── Real-time listener for a conversation ────────────────────────────────────

let _unsubscribe = null;

export function listenToConversation(conversationId, onUpdate) {
  // Unsubscribe from previous listener
  if (_unsubscribe) { _unsubscribe(); _unsubscribe = null; }

  try {
    const q = query(msgCol(conversationId), orderBy('ts', 'asc'));
    _unsubscribe = onSnapshot(q, (snapshot) => {
      // Merge incoming Firestore messages into localStorage
      const localMessages = JSON.parse(localStorage.getItem('athletehub_messages') || '[]');
      let changed = false;

      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          const d = change.doc.data();
          const fsMsg = {
            id:             'msg_fs_' + change.doc.id,
            conversationId,
            senderId:       d.senderId,
            content:        d.content,
            attachments:    [],
            read:           false,
            createdAt:      d.createdAt || new Date().toISOString(),
          };
          // Only add if not already in localStorage
          if (!localMessages.find(m => m.id === fsMsg.id)) {
            localMessages.push(fsMsg);
            changed = true;
          }
        }
      });

      if (changed) {
        localStorage.setItem('athletehub_messages', JSON.stringify(localMessages));
        onUpdate();
      }
    }, () => { /* onSnapshot error — offline, ignore */ });
  } catch (e) { /* Firestore unavailable */ }
}

export function stopListening() {
  if (_unsubscribe) { _unsubscribe(); _unsubscribe = null; }
}

// ─── Bootstrap: sync existing localStorage convs to Firestore on load ─────────

onAuthStateChanged(auth, async (user) => {
  if (!user) return;
  try {
    const convs = JSON.parse(localStorage.getItem('athletehub_conversations') || '[]');
    for (const conv of convs.slice(0, 20)) {
      await ensureConvInFirestore(conv);
    }
  } catch (e) {}
});
