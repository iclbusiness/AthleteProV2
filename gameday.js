// ==================== GAME DAY TOOLS ====================

// Storage keys (used as fallback for logged-out users)
const LOCKIN_KEY = 'athletepro_lockin';
const PRO_HIGHLIGHTS_KEY = 'athletepro_pro_highlights';
const CLIP_ANALYSES_KEY = 'athletepro_clip_analyses';

// Visualization prompts by sport
const VISUALIZATION_PROMPTS = {
  default: [
    "Making the perfect play that wins the game",
    "Your teammates celebrating with you after a big moment",
    "Moving with confidence and precision",
    "Staying calm under pressure when it matters most",
    "Executing your technique flawlessly",
    "Reading the play perfectly and reacting instantly",
    "Your coach nodding with approval at your performance",
    "The crowd cheering after you make a great play"
  ],
  soccer: [
    "Striking the ball perfectly into the corner of the net",
    "Making a crucial tackle to stop a breakaway",
    "Threading a perfect through ball to your teammate",
    "Saving a penalty kick in the final minutes"
  ],
  basketball: [
    "Draining a three-pointer at the buzzer",
    "Making the perfect no-look pass for an assist",
    "Blocking a shot at the rim",
    "Hitting both free throws in crunch time"
  ],
  football: [
    "Making the game-winning catch in the end zone",
    "Breaking through the line for a big run",
    "Making a crucial sack on the quarterback",
    "Throwing a perfect spiral for a touchdown"
  ]
};

// Affirmations
const AFFIRMATIONS = [
  "I am prepared. I am focused. I will compete at my best.",
  "My hard work has prepared me for this moment.",
  "I trust my training and my abilities.",
  "I am mentally strong and physically ready.",
  "Every challenge is an opportunity to show what I can do.",
  "I control my effort and my attitude.",
  "I am confident, calm, and in control.",
  "This is my moment. I am ready to seize it.",
  "I will leave everything on the field today.",
  "I am an athlete. This is what I was born to do."
];

// Mental prep tips
const MENTAL_PREP_TIPS = [
  { icon: "🎯", title: "Set Clear Goals", text: "Know exactly what you want to accomplish today" },
  { icon: "😤", title: "Breathe Deep", text: "4-7-8 breathing calms nerves and sharpens focus" },
  { icon: "🔁", title: "Visualize Success", text: "See yourself making plays before you make them" },
  { icon: "💪", title: "Physical Warmup", text: "Get your body moving to match your mental state" },
  { icon: "🎵", title: "Lock In Playlist", text: "Music can trigger your competitive mindset" },
  { icon: "🗣️", title: "Positive Self-Talk", text: "Be your own biggest supporter, not critic" }
];

// Default pro highlights (used to seed Firestore on first load)
const DEFAULT_PRO_HIGHLIGHTS = [
  {
    id: 'ph_1',
    title: "Messi's Impossible Dribble",
    url: "https://www.youtube.com/embed/mJfDvR6xyPo",
    thumbnail: "https://img.youtube.com/vi/mJfDvR6xyPo/hqdefault.jpg",
    sport: "soccer",
    category: "technique",
    description: "Watch how Messi uses close ball control and changes of direction to beat multiple defenders."
  },
  {
    id: 'ph_2',
    title: "LeBron's Game Winner",
    url: "https://www.youtube.com/embed/example",
    thumbnail: "",
    sport: "basketball",
    category: "clutch",
    description: "Clutch performance under maximum pressure - study the focus and execution."
  },
  {
    id: 'ph_3',
    title: "Perfect Pitching Mechanics",
    url: "https://www.youtube.com/embed/example2",
    thumbnail: "",
    sport: "baseball",
    category: "technique",
    description: "Breakdown of professional pitching form and mechanics."
  }
];

// State variables
let lockInInterval = null;
let breathingInterval = null;
let currentVizIndex = 0;
let currentAffirmationIndex = 0;
let analysisCurrentTool = 'pointer';
let analysisCurrentColor = '#ff4444';
let analysisAnnotations = [];

