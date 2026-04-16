// auth-sync.js — Keeps Firebase Auth in sync with the localStorage account system.
// Injected as a module by app.js so it runs on every page automatically.

import { auth, db } from './firebase.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const ACCOUNTS_KEY       = 'athletehub_accounts';
const CURRENT_ACCOUNT_KEY = 'athletehub_current_account';
const ADMIN_EMAILS       = ['ianlin.bts@gmail.com'];

onAuthStateChanged(auth, async (firebaseUser) => {
  if (!firebaseUser) return; // not signed in to Firebase — nothing to sync

  const email = firebaseUser.email.toLowerCase();
  const accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '[]');
  const existing = accounts.find(a => a.email.toLowerCase() === email);

  if (existing) {
    // Account already in localStorage — just make sure it's set as current
    const current = localStorage.getItem(CURRENT_ACCOUNT_KEY);
    if (current !== existing.id) {
      localStorage.setItem(CURRENT_ACCOUNT_KEY, existing.id);
      _refreshAuthUI();
    }
    return;
  }

  // Firebase user exists but localStorage has no account — create one from Firestore
  try {
    let name        = firebaseUser.displayName || email.split('@')[0];
    let accountType = 'athlete';
    let isAdmin     = ADMIN_EMAILS.includes(email);

    const snap = await getDoc(doc(db, 'users', firebaseUser.uid));
    if (snap.exists()) {
      const d = snap.data();
      if (d.name)        name        = d.name;
      if (d.accountType) accountType = d.accountType;
      if (d.isAdmin != null) isAdmin = d.isAdmin;
    }

    const newAccount = {
      id:          'acc_fb_' + firebaseUser.uid.slice(0, 12),
      email,
      password:    'firebase_managed', // placeholder — auth goes through Firebase
      name,
      accountType,
      isAdmin,
      photo:       firebaseUser.photoURL || null,
      profiles:    [],
      watchlist:   [],
      createdAt:   new Date().toISOString(),
      firebaseUid: firebaseUser.uid,
    };

    accounts.push(newAccount);
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
    localStorage.setItem(CURRENT_ACCOUNT_KEY, newAccount.id);
    _refreshAuthUI();
  } catch (err) {
    console.warn('[auth-sync] Failed to sync Firebase user to localStorage:', err);
  }
});

function _refreshAuthUI() {
  // Call updateAuthUI if app.js is loaded, otherwise dispatch a custom event
  if (typeof updateAuthUI === 'function') {
    updateAuthUI();
  } else {
    window.dispatchEvent(new CustomEvent('auth-synced'));
  }
}

// Listen for the custom event in case updateAuthUI wasn't ready
window.addEventListener('auth-synced', () => {
  if (typeof updateAuthUI === 'function') updateAuthUI();
});
