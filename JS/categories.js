// section-box page open
document.querySelectorAll(".section-box").forEach(box => {
    box.addEventListener("click", () => {
        const page = box.classList[1];
        window.location.href = `${page}.html`;
    });
});

// ===== Category metadata (extends existing quiz categories, question bank unchanged) =====
const categoryMeta = [
    {
        name: "General Knowledge",
        emoje: "🌍",
        desc: "Test your awareness of the world around you — geography, history, and current facts.",
        tags: ["popular"]
    },
    {
        name: "Data Structures",
        emoje: "🌲",
        desc: "Core CS fundamentals — arrays, trees, stacks, and queues asked in every placement round.",
        tags: ["recommended"]
    },
    {
        name: "Python",
        emoje: "🐍",
        desc: "Beginner to intermediate Python concepts commonly tested in coding interviews.",
        tags: ["popular", "recommended"]
    },
    {
        name: "HTML",
        emoje: "💻",
        desc: "Markup fundamentals, semantic tags, and structure every frontend dev must know.",
        tags: []
    },
    {
        name: "CSS",
        emoje: "🎨",
        desc: "Styling, layout systems, and responsive design essentials for the web.",
        tags: []
    },
    {
        name: "JavaScript",
        emoje: "⚡",
        desc: "Logic, DOM, and language fundamentals that power every frontend interview.",
        tags: ["popular"]
    }
];
const quizData = {
    "General Knowledge": gkQuestions,
    "Data Structures": dataStructureQuestions,
    "Python": pythonQuestions,
    "HTML": htmlQuestions,
    "CSS": cssQuestions,
    "JavaScript": javascriptQuestions
};
const AVG_SECS_PER_Q = 30;     // matches the 30s timer in qiuz.js

const catGrid = document.getElementById("catGrid");
const catSearch = document.getElementById("catSearch");
const chips = document.querySelectorAll(".chip");

let activeFilter = "all";

// ---- Read existing leaderboard history to compute per-category progress ----
function getHistory(){
    return JSON.parse(localStorage.getItem("leaderboard")) || [];
}

function getCategoryProgress(catName){
    const history = getHistory().filter(item => item.category === catName);
    if(history.length === 0) return 0;
    const best = Math.max(...history.map(item => Number(item.score)));
    return best; // score already stored as a 0-100 percentage
}