// ==================== FIRESTORE DATA LAYER ====================

// Races a Firestore promise against a 4s timeout so the page never hangs
// if Firestore isn't set up yet or the network is slow.
function withTimeout(promise, ms = 4000) {
  const timer = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Firestore timeout')), ms)
  );
  return Promise.race([promise, timer]);
}

function getFirestoreUserId() {
  // Prefer Firebase Auth UID so Firestore rules can verify ownership
  if (typeof auth !== 'undefined' && auth.currentUser) {
    return auth.currentUser.uid;
  }
  // Fallback to localStorage-based user ID for logged-out state
  const user = (typeof getCurrentUser === 'function') ? getCurrentUser() : null;
  return user?.id || null;
}

// ---- Lock In ----

async function saveLockInToFirestore(lockInData) {
  const uid = getFirestoreUserId();
  if (!uid) {
    localStorage.setItem(LOCKIN_KEY, JSON.stringify(lockInData));
    return;
  }
  try {
    await db.collection('lockIns').doc(uid).set(lockInData);
  } catch (e) {
    console.error('Firestore saveLockIn error:', e);
    localStorage.setItem(LOCKIN_KEY, JSON.stringify(lockInData));
  }
}

async function getLockInFromFirestore() {
  const uid = getFirestoreUserId();
  if (!uid) {
    const data = localStorage.getItem(LOCKIN_KEY);
    return data ? JSON.parse(data) : null;
  }
  try {
    const doc = await withTimeout(db.collection('lockIns').doc(uid).get());
    return doc.exists ? doc.data() : null;
  } catch (e) {
    console.error('Firestore getLockIn error:', e);
    const data = localStorage.getItem(LOCKIN_KEY);
    return data ? JSON.parse(data) : null;
  }
}

async function deleteLockInFromFirestore() {
  const uid = getFirestoreUserId();
  if (!uid) {
    localStorage.removeItem(LOCKIN_KEY);
    return;
  }
  try {
    await db.collection('lockIns').doc(uid).delete();
  } catch (e) {
    console.error('Firestore deleteLockIn error:', e);
    localStorage.removeItem(LOCKIN_KEY);
  }
}

// ---- Pro Highlights ----

async function getProHighlights() {
  try {
    const snapshot = await withTimeout(db.collection('proHighlights').orderBy('createdAt', 'desc').get());
    if (snapshot.empty) {
      await seedDefaultHighlights();
      return DEFAULT_PRO_HIGHLIGHTS;
    }
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error('Firestore getProHighlights error:', e);
    // Fallback to localStorage
    const data = localStorage.getItem(PRO_HIGHLIGHTS_KEY);
    return data ? JSON.parse(data) : DEFAULT_PRO_HIGHLIGHTS;
  }
}

async function seedDefaultHighlights() {
  try {
    const batch = db.batch();
    DEFAULT_PRO_HIGHLIGHTS.forEach(h => {
      const ref = db.collection('proHighlights').doc(h.id);
      batch.set(ref, { ...h, createdAt: new Date().toISOString() });
    });
    await batch.commit();
  } catch (e) {
    console.error('Firestore seedDefaultHighlights error:', e);
  }
}

async function addHighlightToFirestore(highlight) {
  try {
    const ref = await db.collection('proHighlights').add({
      ...highlight,
      createdAt: new Date().toISOString()
    });
    return { id: ref.id, ...highlight };
  } catch (e) {
    console.error('Firestore addHighlight error:', e);
    // Fallback to localStorage
    const highlights = JSON.parse(localStorage.getItem(PRO_HIGHLIGHTS_KEY) || '[]');
    highlights.unshift(highlight);
    localStorage.setItem(PRO_HIGHLIGHTS_KEY, JSON.stringify(highlights));
    return highlight;
  }
}

// ---- Clip Analyses ----

