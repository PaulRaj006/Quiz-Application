let start = document.getElementById('stBtn');

// section-box page open
const leaderboardBtn = document.querySelector(".leaderboard");
leaderboardBtn.addEventListener("click", () => {
    console.log("Leaderboard clicked");
    window.location.href = "leaderboard.html";
});

const indexBtn = document.querySelector(".home");
indexBtn.addEventListener("click", () => {
    console.log("Home clicked");
    window.location.href = "home.html";
});
const historyBtn = document.querySelector(".history");
historyBtn.addEventListener("click", () => {
    console.log("history clicked");
    window.location.href = "history.html";
});
const aboutBtn = document.querySelector(".about");
aboutBtn.addEventListener("click", () => {
    console.log("history clicked");
    window.location.href = "about.html";
});
const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click", () => {
    console.log("contact clicked");
    window.location.href = "contact.html";
});
const categoriesBtn = document.querySelector(".categories");
categoriesBtn.addEventListener("click", () => {
    console.log("contact clicked");
    window.location.href = "categories.html";
});
const dashboardBtn = document.querySelector(".dashboard");
dashboardBtn.addEventListener("click", () => {
    console.log("dashboard clicked");
    window.location.href = "dashboard.html";
});

// =======================================
//   Personalized welcome (currentUser)
// =======================================
// Auth flow (index.js) stores the logged-in user in localStorage.currentUser.
// Home no longer asks for a name — it reads it straight from storage.
const currentUser = localStorage.getItem("currentUser") || "Student";
const welcomeUserEl = document.getElementById("welcomeUser");
if (welcomeUserEl) {
    welcomeUserEl.textContent = currentUser;
}

// Navbar profile chip (avatar initial + name)
const profileNameEl = document.getElementById("profileName");
const profileAvatarEl = document.getElementById("profileAvatar");
if (profileNameEl) {
    profileNameEl.textContent = currentUser;
}
if (profileAvatarEl) {
    profileAvatarEl.textContent = currentUser.trim().charAt(0).toUpperCase() || "S";
}
// =======================================
//   Profile Menu + Logout
// =======================================

const profileChip = document.getElementById("profileChip");
const profileMenu = document.getElementById("profileMenu");
const logoutBtn = document.getElementById("logoutBtn");

if (profileChip && profileMenu) {

    profileChip.addEventListener("click", () => {
        profileMenu.classList.toggle("show");
    });

}

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmed = window.confirm("Are you sure you want to logout?");

        if (!confirmed) return;

        localStorage.removeItem("currentUser");

        window.location.href = "index.html";
    });

}
// =======================================
//   Navbar: Reset Data
// =======================================
// =======================================
//   Navbar: Reset Data
// =======================================

const resetDataBtn = document.getElementById("resetDataBtn");

if (resetDataBtn) {

    resetDataBtn.addEventListener("click", () => {

        const confirmed = window.confirm(
            "Reset all your saved quiz progress and stats? This cannot be undone."
        );

        if (!confirmed) return;

        // Get all user data
        const userData =
            JSON.parse(localStorage.getItem("userData")) || {};

        // Reset only the currently logged-in user's data
        userData[currentUser] = {
            questionsAttempted: 0,
            quizzesCompleted: 0,
            bestScore: 0,
            currentStreak: 0,
            quizHistory: []
        };

        // Save updated user data
        localStorage.setItem(
            "userData",
            JSON.stringify(userData)
        );

        // Refresh Home
        window.location.reload();
    });
}

// =======================================
//   Quick Stats - Current User
// =======================================

const userData = JSON.parse(localStorage.getItem("userData")) || {};

const user = userData[currentUser] || {
    questionsAttempted: 0,
    quizzesCompleted: 0,
    bestScore: 0,
    currentStreak: 0
};

const statQuestionsEl = document.getElementById("statQuestions");
const statQuizzesEl = document.getElementById("statQuizzes");
const statBestScoreEl = document.getElementById("statBestScore");
const statStreakEl = document.getElementById("statStreak");

if (statQuestionsEl) {
    statQuestionsEl.textContent = user.questionsAttempted;
}

if (statQuizzesEl) {
    statQuizzesEl.textContent = user.quizzesCompleted;
}

if (statBestScoreEl) {
    statBestScoreEl.textContent = user.bestScore + "%";
}

if (statStreakEl) {
    statStreakEl.textContent = user.currentStreak + " Days";
}
// =======================================
//   Mobile sidebar toggle
// =======================================
const menuToggle = document.getElementById("menuToggle");
const sidebarNav = document.querySelector("body > nav");
const navOverlay = document.getElementById("navOverlay");

function closeSidebar() {
    sidebarNav.classList.remove("open");
    navOverlay.classList.remove("show");
}

if (menuToggle && sidebarNav && navOverlay) {
    menuToggle.addEventListener("click", () => {
        sidebarNav.classList.add("open");
        navOverlay.classList.add("show");
    });
    navOverlay.addEventListener("click", closeSidebar);
}


// Category
let category = "";
let boxes = document.querySelectorAll('.box');
boxes.forEach((item)=>{
    item.onclick = function(){
        boxes.forEach((box)=>{
            box.classList.remove("active-category");
        })
        item.classList.add("active-category");
        category = item.dataset.category;
        console.log(category); // for checking porpose 
    }
});
// Select category automatically when coming from Categories page
const presetCategory = localStorage.getItem("presetCategory");

if (presetCategory) {

    boxes.forEach((box) => {

        if (box.dataset.category === presetCategory) {

            boxes.forEach((item) => {
                item.classList.remove("active-category");
            });

            box.classList.add("active-category");

            category = presetCategory;

            console.log("Preset Category:", category);
        }

    });

    // Remove after selecting so normal Home visit is not affected
    localStorage.removeItem("presetCategory");
}

// Difficulty
let diffLevel ="";
let diffBtn = document.querySelectorAll('.btn');
diffBtn.forEach((item)=>{
    item.onclick = function(){
        diffBtn.forEach((btn)=>{
            btn.classList.remove("activeBtn");
        })
        item.classList.add("activeBtn");
        diffLevel = item.dataset.difflevel;
        console.log(diffLevel); // for checking porpose
    };
});

start.onclick = function(){

    localStorage.setItem("category", category);
    localStorage.setItem("diffLevel", diffLevel);

    // check category validation
    if(category == ""){
        alert("Please select a category");
        return;
    }

    // check difficulty validation
    if(diffLevel == ""){
        alert("Please select difficulty");
        return;
    }

    window.location.href = "qiuz.html";
}