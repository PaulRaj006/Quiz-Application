// ============================================
// DASHBOARD NAVIGATION
// ============================================

const leaderboardBtn = document.querySelector(".leaderboard");
leaderboardBtn.addEventListener("click", () => {
    window.location.href = "leaderboard.html";
});

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => {
    window.location.href = "home.html";
});

const historyBtn = document.querySelector(".history");
historyBtn.addEventListener("click", () => {
    window.location.href = "history.html";
});

const aboutBtn = document.querySelector(".about");
aboutBtn.addEventListener("click", () => {
    window.location.href = "about.html";
});

const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click", () => {
    window.location.href = "contact.html";
});

const categoriesBtn = document.querySelector(".categories");
categoriesBtn.addEventListener("click", () => {
    window.location.href = "categories.html";
});

const dashboardBtn = document.querySelector(".dashboard");
dashboardBtn.addEventListener("click", () => {
    window.location.href = "dashboard.html";
});


// ============================================
// USER DATA
// ============================================

const currentUser = localStorage.getItem("currentUser");

const allUserData =
    JSON.parse(localStorage.getItem("userData")) || {};

const user = allUserData[currentUser];

const myHistory = user?.quizHistory || [];


// ============================================
// CONSTANTS
// ============================================

const CATEGORIES = [
    "General Knowledge",
    "Data Structures",
    "Python",
    "HTML",
    "CSS",
    "JavaScript"
];

const DIFFICULTIES = ["easy", "medium", "hard"];

const catIcons = {
    "General Knowledge": "🌍",
    "Data Structures": "🌲",
    "Python": "🐍",
    "HTML": "💻",
    "CSS": "🎨",
    "JavaScript": "⚡"
};

let charts = {};


// ============================================
// HELPER FUNCTIONS
// ============================================

function parseDate(dateStr) {

    if (!dateStr) return null;

    const [day, month, year] = dateStr
        .split("/")
        .map(Number);

    return new Date(year, month - 1, day);
}


function getDateKey(date) {

    return `${date.getFullYear()}-${String(
        date.getMonth() + 1
    ).padStart(2, "0")}-${String(
        date.getDate()
    ).padStart(2, "0")}`;
}

function average(numbers) {

    if (!numbers.length) return 0;

    return Math.round(
        numbers.reduce((sum, value) => sum + value, 0)
        / numbers.length
    );
}


function getScore(history) {

    return Number(history.score) || 0;
}


function getDifficulty(history) {

    return String(history.difficulty || "")
        .toLowerCase();
}


function getDayName(date) {

    return date.toLocaleDateString("en-GB", {
        weekday: "short"
    });
}


// ============================================
// WELCOME CARD
// ============================================

function renderWelcome() {

    const avatar =
        document.getElementById("avatarInitial");

    const name =
        document.getElementById("welcomeName");

    const sub =
        document.getElementById("welcomeSub");

    const rank =
        document.getElementById("wRank");

    const best =
        document.getElementById("wBest");

    const streak =
        document.getElementById("wStreak");


    if (!currentUser) {

        avatar.textContent = "?";

        name.textContent = "Welcome!";

        sub.textContent =
            "Please login to track your placement preparation.";

        rank.textContent = "--";
        best.textContent = "--";
        streak.textContent = "--";

        return;
    }


    avatar.textContent =
        currentUser.charAt(0).toUpperCase();

    name.textContent =
        `Welcome back, ${currentUser}!`;


    if (!myHistory.length) {

        sub.textContent =
            "Take your first quiz to start tracking your placement prep journey.";

        rank.textContent = "--";
        best.textContent = "--";
        streak.textContent = "0🔥";

        return;
    }


    const categoriesAttempted =
        new Set(
            myHistory.map(item => item.category)
        ).size;


    sub.textContent =
        `You've completed ${myHistory.length} quiz${myHistory.length > 1 ? "zes" : ""} across ${categoriesAttempted} categor${categoriesAttempted > 1 ? "ies" : "y"}.`;


    rank.textContent =
        getCurrentRank();


    const bestScore =
        Math.max(
            ...myHistory.map(item => getScore(item))
        );

    best.textContent =
        bestScore + "%";


    streak.textContent =
        getCurrentStreak() + "🔥";
}


