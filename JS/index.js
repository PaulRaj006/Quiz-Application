/* =========================================================
   PlacementPro — Authentication logic
   Storage shape:
   localStorage.users        -> JSON array of { username, email, password }
   localStorage.currentUser  -> logged-in username (string)
========================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------
     0. Auto-redirect if already signed in
  --------------------------------------------------- */
  if (localStorage.getItem("currentUser")) {
    window.location.href = "home.html";
    return;
  }

  /* ---------------------------------------------------
     1. Element refs
  --------------------------------------------------- */
  const signupPanel = document.getElementById("signupPanel");
  const signinPanel = document.getElementById("signinPanel");
  const toSignIn = document.getElementById("toSignIn");
  const toSignUp = document.getElementById("toSignUp");
  const formMessage = document.getElementById("formMessage");

  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  /* ---------------------------------------------------
     2. Panel switching (Sign Up <-> Sign In)
  --------------------------------------------------- */
  function showPanel(panel) {
    clearMessage();
    [signupPanel, signinPanel].forEach((p) => {
      p.hidden = p !== panel;
    });
    panel.classList.remove("form-panel");
    // restart the entrance animation
    void panel.offsetWidth;
    panel.classList.add("form-panel");
  }

  toSignIn.addEventListener("click", () => showPanel(signinPanel));
  toSignUp.addEventListener("click", () => showPanel(signupPanel));

  /* ---------------------------------------------------
     3. Floating-label underline origin (click/tap point)
  --------------------------------------------------- */
  document.querySelectorAll(".field input").forEach((input) => {
    input.addEventListener("mousedown", (e) => {
      const rect = input.getBoundingClientRect();
      const pct = rect.width ? ((e.clientX - rect.left) / rect.width) * 100 : 50;
      input.closest(".field").style.setProperty("--origin-x", `${pct}%`);
    });
    input.addEventListener("focus", () => {
      input.closest(".field").classList.add("glow-active");
    });
    input.addEventListener("blur", () => {
      input.closest(".field").classList.remove("glow-active");
    });
  });

  /* ---------------------------------------------------
     4. Password visibility toggle
  --------------------------------------------------- */
  document.querySelectorAll(".eye-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      const icon = btn.querySelector("i");
      const showing = target.type === "text";
      target.type = showing ? "password" : "text";
      icon.classList.toggle("fa-eye", showing);
      icon.classList.toggle("fa-eye-slash", !showing);
      btn.setAttribute("aria-label", showing ? "Show password" : "Hide password");
    });
  });

  /* ---------------------------------------------------
     5. Validation helpers
  --------------------------------------------------- */
  function setFieldError(inputId, message) {
    const input = document.getElementById(inputId);
    const field = input.closest(".field");
    const errorEl = document.getElementById(inputId + "Error");

    if (message) {
      field.classList.add("has-error");
      errorEl.textContent = message;
      errorEl.classList.add("show");
      field.classList.remove("shake");
      void field.offsetWidth;
      field.classList.add("shake");
      return false;
    } else {
      field.classList.remove("has-error");
      errorEl.textContent = "";
      errorEl.classList.remove("show");
      return true;
    }
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = "form-message show " + type;
  }

  function clearMessage() {
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }

  /* ---------------------------------------------------
     6. localStorage user helpers
  --------------------------------------------------- */
  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem("users")) || [];
    } catch (e) {
      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  /* ---------------------------------------------------
     7. Sign Up submit
  --------------------------------------------------- */
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearMessage();

    const usernameInput = document.getElementById("suUsername");
    const emailInput = document.getElementById("suEmail");
    const passwordInput = document.getElementById("suPassword");
    const confirmInput = document.getElementById("suConfirm");
    const termsInput = document.getElementById("terms");
    const termsError = document.getElementById("termsError");

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    let valid = true;

    valid = setFieldError(
      "suUsername",
      username.length >= 3 ? "" : "Username must be at least 3 characters."
    ) && valid;

    valid = setFieldError(
      "suEmail",
      isValidEmail(email) ? "" : "Enter a valid email address."
    ) && valid;

    valid = setFieldError(
      "suPassword",
      password.length >= 6 ? "" : "Password must be at least 6 characters."
    ) && valid;

    valid = setFieldError(
      "suConfirm",
      confirm === password && confirm.length > 0 ? "" : "Passwords do not match."
    ) && valid;

    if (!termsInput.checked) {
      termsError.textContent = "You must accept the terms & conditions.";
      termsError.classList.add("show");
      valid = false;
    } else {
      termsError.textContent = "";
      termsError.classList.remove("show");
    }

    if (!valid) return;

    const users = getUsers();

    const usernameTaken = users.some(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );
    if (usernameTaken) {
      setFieldError("suUsername", "Username already exists.");
      return;
    }

    const emailTaken = users.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (emailTaken) {
      setFieldError("suEmail", "Email is already registered.");
      return;
    }

    users.push({ username, email, password });
    saveUsers(users);

    localStorage.setItem("currentUser", username);
    showMessage("Account created. Redirecting…", "success");

    setTimeout(() => {
      window.location.href = "home.html";
    }, 700);
  });

  /* ---------------------------------------------------
     8. Sign In submit
  --------------------------------------------------- */
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearMessage();

    const identifierInput = document.getElementById("siUsername");
    const passwordInput = document.getElementById("siPassword");

    const identifier = identifierInput.value.trim();
    const password = passwordInput.value;

    let valid = true;
    valid = setFieldError("siUsername", identifier ? "" : "This field is required.") && valid;
    valid = setFieldError("siPassword", password ? "" : "Password is required.") && valid;
    if (!valid) return;

    const users = getUsers();
    const match = users.find(
      (u) =>
        (u.username.toLowerCase() === identifier.toLowerCase() ||
          u.email.toLowerCase() === identifier.toLowerCase()) &&
        u.password === password
    );

    if (!match) {
      showMessage("Invalid username/email or password.", "error");
      return;
    }

    localStorage.setItem("currentUser", match.username);
    showMessage("Welcome back. Redirecting…", "success");

    setTimeout(() => {
      window.location.href = "home.html";
    }, 700);
  });

  /* ---------------------------------------------------
     9. Ambient terminal typewriter
  --------------------------------------------------- */
  const terminalEl = document.getElementById("terminalText");
  const phrases = [
    "compiling_your_future.exe",
    "loading placement roadmap...",
    "practice.dsa() // in progress",
    "mock_interview --start",
  ];

  if (terminalEl) {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
      const current = phrases[phraseIndex];
      if (!deleting) {
        charIndex++;
        terminalEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1400);
          return;
        }
      } else {
        charIndex--;
        terminalEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(typeLoop, deleting ? 28 : 55);
    }
    typeLoop();
  }
})();