function renderCards(){
    const query = catSearch.value.trim().toLowerCase();

    const filtered = categoryMeta.filter(cat => {
        const matchesSearch = cat.name.toLowerCase().includes(query);
        const matchesFilter = activeFilter === "all" || cat.tags.includes(activeFilter);
        return matchesSearch && matchesFilter;
    });

    catGrid.innerHTML = "";

    if(filtered.length === 0){
        catGrid.innerHTML = `
        <div class="no-results">
            <div class="no-result-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <h2>No Category Found</h2>

            <p>
                We couldn't find any category matching
                <strong>"${query}"</strong>.
            </p>

            <button class="clear-search-btn">
                <i class="fa-solid fa-rotate-right"></i>
                Clear Search
            </button>
        </div>
        `;

        document.querySelector(".clear-search-btn").addEventListener("click", () => {
            catSearch.value = "";
            activeFilter = "all";

            chips.forEach(chip =>
                chip.classList.remove("active")
            );

            document.querySelector('[data-filter="all"]').classList.add("active");

            renderCards();
        });
        return;
    }

    filtered.forEach((cat, index) => {
        const easyCount = quizData[cat.name].easy.length;
        const mediumCount = quizData[cat.name].medium.length;
        const hardCount = quizData[cat.name].hard.length;

        const totalQuestions = easyCount + mediumCount + hardCount;
        const estMinutes = Math.round((totalQuestions * AVG_SECS_PER_Q) / 60);
        const progress = getCategoryProgress(cat.name);

        const badges = cat.tags.map(tag => {
            if(tag === "popular") return `<span class="tag popular">🔥 Popular</span>`;
            if(tag === "recommended") return `<span class="tag recommended">💡 Recommended</span>`;
            return "";
        }).join("");

        const card = document.createElement("div");
        card.className = "cat-card";
        card.style.animationDelay = `${index * 0.08}s`;

        card.innerHTML = `
            <div class="cat-card-top">
                <div class="cat-icon">${cat.emoje}</div>
                <div class="cat-badges">${badges}</div>
            </div>
            <h4>${cat.name}</h4>
            <p class="desc">${cat.desc}</p>
            <div class="cat-meta">
                <span><i class="fa-solid fa-list-check"></i>${totalQuestions} Qs</span>
                <span><i class="fa-solid fa-clock"></i>~${estMinutes} min</span>
            </div>
            <div class="diff-row">
                <div class="diff-badge easy">Easy · ${easyCount}</div>
                <div class="diff-badge medium">Medium · ${mediumCount}</div>
                <div class="diff-badge hard">Hard · ${hardCount}</div>
            </div>
            <div class="progress-row">
                <div class="progress-label">
                    ${
                        progress > 0
                        ? `<span>🏆 Best Score</span>
                           <span>${progress}%</span>`
                        : `<span>📝 Not Attempted Yet</span>
                           <span>--</span>`
                    }
                </div>
                <div class="progress-track">
                    <div class="progress-fill" style="width:${progress}%"></div>
                </div>
            </div>

            <button class="startCatBtn" data-category="${cat.name}">
                <i class="fa-solid fa-play"></i> Start Quiz
            </button>
        `;

        catGrid.appendChild(card);
    });

    // animate progress bars after render
    requestAnimationFrame(() => {
        document.querySelectorAll(".progress-fill").forEach(bar => {
            const w = bar.style.width;
            bar.style.width = "0%";
            setTimeout(() => { bar.style.width = w; }, 50);
        });
    });
}

// ---- Start quiz: preset the category on Home page (index.html handles the preset) ----
function goToCategory(categoryName){
    localStorage.setItem("presetCategory", categoryName);
    window.location.href = "index.html";
}

catGrid.addEventListener("click", function(e){
    const btn = e.target.closest(".startCatBtn");
    if(btn){
        goToCategory(btn.dataset.category);
        return;
    }
    const card = e.target.closest(".cat-card");
    if(card){
        const name = card.querySelector(".startCatBtn").dataset.category;
        goToCategory(name);
    }
});

document.querySelector(".startFeatured").addEventListener("click", function(){
    goToCategory(this.dataset.category);
});

catSearch.addEventListener("input", renderCards);

chips.forEach(chip => {
    chip.addEventListener("click", function(){
        chips.forEach(c => c.classList.remove("active"));
        this.classList.add("active");
        activeFilter = this.dataset.filter;
        renderCards();
    });
});

// ---- Header stat cards: derived entirely from existing categoryMeta / question counts ----
function renderHeaderStats() {
    const totalCategories = categoryMeta.length;

    const totalQuestions = categoryMeta.reduce((total, cat) => {
        return total +
            quizData[cat.name].easy.length +
            quizData[cat.name].medium.length +
            quizData[cat.name].hard.length;
    }, 0);

    const recommendedCount = categoryMeta.filter(cat =>
        cat.tags.includes("recommended")
    ).length;

    const popularCategory = categoryMeta.find(cat =>
        cat.tags.includes("popular")
    )?.name || "—";

    document.getElementById("statQuestions").textContent = totalQuestions;
    document.getElementById("statRecommended").textContent =
        `${recommendedCount} Categories`;
    document.getElementById("statPopular").textContent = popularCategory;
}

//Featured Banner -> random category
function renderFeaturedCategory() {

    const randomIndex = Math.floor(Math.random() * categoryMeta.length);

    const featured = categoryMeta[randomIndex];

    document.getElementById("featuredTitle").textContent =
        `${featured.emoje} ${featured.name} Challenge`;

    document.getElementById("featuredDesc").textContent =
        featured.desc;

    const btn = document.getElementById("featuredBtn");
    btn.dataset.category = featured.name;
}

renderHeaderStats();
renderFeaturedCategory();
renderCards();