// ============================================
// CURRENT RANK
// ============================================

function getCurrentRank() {

    if (!currentUser) return "--";


    const bestScores = [];


    Object.entries(allUserData).forEach(
        ([username, data]) => {

            const history =
                data.quizHistory || [];

            if (!history.length) return;


            const best =
                Math.max(
                    ...history.map(item =>
                        getScore(item)
                    )
                );


            bestScores.push({
                username,
                best
            });
        }
    );


    bestScores.sort(
        (a, b) => b.best - a.best
    );


    const index =
        bestScores.findIndex(
            item => item.username === currentUser
        );


    return index >= 0
        ? "#" + (index + 1)
        : "--";
}


// ============================================
// STREAK
// ============================================

function getCurrentStreak() {

    if (!myHistory.length) return 0;


    const uniqueDays = [
        ...new Set(
            myHistory.map(item =>
                getDateKey(parseDate(item.date))
            )
        )
    ];


    const dates = uniqueDays
        .map(key => {

            const [y, m, d] =
                key.split("-").map(Number);

            return new Date(y, m - 1, d);
        })
        .sort((a, b) => b - a);


    const today = new Date();

    today.setHours(0, 0, 0, 0);


    let cursor = new Date(today);

    let streak = 0;


    // If today has no quiz,
    // yesterday can start the streak.
    if (
        dates.length &&
        getDateKey(dates[0]) !== getDateKey(today)
    ) {

        const yesterday = new Date(today);

        yesterday.setDate(
            yesterday.getDate() - 1
        );

        if (
            getDateKey(dates[0]) ===
            getDateKey(yesterday)
        ) {
            cursor = yesterday;
        } else {
            return 0;
        }
    }


    for (const date of dates) {

        if (
            getDateKey(date) ===
            getDateKey(cursor)
        ) {

            streak++;

            cursor.setDate(
                cursor.getDate() - 1
            );

        } else if (date < cursor) {

            break;
        }
    }


    return streak;
}


// ============================================
// STAT CARDS
// ============================================

function renderStats() {

    const statGrid =
        document.getElementById("statGrid");


    const quizzes =
        myHistory.length;


    const correct =
        myHistory.reduce(
            (sum, item) =>
                sum + Number(item.correct || 0),
            0
        );


    const wrong =
        myHistory.reduce(
            (sum, item) =>
                sum + Number(item.wrong || 0),
            0
        );


    const highest =
        quizzes
            ? Math.max(
                ...myHistory.map(item =>
                    getScore(item)
                )
            )
            : 0;


    const avg =
        average(
            myHistory.map(item =>
                getScore(item)
            )
        );


    const stats = [

        {
            icon: "fa-solid fa-list-check",
            value: quizzes,
            label: "Quizzes Attempted"
        },

        {
            icon: "fa-solid fa-circle-check",
            value: correct,
            label: "Correct Answers"
        },

        {
            icon: "fa-solid fa-circle-xmark",
            value: wrong,
            label: "Wrong Answers"
        },

        {
            icon: "fa-solid fa-star",
            value: highest + "%",
            label: "Highest Score"
        },

        {
            icon: "fa-solid fa-chart-line",
            value: avg + "%",
            label: "Average Score"
        },

        {
            icon: "fa-solid fa-medal",
            value: getCurrentRank(),
            label: "Current Rank"
        }
    ];


    statGrid.innerHTML =
        stats.map((stat, index) => `

            <div class="stat-card"
                 style="animation-delay:${index * 0.07}s">

                <i class="${stat.icon}"></i>

                <h2>${stat.value}</h2>

                <p>${stat.label}</p>

            </div>

        `).join("");
}


// ============================================
// CHART DESTROY
// ============================================

function destroyChart(name) {

    if (charts[name]) {

        charts[name].destroy();

        charts[name] = null;
    }
}


// ============================================
// CATEGORY PERFORMANCE
// ============================================

