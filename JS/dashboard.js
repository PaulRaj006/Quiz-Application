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
    console.log("about clicked");
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


// ===== Dashboard — built entirely on the existing "leaderboard" localStorage key =====
const history = JSON.parse(localStorage.getItem("leaderboard")) || [];
const userName = localStorage.getItem("userName") || null;

// This player's attempts (each quiz has 10 fixed questions -> correct = score/10)
const myHistory = userName ? history.filter(h => h.name === userName) : [];

const CATEGORIES = ["General Knowledge","Data Structures","Python","HTML","CSS","JavaScript"];
const catIcons = {
    "General Knowledge":"🌍","Data Structures":"🌲","Python":"🐍",
    "HTML":"💻","CSS":"🎨","JavaScript":"⚡"
};

// -------------------- Helpers --------------------
function parseDMY(dateStr){
    // format from quiz.js: en-GB -> dd/mm/yyyy
    const [d,m,y] = dateStr.split("/").map(Number);
    return new Date(y, m-1, d);
}
function dateKey(date){
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}
function average(arr){
    if(arr.length === 0) return 0;
    return Math.round(arr.reduce((a,b)=>a+b,0) / arr.length);
}

// -------------------- Welcome card --------------------
function renderWelcome(){
    const avatar = document.getElementById("avatarInitial");
    const name = document.getElementById("welcomeName");
    const sub = document.getElementById("welcomeSub");
    const wRank = document.getElementById("wRank");
    const wBest = document.getElementById("wBest");
    const wStreak = document.getElementById("wStreak");

    if(!userName || myHistory.length === 0){
        avatar.textContent = "?";
        name.textContent = "Welcome!";
        sub.textContent = "Take a quiz from the Home page to start tracking your placement prep journey.";
        wRank.textContent = "--";
        wBest.textContent = "--";
        wStreak.textContent = "--";
        return;
    }

    avatar.textContent = userName.charAt(0).toUpperCase();
    name.textContent = `Welcome back, ${userName}!`;
    sub.textContent = `You've attempted ${myHistory.length} quiz${myHistory.length>1?"es":""} across ${new Set(myHistory.map(h=>h.category)).size} categories.`;

    // rank among all players (best score per player)
    const bestByPlayer = {};
    history.forEach(h=>{
        const s = Number(h.score);
        if(!bestByPlayer[h.name] || s > bestByPlayer[h.name]) bestByPlayer[h.name] = s;
    });
    const ranked = Object.entries(bestByPlayer).sort((a,b)=>b[1]-a[1]);
    const myRank = ranked.findIndex(r=>r[0]===userName) + 1;

    wRank.textContent = "#"+myRank;
    wBest.textContent = Math.max(...myHistory.map(h=>Number(h.score))) + "%";
    wStreak.textContent = getStreak() + "🔥";
}

function getStreak(){
    if(myHistory.length === 0) return 0;
    const days = [...new Set(myHistory.map(h => dateKey(parseDMY(h.date))))]
        .map(k => { const [y,m,d]=k.split("-").map(Number); return new Date(y,m-1,d); })
        .sort((a,b)=>b-a);

    const today = new Date();
    today.setHours(0,0,0,0);

    let streak = 0;
    let cursor = new Date(today);

    for(let i=0;i<days.length;i++){
        const day = days[i];
        day.setHours(0,0,0,0);
        const diff = Math.round((cursor - day)/(1000*60*60*24));
        if(diff === 0){
            streak++;
            cursor.setDate(cursor.getDate()-1);
        } else if(diff === 1 && streak === 0){
            // yesterday counts as start of streak if today not attempted yet
            streak++;
            cursor = new Date(day);
            cursor.setDate(cursor.getDate()-1);
        } else {
            break;
        }
    }
    return streak;
}