async function getClipAnalyses() {
  const uid = getFirestoreUserId();
  if (!uid) {
    const data = localStorage.getItem(CLIP_ANALYSES_KEY);
    return data ? JSON.parse(data) : [];
  }
  try {
    const snapshot = await withTimeout(db.collection('users').doc(uid)
      .collection('clipAnalyses').orderBy('createdAt', 'desc').get());
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error('Firestore getClipAnalyses error:', e);
    const data = localStorage.getItem(CLIP_ANALYSES_KEY);
    return data ? JSON.parse(data) : [];
  }
}

async function saveAnalysisToFirestore(analysis) {
  const uid = getFirestoreUserId();
  if (!uid) {
    const analyses = JSON.parse(localStorage.getItem(CLIP_ANALYSES_KEY) || '[]');
    analyses.unshift(analysis);
    localStorage.setItem(CLIP_ANALYSES_KEY, JSON.stringify(analyses));
    return analysis;
  }
  try {
    const ref = await db.collection('users').doc(uid)
      .collection('clipAnalyses').add(analysis);
    return { id: ref.id, ...analysis };
  } catch (e) {
    console.error('Firestore saveAnalysis error:', e);
    const analyses = JSON.parse(localStorage.getItem(CLIP_ANALYSES_KEY) || '[]');
    analyses.unshift(analysis);
    localStorage.setItem(CLIP_ANALYSES_KEY, JSON.stringify(analyses));
    return analysis;
  }
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  initGameDayPage();
});

function initGameDayPage() {
  populateSportSelectors();
  renderTips();
  // Fire async loads without awaiting — page is interactive immediately,
  // UI updates when each one resolves (or falls back after 4s timeout)
  checkActiveLockIn();
  loadAnalysisStats();
  loadHighlightsPreview();
}

function populateSportSelectors() {
  const selectors = ['lockInSport', 'highlightsSportFilter', 'highlightSport'];

  selectors.forEach(id => {
    const selector = document.getElementById(id);
    if (selector && typeof SPORTS_CONFIG !== 'undefined') {
      Object.entries(SPORTS_CONFIG).forEach(([key, sport]) => {
        selector.innerHTML += `<option value="${key}">${sport.icon || ''} ${sport.name}</option>`;
      });
    }
  });
}

function renderTips() {
  const grid = document.getElementById('tipsGrid');
  if (!grid) return;

  grid.innerHTML = MENTAL_PREP_TIPS.map(tip => `
    <div class="tip-card">
      <span class="tip-icon">${tip.icon}</span>
      <h4>${tip.title}</h4>
      <p>${tip.text}</p>
    </div>
  `).join('');
}

// ==================== PRE-GAME LOCK IN ====================