function renderCategoryChart() {

    destroyChart("category");


    const labels = [];
    const scores = [];
    const attempts = [];


    CATEGORIES.forEach(category => {

        const data =
            myHistory.filter(
                item => item.category === category
            );


        if (!data.length) return;


        labels.push(category);

        scores.push(
            average(
                data.map(item =>
                    getScore(item)
                )
            )
        );

        attempts.push(data.length);
    });


    charts.category =
        new Chart(
            document.getElementById("categoryPie"),
            {
                type: "bar",

                data: {

                    labels:
                        labels.length
                            ? labels
                            : ["No data"],

                    datasets: [

                        {
                            label: "Average Score %",

                            data:
                                scores.length
                                    ? scores
                                    : [0],

                            borderRadius: 8
                        }
                    ]
                },

                options: {

                    maintainAspectRatio: false,

                    scales: {

                        y: {
                            beginAtZero: true,
                            max: 100
                        }

                    },

                    plugins: {

                        legend: {
                            display: false
                        },

                        tooltip: {

                            callbacks: {

                                afterLabel: function(context) {

                                    const index =
                                        context.dataIndex;

                                    return `Attempts: ${attempts[index] || 0}`;
                                }
                            }
                        }
                    }
                }
            }
        );
}


// ============================================
// WEEKLY PROGRESS
// ============================================

function renderWeeklyChart() {

    destroyChart("weekly");


    const labels = [];
    const dailyScores = [];
    const dailyAttempts = [];


    for (let i = 6; i >= 0; i--) {

        const date = new Date();

        date.setDate(
            date.getDate() - i
        );

        date.setHours(0, 0, 0, 0);


        const key =
            getDateKey(date);


        const dayData =
            myHistory.filter(
                item =>
                    getDateKey(
                        parseDate(item.date)
                    ) === key
            );


        labels.push(
            getDayName(date)
        );


        dailyAttempts.push(
            dayData.length
        );


        dailyScores.push(
            dayData.length
                ? average(
                    dayData.map(item =>
                        getScore(item)
                    )
                )
                : null
        );
    }


    charts.weekly =
        new Chart(
            document.getElementById("weeklyLine"),
            {

                type: "line",

                data: {

                    labels,

                    datasets: [

                        {
                            label:
                                "Daily Average Score",

                            data:
                                dailyScores,

                            tension: 0.35,

                            spanGaps: false,

                            fill: true
                        }
                    ]
                },

                options: {

                    maintainAspectRatio: false,

                    scales: {

                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    },

                    plugins: {

                        legend: {
                            display: false
                        },

                        tooltip: {

                            callbacks: {

                                afterLabel:
                                    function(context) {

                                        return `Quizzes: ${dailyAttempts[context.dataIndex]}`;
                                    }
                            }
                        }
                    }
                }
            }
        );
}


// ============================================
// DIFFICULTY ANALYSIS
// ============================================

function renderDifficultyChart() {

    destroyChart("difficulty");


    const scores = [];
    const attempts = [];


    DIFFICULTIES.forEach(
        difficulty => {

            const data =
                myHistory.filter(
                    item =>
                        getDifficulty(item) ===
                        difficulty
                );


            attempts.push(data.length);


            scores.push(
                data.length
                    ? average(
                        data.map(item =>
                            getScore(item)
                        )
                    )
                    : 0
            );
        }
    );


    charts.difficulty =
        new Chart(
            document.getElementById("diffBar"),
            {

                type: "bar",

                data: {

                    labels: [
                        "Easy",
                        "Medium",
                        "Hard"
                    ],

                    datasets: [

                        {
                            label:
                                "Average Score %",

                            data: scores,

                            borderRadius: 8
                        }
                    ]
                },

                options: {

                    maintainAspectRatio: false,

                    scales: {

                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    },

                    plugins: {

                        legend: {
                            display: false
                        },

                        tooltip: {

                            callbacks: {

                                afterLabel:
                                    function(context) {

                                        return `Attempts: ${attempts[context.dataIndex]}`;
                                    }
                            }
                        }
                    }
                }
            }
        );
}


// ============================================
// SCORE DISTRIBUTION
// ============================================

