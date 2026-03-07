// ==================== AUTH.JS - Enhanced Authentication System ====================
// This file contains improved authentication features for AthletePro

// ==================== AUTH MODAL ====================

// Create a login modal for protected actions
function createAuthModal() {
  // Check if modal already exists
  if (document.getElementById('authModal')) return;

  const modalHTML = `
    <div id="authModal" class="modal-overlay hidden">
      <div class="modal-content auth-modal-content">
        <div class="modal-header">
          <h2 id="authModalTitle">Login Required</h2>
          <button class="modal-close" onclick="closeAuthModal()">&times;</button>
        </div>
        <div class="modal-body">
          <p id="authModalMessage" class="auth-modal-message">Please log in to continue</p>

          <!-- Login Form -->
          <div id="authLoginForm" class="auth-modal-form">
            <form onsubmit="handleQuickLogin(event)">
              <div class="form-group">
                <label for="quickLoginEmail">Email</label>
                <input type="email" id="quickLoginEmail" class="form-control" placeholder="your@email.com" required>
              </div>
              <div class="form-group">
                <label for="quickLoginPassword">Password</label>
                <input type="password" id="quickLoginPassword" class="form-control" placeholder="Enter your password" required>
              </div>
              <div class="form-group checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" id="quickRememberMe" checked>
                  <span>Remember me</span>
                </label>
              </div>
              <button type="submit" class="btn btn-primary btn-block" id="quickLoginBtn">
                <span class="btn-text">Log In</span>
                <span class="btn-loading hidden">
                  <span class="spinner"></span> Logging in...
                </span>
              </button>
            </form>
            <div class="auth-modal-footer">
              <p>Don't have an account? <a href="#" onclick="switchToSignup()">Sign up</a></p>
            </div>
          </div>

          <!-- Signup Form -->
          <div id="authSignupForm" class="auth-modal-form hidden">
            <form onsubmit="handleQuickSignup(event)">
              <div class="form-group">
                <label for="quickSignupName">Full Name</label>
                <input type="text" id="quickSignupName" class="form-control" placeholder="Enter your name" required>
              </div>
              <div class="form-group">
                <label for="quickSignupEmail">Email</label>
                <input type="email" id="quickSignupEmail" class="form-control" placeholder="your@email.com" required>
              </div>
              <div class="form-group">
                <label for="quickSignupPassword">Password</label>
                <input type="password" id="quickSignupPassword" class="form-control" placeholder="At least 6 characters" required minlength="6">
              </div>
              <div class="form-group">
                <label>Account Type</label>
                <div class="quick-account-types">
                  <label class="quick-type-option">
                    <input type="radio" name="quickAccountType" value="athlete" checked>
                    <span>Athlete</span>
                  </label>
                  <label class="quick-type-option">
                    <input type="radio" name="quickAccountType" value="scout">
                    <span>Scout</span>
                  </label>
                  <label class="quick-type-option">
                    <input type="radio" name="quickAccountType" value="coach">
                    <span>Coach</span>
                  </label>
                  <label class="quick-type-option">
                    <input type="radio" name="quickAccountType" value="parent">
                    <span>Parent</span>
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-block" id="quickSignupBtn">
                <span class="btn-text">Create Account</span>
                <span class="btn-loading hidden">
                  <span class="spinner"></span> Creating...
                </span>
              </button>
            </form>
            <div class="auth-modal-footer">
              <p>Already have an account? <a href="#" onclick="switchToLogin()">Log in</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Show auth modal with custom message
function showAuthModal(message = 'Please log in to continue', action = null) {
  createAuthModal();

  const modal = document.getElementById('authModal');
  const messageEl = document.getElementById('authModalMessage');

  if (messageEl) {
    messageEl.textContent = message;
  }

  // Store the pending action
  window.pendingAuthAction = action;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Focus on email input
  setTimeout(() => {
    document.getElementById('quickLoginEmail')?.focus();
  }, 100);
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    window.pendingAuthAction = null;
  }
}

function switchToSignup() {
  document.getElementById('authLoginForm').classList.add('hidden');
  document.getElementById('authSignupForm').classList.remove('hidden');
  document.getElementById('authModalTitle').textContent = 'Create Account';
  document.getElementById('quickSignupName')?.focus();
}

function switchToLogin() {
  document.getElementById('authSignupForm').classList.add('hidden');
  document.getElementById('authLoginForm').classList.remove('hidden');
  document.getElementById('authModalTitle').textContent = 'Login Required';
  document.getElementById('quickLoginEmail')?.focus();
}

// Handle quick login from modal
function handleQuickLogin(event) {
  event.preventDefault();

  const btn = document.getElementById('quickLoginBtn');
  const btnText = btn.querySelector('.btn-text');
  const btnLoading = btn.querySelector('.btn-loading');

  const email = document.getElementById('quickLoginEmail').value.trim();
  const password = document.getElementById('quickLoginPassword').value;
  const rememberMe = document.getElementById('quickRememberMe').checked;

  if (!email || !password) {
    showToast('Please fill in all fields', 'error');
    return;
  }

  // Show loading state
  btnText.classList.add('hidden');
  btnLoading.classList.remove('hidden');
  btn.disabled = true;

  // Simulate slight delay for better UX
  setTimeout(() => {
    const result = loginAccount(email, password);

    if (result.error) {
      showToast(result.error, 'error');
      btnText.classList.remove('hidden');
      btnLoading.classList.add('hidden');
      btn.disabled = false;
    } else {
      // Set remember me preference
      if (rememberMe) {
        localStorage.setItem('athletepro_remember_email', email);
      } else {
        localStorage.removeItem('athletepro_remember_email');
      }

      showToast('Welcome back!', 'success');
      closeAuthModal();
      updateAuthUI();

      // Execute pending action if any
      if (window.pendingAuthAction && typeof window.pendingAuthAction === 'function') {
        setTimeout(() => {
          window.pendingAuthAction();
        }, 300);
      }

      // Reload the page to update all auth states
      setTimeout(() => {
        location.reload();
      }, 500);
    }
  }, 500);
}

// Handle quick signup from modal
function handleQuickSignup(event) {
  event.preventDefault();

  const btn = document.getElementById('quickSignupBtn');
  const btnText = btn.querySelector('.btn-text');
  const btnLoading = btn.querySelector('.btn-loading');

  const name = document.getElementById('quickSignupName').value.trim();
  const email = document.getElementById('quickSignupEmail').value.trim();
  const password = document.getElementById('quickSignupPassword').value;
  const accountType = document.querySelector('input[name="quickAccountType"]:checked')?.value || 'athlete';

  if (!name || !email || !password) {
    showToast('Please fill in all fields', 'error');
    return;
  }

  if (password.length < 6) {
    showToast('Password must be at least 6 characters', 'error');
    return;
  }

  // Show loading state
  btnText.classList.add('hidden');
  btnLoading.classList.remove('hidden');
  btn.disabled = true;

  setTimeout(() => {
    const result = createAccount(email, password, name, accountType);

    if (result.error) {
      showToast(result.error, 'error');
      btnText.classList.remove('hidden');
      btnLoading.classList.add('hidden');
      btn.disabled = false;
    } else {
      // Auto login
      loginAccount(email, password);

      const welcomeMsg = accountType === 'scout' ? 'Welcome Scout!' :
                         accountType === 'coach' ? 'Welcome Coach!' :
                         accountType === 'parent' ? 'Welcome!' :
                         'Welcome to AthletePro!';

      showToast(welcomeMsg, 'success');
      closeAuthModal();
      updateAuthUI();

      // Execute pending action if any
      if (window.pendingAuthAction && typeof window.pendingAuthAction === 'function') {
        setTimeout(() => {
          window.pendingAuthAction();
        }, 300);
      }

      setTimeout(() => {
        location.reload();
      }, 500);
    }
  }, 500);
}

// ==================== PROTECTED ACTION WRAPPER ====================

// Wrap actions that require authentication
function requireAuth(action, message = 'Please log in to continue') {
  if (isLoggedIn()) {
    if (typeof action === 'function') {
      action();
    }
  } else {
    showAuthModal(message, action);
  }
}

// Check if action requires login and show modal
function checkAuthAndProceed(redirectUrl, message = 'Please log in to continue') {
  if (isLoggedIn()) {
    window.location.href = redirectUrl;
  } else {
    showAuthModal(message, () => {
      window.location.href = redirectUrl;
    });
  }
}

// ==================== REMEMBER ME FUNCTIONALITY ====================

function loadRememberedEmail() {
  const rememberedEmail = localStorage.getItem('athletepro_remember_email');

  // For login page
  const loginEmail = document.getElementById('loginEmail');
  if (loginEmail && rememberedEmail) {
    loginEmail.value = rememberedEmail;
    // Focus on password instead
    document.getElementById('loginPassword')?.focus();
  }

  // For quick login modal
  const quickLoginEmail = document.getElementById('quickLoginEmail');
  if (quickLoginEmail && rememberedEmail) {
    quickLoginEmail.value = rememberedEmail;
  }
}

// ==================== SESSION MANAGEMENT ====================

// Check session validity
function checkSession() {
  const account = getCurrentAccount();
  if (!account) return false;

  // You could add session expiry logic here
  return true;
}

// Auto logout after inactivity (optional - 30 minutes)
let inactivityTimer;
const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes

function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  if (isLoggedIn()) {
    inactivityTimer = setTimeout(() => {
      showToast('Session expired. Please log in again.', 'warning');
      logoutAccount();
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1500);
    }, INACTIVITY_TIMEOUT);
  }
}

// ==================== ENHANCED LOGIN PAGE ====================

function enhanceLoginPage() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  // Add loading state to login button
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <span class="btn-text">${originalText}</span>
      <span class="btn-loading hidden">
        <span class="spinner"></span> Logging in...
      </span>
    `;
  }

  // Load remembered email
  loadRememberedEmail();

  // Add remember me checkbox if not exists
  const passwordGroup = form.querySelector('.form-group:has(#loginPassword)') ||
                        form.querySelectorAll('.form-group')[1];
  if (passwordGroup && !document.getElementById('rememberMe')) {
    const rememberHTML = `
      <div class="form-group checkbox-group">
        <label class="checkbox-label">
          <input type="checkbox" id="rememberMe" checked>
          <span>Remember me</span>
        </label>
      </div>
    `;
    passwordGroup.insertAdjacentHTML('afterend', rememberHTML);
  }

  // Override form submit for smooth experience
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const btnText = btn?.querySelector('.btn-text');
    const btnLoading = btn?.querySelector('.btn-loading');

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe')?.checked ?? true;

    if (!email || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    // Show loading state
    if (btnText) btnText.classList.add('hidden');
    if (btnLoading) btnLoading.classList.remove('hidden');
    if (btn) btn.disabled = true;

    // Simulate network delay for better UX
    setTimeout(() => {
      const result = loginAccount(email, password);

      if (result.error) {
        showToast(result.error, 'error');
        if (btnText) btnText.classList.remove('hidden');
        if (btnLoading) btnLoading.classList.add('hidden');
        if (btn) btn.disabled = false;

        // Shake animation on error
        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'), 500);
      } else {
        // Save email if remember me is checked
        if (rememberMe) {
          localStorage.setItem('athletepro_remember_email', email);
        } else {
          localStorage.removeItem('athletepro_remember_email');
        }

        showToast('Welcome back!', 'success');

        // Smooth transition
        document.querySelector('.auth-card')?.classList.add('success-fade');

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 800);
      }
    }, 600);
  });
}