// -------------------- Stat cards --------------------
function renderStats(){
    const statGrid = document.getElementById("statGrid");
    const totalAttempted = myHistory.length;
    const correctTotal = myHistory.reduce((sum,h)=> sum + Math.round(Number(h.score)/10), 0);
    const wrongTotal = totalAttempted*10 - correctTotal;
    const highest = totalAttempted ? Math.max(...myHistory.map(h=>Number(h.score))) : 0;
    const avgScore = average(myHistory.map(h=>Number(h.score)));

    const bestByPlayer = {};
    history.forEach(h=>{
        const s = Number(h.score);
        if(!bestByPlayer[h.name] || s > bestByPlayer[h.name]) bestByPlayer[h.name] = s;
    });
    const ranked = Object.entries(bestByPlayer).sort((a,b)=>b[1]-a[1]);
    const myRank = userName ? ranked.findIndex(r=>r[0]===userName) + 1 : 0;

    const stats = [
        { icon:"fa-solid fa-list-check", value: totalAttempted, label:"Quizzes Attempted" },
        { icon:"fa-solid fa-circle-check", value: correctTotal, label:"Correct Answers" },
        { icon:"fa-solid fa-circle-xmark", value: wrongTotal, label:"Wrong Answers" },
        { icon:"fa-solid fa-star", value: highest+"%", label:"Highest Score" },
        { icon:"fa-solid fa-chart-line", value: avgScore+"%", label:"Average Score" },
        { icon:"fa-solid fa-medal", value: myRank ? "#"+myRank : "--", label:"Current Rank" }
    ];

    statGrid.innerHTML = stats.map((s,i)=>`
        <div class="stat-card" style="animation-delay:${i*0.07}s">
            <i class="${s.icon}"></i>
            <h2>${s.value}</h2>
            <p>${s.label}</p>
        </div>
    `).join("");
}

// -------------------- Charts --------------------
function renderCharts(){
    const purple = "#6366F1", violet="#7C6CF7", amber="#F59E0B", green="#16A34A", red="#DC2626", blue="#0EA5E9";
    const palette = [purple, amber, green, red, violet, blue];

    // Category performance (avg score per category attempted)
    const catLabels = [...new Set(myHistory.map(h=>h.category))];
    const catData = catLabels.map(c => average(myHistory.filter(h=>h.category===c).map(h=>Number(h.score))));

    new Chart(document.getElementById("categoryPie"), {
        type:"pie",
        data:{
            labels: catLabels.length ? catLabels : ["No data yet"],
            datasets:[{ data: catData.length ? catData : [1], backgroundColor: palette }]
        },
        options:{ maintainAspectRatio:false, plugins:{ legend:{ position:"bottom", labels:{ boxWidth:10, font:{size:10} } } } }
    });

    // Weekly progress (quizzes per day, last 7 days)
    const dayLabels = [];
    const dayCounts = [];
    for(let i=6;i>=0;i--){
        const d = new Date();
        d.setDate(d.getDate()-i);
        d.setHours(0,0,0,0);
        dayLabels.push(d.toLocaleDateString("en-GB",{weekday:"short"}));
        const count = myHistory.filter(h => dateKey(parseDMY(h.date)) === dateKey(d)).length;
        dayCounts.push(count);
    }
    new Chart(document.getElementById("weeklyLine"), {
        type:"line",
        data:{ labels: dayLabels, datasets:[{
            label:"Quizzes",
            data: dayCounts,
            borderColor: purple,
            backgroundColor: "rgba(99,102,241,0.15)",
            fill:true, tension:0.35, pointBackgroundColor: purple
        }]},
        options:{ maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ y:{ beginAtZero:true, ticks:{stepSize:1} } } }
    });

    // Difficulty analysis (avg score per difficulty)
    const diffs = ["easy","medium","hard"];
    const diffData = diffs.map(d => average(myHistory.filter(h=>h.difficulty===d).map(h=>Number(h.score))));
    new Chart(document.getElementById("diffBar"), {
        type:"bar",
        data:{ labels:["Easy","Medium","Hard"], datasets:[{
            label:"Avg Score %",
            data: diffData,
            backgroundColor:[green, amber, red],
            borderRadius:8
        }]},
        options:{ maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ y:{ beginAtZero:true, max:100 } } }
    });

    // Score distribution
    const buckets = [0,0,0,0]; // 0-40,41-60,61-80,81-100
    myHistory.forEach(h=>{
        const s = Number(h.score);
        if(s<=40) buckets[0]++;
        else if(s<=60) buckets[1]++;
        else if(s<=80) buckets[2]++;
        else buckets[3]++;
    });
    new Chart(document.getElementById("scoreDoughnut"), {
        type:"doughnut",
        data:{
            labels:["0-40%","41-60%","61-80%","81-100%"],
            datasets:[{ data: buckets.some(b=>b>0)?buckets:[1,0,0,0], backgroundColor:[red,amber,blue,green] }]
        },
        options:{ maintainAspectRatio:false, plugins:{legend:{position:"bottom", labels:{boxWidth:10, font:{size:10}}}} }
    });
}