function renderScoreDistribution() {

    destroyChart("score");


    const buckets = [
        0,
        0,
        0,
        0
    ];


    myHistory.forEach(item => {

        const score =
            getScore(item);


        if (score <= 40) {

            buckets[0]++;

        } else if (score <= 60) {

            buckets[1]++;

        } else if (score <= 80) {

            buckets[2]++;

        } else {

            buckets[3]++;
        }
    });


    charts.score =
        new Chart(
            document.getElementById("scoreDoughnut"),
            {

                type: "doughnut",

                data: {

                    labels: [
                        "0 - 40%",
                        "41 - 60%",
                        "61 - 80%",
                        "81 - 100%"
                    ],

                    datasets: [

                        {
                            data:
                                myHistory.length
                                    ? buckets
                                    : [1, 0, 0, 0],

                            borderWidth: 2
                        }
                    ]
                },

                options: {

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {
                            position: "bottom"
                        }
                    }
                }
            }
        );
}


// ============================================
// RENDER ALL CHARTS
// ============================================

function renderCharts() {

    renderCategoryChart();

    renderWeeklyChart();

    renderDifficultyChart();

    renderScoreDistribution();
}


// ============================================
// CATEGORY + DIFFICULTY PROGRESS
// ============================================

function renderProgress() {

    const list =
        document.getElementById("progressList");


    list.innerHTML = "";


    CATEGORIES.forEach(category => {

        const categoryData =
            myHistory.filter(
                item =>
                    item.category === category
            );


        if (!categoryData.length) {

            return;
        }


        const categoryTitle =
            document.createElement("div");

        categoryTitle.className =
            "category-progress-title";

        categoryTitle.innerHTML =
            `<strong>${catIcons[category]} ${category}</strong>`;


        list.appendChild(categoryTitle);


        DIFFICULTIES.forEach(
            difficulty => {

                const data =
                    categoryData.filter(
                        item =>
                            getDifficulty(item) ===
                            difficulty
                    );


                const best =
                    data.length
                        ? Math.max(
                            ...data.map(item =>
                                getScore(item)
                            )
                        )
                        : 0;


                const avg =
                    data.length
                        ? average(
                            data.map(item =>
                                getScore(item)
                            )
                        )
                        : 0;


                const item =
                    document.createElement("div");

                item.className =
                    "progress-item";


                item.innerHTML = `

                    <div class="progress-label">

                        <span>
                            ${difficulty.toUpperCase()}
                            (${data.length} attempt${data.length !== 1 ? "s" : ""})
                        </span>

                        <span>
                            ${avg}% avg · ${best}% best
                        </span>

                    </div>

                    <div class="progress-track">

                        <div
                            class="progress-fill"
                            data-w="${avg}">
                        </div>

                    </div>
                `;


                list.appendChild(item);
            }
        );
    });


    if (!list.children.length) {

        list.innerHTML =
            `<p class="empty-note">
                Complete a quiz to see your category progress 👀
            </p>`;

        return;
    }


    requestAnimationFrame(() => {

        document
            .querySelectorAll(
                "#progressList .progress-fill"
            )
            .forEach(bar => {

                setTimeout(() => {

                    bar.style.width =
                        bar.dataset.w + "%";

                }, 100);
            });
    });
}


// ============================================
// ACHIEVEMENTS
// ============================================

function renderAchievements() {

    const grid =
        document.getElementById("achieveGrid");


    const total =
        myHistory.length;


    const best =
        total
            ? Math.max(
                ...myHistory.map(item =>
                    getScore(item)
                )
            )
            : 0;


    const avg =
        average(
            myHistory.map(item =>
                getScore(item)
            )
        );


    const categories =
        new Set(
            myHistory.map(
                item => item.category
            )
        ).size;


    const hardQuizzes =
        myHistory.filter(
            item =>
                getDifficulty(item) === "hard"
        ).length;


    const passed =
        myHistory.filter(
            item =>
                getScore(item) >= 60
        ).length;


    const streak =
        getCurrentStreak();


    const badges = [

        {
            icon: "🚀",
            label: "First Quiz",
            unlocked: total >= 1
        },

        {
            icon: "💯",
            label: "Perfect Score",
            unlocked: best === 100
        },

        {
            icon: "🔥",
            label: "5 Day Streak",
            unlocked: streak >= 5
        },

        {
            icon: "📚",
            label: "3 Categories",
            unlocked: categories >= 3
        },

        {
            icon: "🎯",
            label: "5 Quizzes",
            unlocked: total >= 5
        },

        {
            icon: "💪",
            label: "Hard Challenger",
            unlocked: hardQuizzes >= 3
        },

        {
            icon: "🏆",
            label: "10 Quizzes",
            unlocked: total >= 10
        },

        {
            icon: "⭐",
            label: "80% Average",
            unlocked: avg >= 80
        },

        {
            icon: "🎓",
            label: "Placement Ready",
            unlocked:
                total >= 10 &&
                avg >= 80 &&
                passed >= 8
        }
    ];


    grid.innerHTML =
        badges.map(
            badge => `

            <div class="badge-card
                ${badge.unlocked
                    ? "unlocked"
                    : "locked"}">

                <div class="b-icon">
                    ${badge.icon}
                </div>

                <p>${badge.label}</p>

            </div>
        `
        ).join("");
}