// ==================== ENHANCED SIGNUP PAGE ====================

function enhanceSignupPage() {
  const form = document.getElementById('signupForm');
  if (!form) return;

  // Add loading state to signup button
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <span class="btn-text">${originalText}</span>
      <span class="btn-loading hidden">
        <span class="spinner"></span> Creating account...
      </span>
    `;
  }

  // Real-time password strength indicator
  const passwordInput = document.getElementById('signupPassword');
  if (passwordInput && !document.getElementById('passwordStrength')) {
    const strengthHTML = `<div id="passwordStrength" class="password-strength"></div>`;
    passwordInput.parentElement.insertAdjacentHTML('beforeend', strengthHTML);

    passwordInput.addEventListener('input', (e) => {
      updatePasswordStrength(e.target.value);
    });
  }

  // Override form submit for smooth experience
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const btnText = btn?.querySelector('.btn-text');
    const btnLoading = btn?.querySelector('.btn-loading');

    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const accountType = document.querySelector('input[name="accountType"]:checked')?.value || 'athlete';

    if (!name || !email || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    if (password.length < 6) {
      showToast('Password must be at least 6 characters', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }

    // Show loading state
    if (btnText) btnText.classList.add('hidden');
    if (btnLoading) btnLoading.classList.remove('hidden');
    if (btn) btn.disabled = true;

    setTimeout(() => {
      const result = createAccount(email, password, name, accountType);

      if (result.error) {
        showToast(result.error, 'error');
        if (btnText) btnText.classList.remove('hidden');
        if (btnLoading) btnLoading.classList.add('hidden');
        if (btn) btn.disabled = false;

        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'), 500);
      } else {
        // Auto login
        loginAccount(email, password);

        const welcomeMsg = accountType === 'scout' ? 'Welcome Scout! Start discovering talent.' :
                           accountType === 'coach' ? 'Welcome Coach! Build your team.' :
                           accountType === 'parent' ? 'Welcome! Support your athlete.' :
                           'Welcome to AthletePro!';

        showToast(welcomeMsg, 'success');

        document.querySelector('.auth-card')?.classList.add('success-fade');

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 800);
      }
    }, 600);
  });
}

function updatePasswordStrength(password) {
  const strengthEl = document.getElementById('passwordStrength');
  if (!strengthEl) return;

  let strength = 0;
  let label = '';
  let color = '';

  if (password.length >= 6) strength++;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (password.length === 0) {
    strengthEl.innerHTML = '';
    return;
  }

  switch(strength) {
    case 0:
    case 1:
      label = 'Weak';
      color = 'var(--error)';
      break;
    case 2:
      label = 'Fair';
      color = 'var(--warning)';
      break;
    case 3:
      label = 'Good';
      color = 'var(--secondary)';
      break;
    case 4:
    case 5:
      label = 'Strong';
      color = 'var(--success)';
      break;
  }

  strengthEl.innerHTML = `
    <div class="strength-bar">
      <div class="strength-fill" style="width: ${strength * 20}%; background: ${color}"></div>
    </div>
    <span class="strength-label" style="color: ${color}">${label}</span>
  `;
}

// ==================== INITIALIZATION ====================

// Initialize auth enhancements on page load
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  // Enhance login page
  if (page === 'login') {
    enhanceLoginPage();
  }

  // Enhance signup page
  if (page === 'signup') {
    enhanceSignupPage();
  }

  // Create auth modal for other pages
  if (page !== 'login' && page !== 'signup') {
    createAuthModal();
  }

  // Setup inactivity timer
  if (isLoggedIn()) {
    resetInactivityTimer();
    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, resetInactivityTimer, { passive: true });
    });
  }
});

// Make functions globally available
window.showAuthModal = showAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchToLogin = switchToLogin;
window.switchToSignup = switchToSignup;
window.handleQuickLogin = handleQuickLogin;
window.handleQuickSignup = handleQuickSignup;
window.requireAuth = requireAuth;
window.checkAuthAndProceed = checkAuthAndProceed;