// -------------------- Category progress bars --------------------
function renderProgress(){
    const list = document.getElementById("progressList");
    list.innerHTML = CATEGORIES.map(cat=>{
        const attempts = myHistory.filter(h=>h.category===cat);
        const best = attempts.length ? Math.max(...attempts.map(h=>Number(h.score))) : 0;
        return `
            <div class="progress-item">
                <div class="progress-label">
                    <span>${catIcons[cat]} ${cat}</span>
                    <span>${best}%</span>
                </div>
                <div class="progress-track"><div class="progress-fill" data-w="${best}"></div></div>
            </div>
        `;
    }).join("");

    requestAnimationFrame(()=>{
        document.querySelectorAll("#progressList .progress-fill").forEach(bar=>{
            setTimeout(()=>{ bar.style.width = bar.dataset.w + "%"; }, 100);
        });
    });
}

// -------------------- Achievements --------------------
function renderAchievements(){
    const grid = document.getElementById("achieveGrid");
    const totalAttempted = myHistory.length;
    const hasPerfect = myHistory.some(h=>Number(h.score)===100);
    const categoriesTried = new Set(myHistory.map(h=>h.category)).size;
    const avgScore = average(myHistory.map(h=>Number(h.score)));

    const badges = [
        { icon:"🥇", label:"First Quiz", unlocked: totalAttempted>=1 },
        { icon:"💯", label:"100% Score", unlocked: hasPerfect },
        { icon:"🔥", label:"5 Quiz Streak", unlocked: totalAttempted>=5 },
        { icon:"⚡", label:"Fast Learner", unlocked: categoriesTried>=3 },
        { icon:"🎓", label:"Placement Ready", unlocked: totalAttempted>=5 && avgScore>=80 },
        { icon:"🏆", label:"Category Master", unlocked: categoriesTried>=6 }
    ];

    grid.innerHTML = badges.map(b=>`
        <div class="badge-card ${b.unlocked?"unlocked":"locked"}">
            <div class="b-icon">${b.icon}</div>
            <p>${b.label}</p>
        </div>
    `).join("");
}

// -------------------- Recent activity --------------------
function renderRecent(){
    const list = document.getElementById("recentList");
    if(myHistory.length === 0){
        list.innerHTML = `<p class="empty-note">No attempts yet. Your recent quizzes will show up here 👀</p>`;
        return;
    }
    const recent = [...myHistory].reverse().slice(0,5);
    list.innerHTML = recent.map(h=>`
        <div class="recent-item">
            <div class="recent-left">
                <div class="recent-icon">${catIcons[h.category] || "📘"}</div>
                <div>
                    <div class="recent-name">${h.category}</div>
                    <div class="recent-sub">${h.difficulty} · ${h.date} · ${h.time}</div>
                </div>
            </div>
            <div class="recent-score">${h.score}%</div>
        </div>
    `).join("");
}

// -------------------- Weekly goal --------------------
function renderGoal(){
    const now = new Date();
    const startOfWeek = new Date(now);
    const day = (now.getDay()+6)%7; // Monday=0
    startOfWeek.setDate(now.getDate()-day);
    startOfWeek.setHours(0,0,0,0);

    const thisWeekCount = myHistory.filter(h => parseDMY(h.date) >= startOfWeek).length;
    const goal = 5;
    const pct = Math.min(100, Math.round((thisWeekCount/goal)*100));

    document.getElementById("goalCount").textContent = `${Math.min(thisWeekCount,goal)} / ${goal} completed`;
    requestAnimationFrame(()=>{
        setTimeout(()=>{ document.getElementById("goalFill").style.width = pct+"%"; }, 150);
    });
}

// -------------------- Motivational quote --------------------
function renderQuote(){
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
    document.getElementById("quoteBox").textContent = "“" + quotes[Math.floor(Math.random()*quotes.length)] + "”";
}

// -------------------- Init --------------------
renderWelcome();
renderStats();
renderCharts();
renderProgress();
renderAchievements();
renderRecent();
renderGoal();
renderQuote();