// ============================================
// RECENT ACTIVITY
// ============================================

function renderRecent() {

    const list =
        document.getElementById("recentList");


    if (!myHistory.length) {

        list.innerHTML =
            `<p class="empty-note">
                No attempts yet. Your recent quizzes will appear here 👀
            </p>`;

        return;
    }


    const recent =
        [...myHistory]
            .sort((a, b) => {

                const dateA =
                    parseDate(a.date);

                const dateB =
                    parseDate(b.date);

                return dateB - dateA;
            })
            .slice(0, 5);


    list.innerHTML =
        recent.map(item => {

            const score =
                getScore(item);


            return `

                <div class="recent-item">

                    <div class="recent-left">

                        <div class="recent-icon">
                            ${catIcons[item.category] || "📘"}
                        </div>

                        <div>

                            <div class="recent-name">
                                ${item.category}
                            </div>

                            <div class="recent-sub">

                                ${String(
                                    item.difficulty
                                ).toUpperCase()}
                                · ${item.date}
                                · ${item.time}

                                <br>

                                Correct:
                                ${item.correct}
                                · Wrong:
                                ${item.wrong}

                            </div>

                        </div>

                    </div>


                    <div class="recent-score">

                        ${score}%

                    </div>

                </div>
            `;

        }).join("");
}


// ============================================
// WEEKLY GOAL
// ============================================

function renderGoal() {

    const now =
        new Date();


    const day =
        (now.getDay() + 6) % 7;


    const startOfWeek =
        new Date(now);


    startOfWeek.setDate(
        now.getDate() - day
    );


    startOfWeek.setHours(
        0, 0, 0, 0
    );


    const endOfWeek =
        new Date(startOfWeek);


    endOfWeek.setDate(
        startOfWeek.getDate() + 7
    );


    const weeklyQuizzes =
        myHistory.filter(item => {

            const quizDate =
                parseDate(item.date);

            quizDate.setHours(
                0, 0, 0, 0
            );

            return (
                quizDate >= startOfWeek &&
                quizDate < endOfWeek
            );
        });


    const goal = 5;


    const completed =
        weeklyQuizzes.length;


    const percentage =
        Math.min(
            100,
            Math.round(
                (completed / goal) * 100
            )
        );


    document.getElementById(
        "goalCount"
    ).textContent =
        `${Math.min(completed, goal)} / ${goal} completed`;


    requestAnimationFrame(() => {

        setTimeout(() => {

            document.getElementById(
                "goalFill"
            ).style.width =
                percentage + "%";

        }, 150);
    });
}


// ============================================
// MOTIVATION
// ============================================

function renderQuote() {

    const quotes = [

        "Success is the sum of small efforts, repeated day in and day out.",

        "The expert in anything was once a beginner.",

        "Practice like you've never won, perform like you've never lost.",

        "Don't watch the clock; do what it does. Keep going.",

        "Every question you solve today makes tomorrow's interview easier.",

        "Consistency beats intensity — one quiz at a time.",

        "Your only limit is the one you set for yourself.",

        "Preparation is the bridge between dreams and placements."

    ];


    const quote =
        quotes[
            Math.floor(
                Math.random() * quotes.length
            )
        ];


    document.getElementById(
        "quoteBox"
    ).textContent =
        `“${quote}”`;
}


// ============================================
// INITIALIZE DASHBOARD
// ============================================

renderWelcome();
renderStats();
renderCharts();
renderProgress();
renderAchievements();
renderRecent();
renderGoal();
renderQuote();