function openLockInModal() {
  document.getElementById('lockInModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Set default game time to 2 hours from now
  const gameTime = new Date();
  gameTime.setHours(gameTime.getHours() + 2);
  const input = document.getElementById('gameTimeInput');
  if (input) {
    input.value = gameTime.toISOString().slice(0, 16);
  }
}

function closeLockInModal() {
  document.getElementById('lockInModal').classList.add('hidden');
  document.body.style.overflow = '';
}

async function startLockIn() {
  const gameTime = document.getElementById('gameTimeInput').value;
  const sport = document.getElementById('lockInSport').value;
  const opponent = document.getElementById('opponentInput').value;
  const goals = document.getElementById('gameGoals').value;
  const playlist = document.getElementById('playlistUrl').value;

  if (!gameTime) {
    showToast('Please set your game time', 'error');
    return;
  }

  const lockInData = {
    gameTime: new Date(gameTime).toISOString(),
    sport,
    opponent,
    goals,
    playlist,
    startedAt: new Date().toISOString()
  };

  await saveLockInToFirestore(lockInData);

  // Show active phase
  document.getElementById('lockinSetup').classList.add('hidden');
  document.getElementById('lockinActive').classList.remove('hidden');

  if (opponent) {
    document.getElementById('opponentDisplay').textContent = `vs ${opponent}`;
  }

  if (goals) {
    const goalsList = goals.split('\n').filter(g => g.trim());
    document.getElementById('goalsDisplay').innerHTML = goalsList.map(g =>
      `<div class="goal-item">🎯 ${escapeHtml(g)}</div>`
    ).join('');
  }

  startCountdown(new Date(gameTime));
  setVisualizationPrompt(sport);

  showToast('Lock In Mode activated! Stay focused.', 'success');
}

function startCountdown(gameTime) {
  if (lockInInterval) clearInterval(lockInInterval);

  function updateCountdown() {
    const now = new Date();
    const diff = gameTime - now;

    if (diff <= 0) {
      document.getElementById('hoursDisplay').textContent = '00';
      document.getElementById('minutesDisplay').textContent = '00';
      document.getElementById('secondsDisplay').textContent = '00';
      clearInterval(lockInInterval);
      showToast("It's GAME TIME! Go compete!", 'success');
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('hoursDisplay').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutesDisplay').textContent = String(minutes).padStart(2, '0');
    document.getElementById('secondsDisplay').textContent = String(seconds).padStart(2, '0');

    const miniDisplay = document.getElementById('countdownDisplay');
    if (miniDisplay) {
      miniDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }

  updateCountdown();
  lockInInterval = setInterval(updateCountdown, 1000);
}

async function checkActiveLockIn() {
  const lockIn = await getLockInFromFirestore();
  if (!lockIn) return;

  const gameTime = new Date(lockIn.gameTime);
  const now = new Date();

  if (gameTime > now) {
    const miniDisplay = document.getElementById('countdownDisplay');
    if (miniDisplay) {
      const diff = gameTime - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      miniDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  } else {
    // Clear expired lock in
    await deleteLockInFromFirestore();
  }
}

async function endLockIn() {
  if (lockInInterval) clearInterval(lockInInterval);
  if (breathingInterval) clearInterval(breathingInterval);

  await deleteLockInFromFirestore();

  document.getElementById('lockinSetup').classList.remove('hidden');
  document.getElementById('lockinActive').classList.add('hidden');

  document.getElementById('gameGoals').value = '';
  document.getElementById('opponentInput').value = '';

  showToast('Lock In ended. Go get it!', 'info');
  closeLockInModal();
}

function setVisualizationPrompt(sport) {
  const prompts = VISUALIZATION_PROMPTS[sport] || VISUALIZATION_PROMPTS.default;
  const allPrompts = [...VISUALIZATION_PROMPTS.default, ...prompts];
  currentVizIndex = 0;

  document.getElementById('vizPrompt').innerHTML = `<p>Close your eyes and picture yourself ${allPrompts[0].toLowerCase()}...</p>`;
}

async function nextVisualization() {
  const lockIn = await getLockInFromFirestore();
  const sport = lockIn?.sport || 'default';
  const prompts = VISUALIZATION_PROMPTS[sport] || VISUALIZATION_PROMPTS.default;
  const allPrompts = [...VISUALIZATION_PROMPTS.default, ...prompts];

  currentVizIndex = (currentVizIndex + 1) % allPrompts.length;
  document.getElementById('vizPrompt').innerHTML = `<p>Close your eyes and picture yourself ${allPrompts[currentVizIndex].toLowerCase()}...</p>`;
}

function nextAffirmation() {
  currentAffirmationIndex = (currentAffirmationIndex + 1) % AFFIRMATIONS.length;
  document.getElementById('affirmationText').textContent = `"${AFFIRMATIONS[currentAffirmationIndex]}"`;
}

function toggleBreathing() {
  const circle = document.getElementById('breathingCircle');
  const text = document.getElementById('breathingText');
  const btn = circle.parentElement.querySelector('button');

  if (breathingInterval) {
    clearInterval(breathingInterval);
    breathingInterval = null;
    circle.classList.remove('breathing-in', 'breathing-out', 'breathing-hold');
    text.textContent = 'Breathe In';
    btn.textContent = 'Start Breathing';
    return;
  }

  btn.textContent = 'Stop';
  let phase = 0; // 0: in, 1: hold, 2: out

  function breathCycle() {
    if (phase === 0) {
      circle.classList.remove('breathing-out', 'breathing-hold');
      circle.classList.add('breathing-in');
      text.textContent = 'Breathe In';
      setTimeout(() => { phase = 1; breathCycle(); }, 4000);
    } else if (phase === 1) {
      circle.classList.remove('breathing-in');
      circle.classList.add('breathing-hold');
      text.textContent = 'Hold';
      setTimeout(() => { phase = 2; breathCycle(); }, 7000);
    } else {
      circle.classList.remove('breathing-hold');
      circle.classList.add('breathing-out');
      text.textContent = 'Breathe Out';
      setTimeout(() => { phase = 0; breathCycle(); }, 8000);
    }
  }

  breathCycle();
  breathingInterval = true; // Flag only
}

// ==================== PRO HIGHLIGHTS ====================

async function openHighlightsModal() {
  document.getElementById('highlightsModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  await renderHighlights();
}

function closeHighlightsModal() {
  document.getElementById('highlightsModal').classList.add('hidden');
  document.body.style.overflow = '';
}

async function loadHighlightsPreview() {
  const container = document.getElementById('highlightsPreview');
  if (!container) return;

  const highlights = (await getProHighlights()).slice(0, 3);
  container.innerHTML = highlights.map(h => `
    <div class="highlight-thumb-mini" onclick="openHighlightsModal()">
      ${h.thumbnail
        ? `<img src="${h.thumbnail}" alt="${h.title}">`
        : `<div class="thumb-placeholder">🎬</div>`
      }
    </div>
  `).join('');
}

async function renderHighlights() {
  const container = document.getElementById('highlightsGrid');
  if (!container) return;

  container.innerHTML = '<p class="text-muted">Loading highlights...</p>';

  const sportFilter = document.getElementById('highlightsSportFilter').value;
  const categoryFilter = document.getElementById('highlightsCategoryFilter').value;

  let highlights = await getProHighlights();

  if (sportFilter) highlights = highlights.filter(h => h.sport === sportFilter);
  if (categoryFilter) highlights = highlights.filter(h => h.category === categoryFilter);

  if (highlights.length === 0) {
    container.innerHTML = '<p class="text-muted">No highlights found for these filters.</p>';
    return;
  }

  container.innerHTML = highlights.map(h => `
    <div class="highlight-card">
      <div class="highlight-video">
        ${h.url.includes('youtube')
          ? `<iframe src="${h.url}" frameborder="0" allowfullscreen></iframe>`
          : `<video src="${h.url}" controls></video>`
        }
      </div>
      <div class="highlight-info">
        <h4>${escapeHtml(h.title)}</h4>
        <div class="highlight-meta">
          <span class="highlight-sport">${getSportName(h.sport)}</span>
          <span class="highlight-category">${h.category}</span>
        </div>
        <p>${escapeHtml(h.description || '')}</p>
      </div>
    </div>
  `).join('');
}

async function filterHighlights() {
  await renderHighlights();
}

function toggleAddHighlight() {
  const form = document.getElementById('addHighlightForm');
  form.classList.toggle('hidden');
}

async function addProHighlight() {
  const title = document.getElementById('highlightTitle').value.trim();
  const url = document.getElementById('highlightUrl').value.trim();
  const sport = document.getElementById('highlightSport').value;
  const category = document.getElementById('highlightCategory').value;
  const description = document.getElementById('highlightDescription').value.trim();

  if (!title || !url) {
    showToast('Please enter a title and URL', 'error');
    return;
  }

  // Convert YouTube URL to embed
  let embedUrl = url;
  if (url.includes('youtube.com/watch')) {
    const videoId = url.split('v=')[1]?.split('&')[0];
    if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  const highlight = {
    title,
    url: embedUrl,
    thumbnail: embedUrl.includes('youtube') ? `https://img.youtube.com/vi/${embedUrl.split('/embed/')[1]}/hqdefault.jpg` : '',
    sport,
    category,
    description
  };

  await addHighlightToFirestore(highlight);

  // Clear form
  document.getElementById('highlightTitle').value = '';
  document.getElementById('highlightUrl').value = '';
  document.getElementById('highlightDescription').value = '';
  document.getElementById('addHighlightForm').classList.add('hidden');

  await renderHighlights();
  await loadHighlightsPreview();
  showToast('Highlight added!', 'success');
}

// ==================== CLIP ANALYSIS ====================

async function loadAnalysisStats() {
  const analyses = await getClipAnalyses();
  const totalAnnotations = analyses.reduce((sum, a) => sum + (a.notes?.length || 0) + (a.annotations?.length || 0), 0);

  const clipsEl = document.getElementById('clipsAnalyzed');
  const annotationsEl = document.getElementById('annotationsCount');

  if (clipsEl) clipsEl.textContent = analyses.length;
  if (annotationsEl) annotationsEl.textContent = totalAnnotations;
}

async function openAnalysisModal() {
  document.getElementById('analysisModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  await renderSavedAnalyses();
}

function closeAnalysisModal() {
  document.getElementById('analysisModal').classList.add('hidden');
  document.body.style.overflow = '';
}

function handleAnalysisUpload(input) {
  if (!input.files[0]) return;

  const file = input.files[0];
  const video = document.getElementById('analysisVideo');
  const url = URL.createObjectURL(file);

  video.src = url;
  video.dataset.isLocalFile = 'true';
  video.dataset.fileName = file.name;
  video.onloadedmetadata = () => {
    showAnalysisWorkspace();
    initAnnotationCanvas();
  };
}

function loadAnalysisUrl() {
  const url = document.getElementById('analysisVideoUrl').value.trim();
  if (!url) {
    showToast('Please enter a video URL', 'error');
    return;
  }

  const video = document.getElementById('analysisVideo');

  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    showToast('For YouTube videos, use the Pro Highlights feature or download the clip first', 'info');
    return;
  }

  video.src = url;
  video.dataset.isLocalFile = 'false';
  video.onloadedmetadata = () => {
    showAnalysisWorkspace();
    initAnnotationCanvas();
  };
  video.onerror = () => {
    showToast('Could not load video from URL', 'error');
  };
}

function showAnalysisWorkspace() {
  document.getElementById('analysisUpload').classList.add('hidden');
  document.getElementById('analysisWorkspace').classList.remove('hidden');
  analysisAnnotations = [];
}

function resetAnalysis() {
  document.getElementById('analysisUpload').classList.remove('hidden');
  document.getElementById('analysisWorkspace').classList.add('hidden');
  document.getElementById('analysisVideo').src = '';
  document.getElementById('analysisVideoUrl').value = '';
  document.getElementById('analysisnotesList').innerHTML = '';
  analysisAnnotations = [];
  clearAnnotations();
}

function initAnnotationCanvas() {
  const video = document.getElementById('analysisVideo');
  const canvas = document.getElementById('annotationCanvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;
    redrawAnnotations();
  }

  video.addEventListener('loadeddata', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let isDrawing = false;
  let startX, startY;
  let currentPath = [];

  canvas.addEventListener('mousedown', (e) => {
    if (analysisCurrentTool === 'pointer') return;

    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;
    currentPath = [{x: startX, y: startY}];
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (analysisCurrentTool === 'draw') {
      currentPath.push({x, y});
      ctx.strokeStyle = analysisCurrentColor;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(currentPath[currentPath.length - 2].x, currentPath[currentPath.length - 2].y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  });

  canvas.addEventListener('mouseup', (e) => {
    if (!isDrawing) return;
    isDrawing = false;

    const rect = canvas.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;

    const annotation = {
      tool: analysisCurrentTool,
      color: analysisCurrentColor,
      startX, startY, endX, endY,
      path: analysisCurrentTool === 'draw' ? [...currentPath] : null,
      timestamp: video.currentTime
    };

    if (analysisCurrentTool === 'text') {
      const text = prompt('Enter annotation text:');
      if (text) {
        annotation.text = text;
        analysisAnnotations.push(annotation);
      }
    } else {
      analysisAnnotations.push(annotation);
    }

    redrawAnnotations();
  });

  video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    document.getElementById('timelineProgress').style.width = progress + '%';
  });
}

function selectTool(tool) {
  analysisCurrentTool = tool;
  document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tool === tool);
  });
}

function selectColor(color) {
  analysisCurrentColor = color;
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.color === color);
  });
}

function redrawAnnotations() {
  const canvas = document.getElementById('annotationCanvas');
  const ctx = canvas.getContext('2d');
  const video = document.getElementById('analysisVideo');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const currentTime = video.currentTime;
  const visibleAnnotations = analysisAnnotations.filter(a =>
    Math.abs(a.timestamp - currentTime) < 2
  );

  visibleAnnotations.forEach(a => {
    ctx.strokeStyle = a.color;
    ctx.fillStyle = a.color;
    ctx.lineWidth = 3;

    switch(a.tool) {
      case 'circle':
        const radius = Math.sqrt(Math.pow(a.endX - a.startX, 2) + Math.pow(a.endY - a.startY, 2));
        ctx.beginPath();
        ctx.arc(a.startX, a.startY, radius, 0, Math.PI * 2);
        ctx.stroke();
        break;

      case 'arrow':
        ctx.beginPath();
        ctx.moveTo(a.startX, a.startY);
        ctx.lineTo(a.endX, a.endY);
        ctx.stroke();
        const angle = Math.atan2(a.endY - a.startY, a.endX - a.startX);
        ctx.beginPath();
        ctx.moveTo(a.endX, a.endY);
        ctx.lineTo(a.endX - 15 * Math.cos(angle - Math.PI/6), a.endY - 15 * Math.sin(angle - Math.PI/6));
        ctx.lineTo(a.endX - 15 * Math.cos(angle + Math.PI/6), a.endY - 15 * Math.sin(angle + Math.PI/6));
        ctx.closePath();
        ctx.fill();
        break;

      case 'draw':
        if (a.path && a.path.length > 1) {
          ctx.beginPath();
          ctx.moveTo(a.path[0].x, a.path[0].y);
          for (let i = 1; i < a.path.length; i++) {
            ctx.lineTo(a.path[i].x, a.path[i].y);
          }
          ctx.stroke();
        }
        break;

      case 'text':
        ctx.font = '16px Arial';
        ctx.fillText(a.text, a.startX, a.startY);
        break;
    }
  });
}

function clearAnnotations() {
  analysisAnnotations = [];
  const canvas = document.getElementById('annotationCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function addAnalysisNote() {
  const input = document.getElementById('noteInput');
  const video = document.getElementById('analysisVideo');
  const note = input.value.trim();

  if (!note) return;

  const notesList = document.getElementById('analysisnotesList');
  const time = formatTime(video.currentTime);

  notesList.innerHTML += `
    <div class="note-item" data-time="${video.currentTime}">
      <span class="note-time" onclick="seekToTime(${video.currentTime})">${time}</span>
      <span class="note-text">${escapeHtml(note)}</span>
    </div>
  `;

  const progress = (video.currentTime / video.duration) * 100;
  document.getElementById('timelineMarkers').innerHTML += `
    <div class="timeline-marker" style="left: ${progress}%" onclick="seekToTime(${video.currentTime})"></div>
  `;

  input.value = '';
}

function seekToTime(time) {
  document.getElementById('analysisVideo').currentTime = time;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

async function saveAnalysis() {
  const video = document.getElementById('analysisVideo');
  const notes = Array.from(document.querySelectorAll('.note-item')).map(el => ({
    time: parseFloat(el.dataset.time),
    text: el.querySelector('.note-text').textContent
  }));

  if (notes.length === 0 && analysisAnnotations.length === 0) {
    showToast('Add some notes or annotations first', 'error');
    return;
  }

  // Blob URLs (local files) can't be stored cross-session — save the filename as a reference
  const isLocalFile = video.dataset.isLocalFile === 'true';
  const videoRef = isLocalFile
    ? { type: 'local', name: video.dataset.fileName || 'local-file' }
    : { type: 'url', src: video.src };

  const analysis = {
    videoRef,
    notes,
    annotations: analysisAnnotations,
    createdAt: new Date().toISOString()
  };

  await saveAnalysisToFirestore(analysis);

  await loadAnalysisStats();
  await renderSavedAnalyses();
  showToast('Analysis saved!', 'success');
}

async function renderSavedAnalyses() {
  const container = document.getElementById('savedAnalysesList');
  if (!container) return;

  container.innerHTML = '<p class="text-muted">Loading...</p>';

  const analyses = await getClipAnalyses();

  if (analyses.length === 0) {
    container.innerHTML = '<p class="text-muted">No saved analyses yet</p>';
    return;
  }

  container.innerHTML = analyses.slice(0, 5).map(a => {
    const videoLabel = a.videoRef?.type === 'local'
      ? `📁 ${a.videoRef.name}`
      : a.videoRef?.type === 'url'
        ? '🔗 URL clip'
        : '🎬 Clip';
    return `
      <div class="saved-analysis-item">
        <div class="analysis-info">
          <span class="analysis-date">${new Date(a.createdAt).toLocaleDateString()}</span>
          <span class="analysis-count">${a.notes?.length || 0} notes, ${a.annotations?.length || 0} annotations</span>
          <span class="analysis-source">${videoLabel}</span>
        </div>
        <button class="btn btn-sm btn-secondary" onclick="loadSavedAnalysis('${a.id}')">Load</button>
      </div>
    `;
  }).join('');
}

async function loadSavedAnalysis(id) {
  const analyses = await getClipAnalyses();
  const analysis = analyses.find(a => a.id === id);

  if (!analysis) return;

  const video = document.getElementById('analysisVideo');

  // Handle URL-based video sources
  if (analysis.videoRef?.type === 'url') {
    video.src = analysis.videoRef.src;
  } else if (analysis.videoRef?.type === 'local') {
    // Local file can't be restored cross-session — prompt user to re-upload
    video.src = '';
    showToast(`Local file "${analysis.videoRef.name}" — please re-upload to view video`, 'info');
  } else if (analysis.videoSrc) {
    // Legacy format support
    video.src = analysis.videoSrc;
  }

  analysisAnnotations = analysis.annotations || [];

  const notesList = document.getElementById('analysisnotesList');
  notesList.innerHTML = (analysis.notes || []).map(n => `
    <div class="note-item" data-time="${n.time}">
      <span class="note-time" onclick="seekToTime(${n.time})">${formatTime(n.time)}</span>
      <span class="note-text">${escapeHtml(n.text)}</span>
    </div>
  `).join('');

  showAnalysisWorkspace();

  video.onloadeddata = () => {
    initAnnotationCanvas();
    const markers = document.getElementById('timelineMarkers');
    markers.innerHTML = (analysis.notes || []).map(n => {
      const progress = (n.time / video.duration) * 100;
      return `<div class="timeline-marker" style="left: ${progress}%" onclick="seekToTime(${n.time})"></div>`;
    }).join('');
  };
}

// ==================== GLOBAL EXPORTS ====================

window.openLockInModal = openLockInModal;
window.closeLockInModal = closeLockInModal;
window.startLockIn = startLockIn;
window.endLockIn = endLockIn;
window.nextVisualization = nextVisualization;
window.nextAffirmation = nextAffirmation;
window.toggleBreathing = toggleBreathing;
window.openHighlightsModal = openHighlightsModal;
window.closeHighlightsModal = closeHighlightsModal;
window.filterHighlights = filterHighlights;
window.toggleAddHighlight = toggleAddHighlight;
window.addProHighlight = addProHighlight;
window.openAnalysisModal = openAnalysisModal;
window.closeAnalysisModal = closeAnalysisModal;
window.handleAnalysisUpload = handleAnalysisUpload;
window.loadAnalysisUrl = loadAnalysisUrl;
window.resetAnalysis = resetAnalysis;
window.selectTool = selectTool;
window.selectColor = selectColor;
window.clearAnnotations = clearAnnotations;
window.addAnalysisNote = addAnalysisNote;
window.seekToTime = seekToTime;
window.saveAnalysis = saveAnalysis;
window.loadSavedAnalysis = loadSavedAnalysis;
