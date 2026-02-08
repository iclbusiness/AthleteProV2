// ==================== GAME DAY TOOLS ====================

// Storage keys
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

// Default pro highlights
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

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  initGameDayPage();
});

function initGameDayPage() {
  // Populate sport selectors
  populateSportSelectors();

  // Load tips
  renderTips();

  // Check for active lock in
  checkActiveLockIn();

  // Load stats
  loadAnalysisStats();

  // Load highlights preview
  loadHighlightsPreview();

  // Initialize pro highlights if not exists
  if (!localStorage.getItem(PRO_HIGHLIGHTS_KEY)) {
    localStorage.setItem(PRO_HIGHLIGHTS_KEY, JSON.stringify(DEFAULT_PRO_HIGHLIGHTS));
  }
}

function populateSportSelectors() {
  const selectors = ['lockInSport', 'highlightsSportFilter', 'highlightSport'];

  selectors.forEach(id => {
    const selector = document.getElementById(id);
    if (selector && typeof SPORTS_CONFIG !== 'undefined') {
      const currentOptions = selector.innerHTML;
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

function startLockIn() {
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

  localStorage.setItem(LOCKIN_KEY, JSON.stringify(lockInData));

  // Show active phase
  document.getElementById('lockinSetup').classList.add('hidden');
  document.getElementById('lockinActive').classList.remove('hidden');

  // Display data
  if (opponent) {
    document.getElementById('opponentDisplay').textContent = `vs ${opponent}`;
  }

  if (goals) {
    const goalsList = goals.split('\n').filter(g => g.trim());
    document.getElementById('goalsDisplay').innerHTML = goalsList.map(g =>
      `<div class="goal-item">🎯 ${escapeHtml(g)}</div>`
    ).join('');
  }

  // Start countdown
  startCountdown(new Date(gameTime));

  // Set initial visualization
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

    // Update mini display
    const miniDisplay = document.getElementById('countdownDisplay');
    if (miniDisplay) {
      miniDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }

  updateCountdown();
  lockInInterval = setInterval(updateCountdown, 1000);
}

function checkActiveLockIn() {
  const data = localStorage.getItem(LOCKIN_KEY);
  if (!data) return;

  const lockIn = JSON.parse(data);
  const gameTime = new Date(lockIn.gameTime);
  const now = new Date();

  // If game time hasn't passed, restore the lock in
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
    localStorage.removeItem(LOCKIN_KEY);
  }
}

function endLockIn() {
  if (lockInInterval) clearInterval(lockInInterval);
  if (breathingInterval) clearInterval(breathingInterval);

  localStorage.removeItem(LOCKIN_KEY);

  document.getElementById('lockinSetup').classList.remove('hidden');
  document.getElementById('lockinActive').classList.add('hidden');

  // Reset form
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

function nextVisualization() {
  const data = localStorage.getItem(LOCKIN_KEY);
  const sport = data ? JSON.parse(data).sport : 'default';
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
  breathingInterval = true; // Just a flag
}

// ==================== PRO HIGHLIGHTS ====================

function getProHighlights() {
  const data = localStorage.getItem(PRO_HIGHLIGHTS_KEY);
  return data ? JSON.parse(data) : DEFAULT_PRO_HIGHLIGHTS;
}

function saveProHighlights(highlights) {
  localStorage.setItem(PRO_HIGHLIGHTS_KEY, JSON.stringify(highlights));
}

function openHighlightsModal() {
  document.getElementById('highlightsModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  renderHighlights();
}

function closeHighlightsModal() {
  document.getElementById('highlightsModal').classList.add('hidden');
  document.body.style.overflow = '';
}

function loadHighlightsPreview() {
  const container = document.getElementById('highlightsPreview');
  if (!container) return;

  const highlights = getProHighlights().slice(0, 3);
  container.innerHTML = highlights.map(h => `
    <div class="highlight-thumb-mini" onclick="openHighlightsModal()">
      ${h.thumbnail
        ? `<img src="${h.thumbnail}" alt="${h.title}">`
        : `<div class="thumb-placeholder">🎬</div>`
      }
    </div>
  `).join('');
}

function renderHighlights() {
  const container = document.getElementById('highlightsGrid');
  if (!container) return;

  const sportFilter = document.getElementById('highlightsSportFilter').value;
  const categoryFilter = document.getElementById('highlightsCategoryFilter').value;

  let highlights = getProHighlights();

  if (sportFilter) {
    highlights = highlights.filter(h => h.sport === sportFilter);
  }
  if (categoryFilter) {
    highlights = highlights.filter(h => h.category === categoryFilter);
  }

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

function filterHighlights() {
  renderHighlights();
}

function toggleAddHighlight() {
  const form = document.getElementById('addHighlightForm');
  form.classList.toggle('hidden');
}

function addProHighlight() {
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
    id: 'ph_' + Date.now(),
    title,
    url: embedUrl,
    thumbnail: embedUrl.includes('youtube') ? `https://img.youtube.com/vi/${embedUrl.split('/embed/')[1]}/hqdefault.jpg` : '',
    sport,
    category,
    description
  };

  const highlights = getProHighlights();
  highlights.unshift(highlight);
  saveProHighlights(highlights);

  // Clear form
  document.getElementById('highlightTitle').value = '';
  document.getElementById('highlightUrl').value = '';
  document.getElementById('highlightDescription').value = '';
  document.getElementById('addHighlightForm').classList.add('hidden');

  renderHighlights();
  loadHighlightsPreview();
  showToast('Highlight added!', 'success');
}

// ==================== CLIP ANALYSIS ====================

function getClipAnalyses() {
  const data = localStorage.getItem(CLIP_ANALYSES_KEY);
  return data ? JSON.parse(data) : [];
}

function saveClipAnalyses(analyses) {
  localStorage.setItem(CLIP_ANALYSES_KEY, JSON.stringify(analyses));
}

function loadAnalysisStats() {
  const analyses = getClipAnalyses();
  const totalAnnotations = analyses.reduce((sum, a) => sum + (a.notes?.length || 0) + (a.annotations?.length || 0), 0);

  const clipsEl = document.getElementById('clipsAnalyzed');
  const annotationsEl = document.getElementById('annotationsCount');

  if (clipsEl) clipsEl.textContent = analyses.length;
  if (annotationsEl) annotationsEl.textContent = totalAnnotations;
}

function openAnalysisModal() {
  document.getElementById('analysisModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  renderSavedAnalyses();
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

  // Handle YouTube URLs
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    showToast('For YouTube videos, use the Pro Highlights feature or download the clip first', 'info');
    return;
  }

  video.src = url;
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

  // Size canvas to video
  function resizeCanvas() {
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;
    redrawAnnotations();
  }

  video.addEventListener('loadeddata', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Drawing
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
      // Draw live
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

  // Update timeline
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

  // Only show annotations near current time (within 2 seconds)
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
        // Arrow head
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

  const noteData = {
    text: note,
    timestamp: video.currentTime,
    id: Date.now()
  };

  const notesList = document.getElementById('analysisnotesList');
  const time = formatTime(video.currentTime);

  notesList.innerHTML += `
    <div class="note-item" data-time="${video.currentTime}">
      <span class="note-time" onclick="seekToTime(${video.currentTime})">${time}</span>
      <span class="note-text">${escapeHtml(note)}</span>
    </div>
  `;

  // Add marker to timeline
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

function saveAnalysis() {
  const video = document.getElementById('analysisVideo');
  const notes = Array.from(document.querySelectorAll('.note-item')).map(el => ({
    time: parseFloat(el.dataset.time),
    text: el.querySelector('.note-text').textContent
  }));

  if (notes.length === 0 && analysisAnnotations.length === 0) {
    showToast('Add some notes or annotations first', 'error');
    return;
  }

  const analysis = {
    id: 'analysis_' + Date.now(),
    videoSrc: video.src,
    notes,
    annotations: analysisAnnotations,
    createdAt: new Date().toISOString()
  };

  const analyses = getClipAnalyses();
  analyses.unshift(analysis);
  saveClipAnalyses(analyses);

  loadAnalysisStats();
  renderSavedAnalyses();
  showToast('Analysis saved!', 'success');
}

function renderSavedAnalyses() {
  const container = document.getElementById('savedAnalysesList');
  if (!container) return;

  const analyses = getClipAnalyses();

  if (analyses.length === 0) {
    container.innerHTML = '<p class="text-muted">No saved analyses yet</p>';
    return;
  }

  container.innerHTML = analyses.slice(0, 5).map(a => `
    <div class="saved-analysis-item">
      <div class="analysis-info">
        <span class="analysis-date">${new Date(a.createdAt).toLocaleDateString()}</span>
        <span class="analysis-count">${a.notes?.length || 0} notes, ${a.annotations?.length || 0} annotations</span>
      </div>
      <button class="btn btn-sm btn-secondary" onclick="loadSavedAnalysis('${a.id}')">Load</button>
    </div>
  `).join('');
}

function loadSavedAnalysis(id) {
  const analyses = getClipAnalyses();
  const analysis = analyses.find(a => a.id === id);

  if (!analysis) return;

  const video = document.getElementById('analysisVideo');
  video.src = analysis.videoSrc;

  analysisAnnotations = analysis.annotations || [];

  // Render notes
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
    // Render timeline markers
    const markers = document.getElementById('timelineMarkers');
    markers.innerHTML = (analysis.notes || []).map(n => {
      const progress = (n.time / video.duration) * 100;
      return `<div class="timeline-marker" style="left: ${progress}%" onclick="seekToTime(${n.time})"></div>`;
    }).join('');
  };
}

// Make functions globally available
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
