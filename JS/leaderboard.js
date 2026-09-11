let sortBtn = document.getElementById("sortBtn");
let userData = JSON.parse(localStorage.getItem("userData")) || {};
let data = [];
let tbody = document.getElementById("leaderboardBody");
let searchInput = document.getElementById('input');

function createLeaderboardData(){

    data = [];

    Object.entries(userData).forEach(([name, user]) => {

        let quizzes = user.quizHistory || [];

        if(quizzes.length === 0){
            return;
        }

        let totalScore = 0;

        quizzes.forEach(quiz => {
            totalScore += Number(quiz.score);
        });

        let quizCount = quizzes.length;

        let averageScore = totalScore / quizCount;

        data.push({
            name: name,
            quizzes: quizzes,
            quizCount: quizCount,
            totalScore: totalScore,
            averageScore: averageScore
        });
    });

    data.sort((a, b) => {

        if(b.totalScore !== a.totalScore){
            return b.totalScore - a.totalScore;
        }

        if(b.averageScore !== a.averageScore){
            return b.averageScore - a.averageScore;
        }

        return b.quizCount - a.quizCount;
    });
}

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




// ===============================
// Leaderboard Display & Filtering
// ===============================

let categorySelect = document.getElementById("selectCategories");
let difficultySelect = document.getElementById("selectDifficulties");

// Sort state
let isLowest = false;


// =====================================
// Create leaderboard data
// =====================================

function createLeaderboardData(){

    data = [];

    Object.entries(userData).forEach(([name, user]) => {

        let quizzes = user.quizHistory || [];

        if(quizzes.length === 0){
            return;
        }

        let totalScore = 0;

        quizzes.forEach(quiz => {
            totalScore += Number(quiz.score);
        });

        let quizCount = quizzes.length;

        let averageScore = totalScore / quizCount;

        data.push({
            name: name,
            quizzes: quizzes,
            quizCount: quizCount,
            totalScore: totalScore,
            averageScore: averageScore
        });
    });

    sortData();
}


// =====================================
// Sort leaderboard
// =====================================

function sortData(){

    if(isLowest){

        data.sort((a,b) => {
            return a.totalScore - b.totalScore;
        });

    }else{

        data.sort((a,b) => {
            return b.totalScore - a.totalScore;
        });
    }
}


// =====================================
// Sort Button
// =====================================

function sortList(){

    isLowest = !isLowest;

    if(isLowest){

        sortBtn.innerHTML =
        `<i class="fa-solid fa-arrow-down-wide-short"></i>
         Sort: Lowest Score`;

    }else{

        sortBtn.innerHTML =
        `<i class="fa-solid fa-arrow-up-wide-short"></i>
         Sort: Highest Score`;
    }

    displayLeaderboard();
}


// =====================================
// Filter + Aggregate
// =====================================

function getFilteredLeaderboard(){

    let filteredData = [];

    Object.entries(userData).forEach(([name, user]) => {

        let quizzes = user.quizHistory || [];

        // Category filter
        if(categorySelect.value !== ""){
            quizzes = quizzes.filter(quiz =>
                quiz.category === categorySelect.value
            );
        }

        // Difficulty filter
        if(difficultySelect.value !== ""){
            quizzes = quizzes.filter(quiz =>
                quiz.difficulty === difficultySelect.value
            );
        }

        // If user has no matching quiz
        if(quizzes.length === 0){
            return;
        }

        // Calculate total score
        let totalScore = quizzes.reduce((total, quiz) => {
            return total + Number(quiz.score);
        }, 0);

        // Number of quizzes
        let quizCount = quizzes.length;

        // Average score
        let averageScore = totalScore / quizCount;

        filteredData.push({
            name: name,
            quizzes: quizzes,
            quizCount: quizCount,
            totalScore: totalScore,
            averageScore: averageScore
        });
    });


    // Ranking
    if(isLowest){

        filteredData.sort((a,b) =>
            a.totalScore - b.totalScore
        );

    }else{

        filteredData.sort((a,b) =>
            b.totalScore - a.totalScore
        );
    }

    return filteredData;
}


// =====================================
// Display Top 3
// =====================================

function displayTopPlayers(players){

    let first = players[0];
    let second = players[1];
    let third = players[2];


    // Top player text
    if(first){

        document.getElementById("top-player").textContent =
            `${first.name} (${first.averageScore.toFixed(1)}%)`;

    }else{

        document.getElementById("top-player").textContent =
            "No Player Yet";
    }


    // =========================
    // FIRST
    // =========================

    if(first){

        document.querySelector(".top1 .name").textContent =
            first.name;

        document.querySelector(".top1 .profileTop").textContent =
            first.name.charAt(0).toUpperCase();

        document.querySelector(".position1").textContent =
            "#1";

        document.querySelector(".top1 .category").textContent =
            `${first.quizCount} Quizzes`;

        document.querySelector(".top1 .score").textContent =
            `${first.averageScore.toFixed(1)}%`;

        document.querySelector(".top1 .points").textContent =
            `${first.totalScore.toFixed(0)} pts`;

    }else{

        resetTopPlayer(".top1", ".position1", "#1");
    }


    // =========================
    // SECOND
    // =========================

    if(second){

        document.querySelector(".top2 .name").textContent =
            second.name;

        document.querySelector(".top2 .profileTop").textContent =
            second.name.charAt(0).toUpperCase();

        document.querySelector(".position2").textContent =
            "#2";

        document.querySelector(".top2 .category").textContent =
            `${second.quizCount} Quizzes`;

        document.querySelector(".top2 .score").textContent =
            `${second.averageScore.toFixed(1)}%`;

        document.querySelector(".top2 .points").textContent =
            `${second.totalScore.toFixed(0)} pts`;

    }else{

        resetTopPlayer(".top2", ".position2", "#2");
    }


    // =========================
    // THIRD
    // =========================

    if(third){

        document.querySelector(".top3 .name").textContent =
            third.name;

        document.querySelector(".top3 .profileTop").textContent =
            third.name.charAt(0).toUpperCase();

        document.querySelector(".position3").textContent =
            "#3";

        document.querySelector(".top3 .category").textContent =
            `${third.quizCount} Quizzes`;

        document.querySelector(".top3 .score").textContent =
            `${third.averageScore.toFixed(1)}%`;

        document.querySelector(".top3 .points").textContent =
            `${third.totalScore.toFixed(0)} pts`;

    }else{

        resetTopPlayer(".top3", ".position3", "#3");
    }
}


// =====================================
// Reset empty Top Player
// =====================================

function resetTopPlayer(card, position, rank){

    document.querySelector(`${card} .name`).textContent =
        "No Player Yet";

    document.querySelector(`${card} .profileTop`).textContent =
        "--";

    document.querySelector(position).textContent =
        rank;

    document.querySelector(`${card} .category`).textContent =
        "No Quiz";

    document.querySelector(`${card} .score`).textContent =
        "0%";

    document.querySelector(`${card} .points`).textContent =
        "0 pts";
}


// =====================================
// Display Leaderboard
// =====================================

function displayLeaderboard(){

    let filteredData = getFilteredLeaderboard();

    // Number of players
    document.getElementById("no-players").textContent =
        filteredData.length;


    // Top 3
    displayTopPlayers(filteredData.slice(0,3));


    // Table
    displayTable(filteredData);
}


// =====================================
// Display Table
// =====================================

function displayTable(filteredData){

    tbody.innerHTML = "";


    // Search
    let searchValue =
        searchInput.value.trim().toLowerCase();

    let searchedData = filteredData.filter(item =>
        item.name.toLowerCase().includes(searchValue)
    );


    // No result
    if(searchedData.length === 0){

        tbody.innerHTML = `
            <tr>
                <td colspan="6"
                    style="text-align:center;padding:50px">
                    No player found 😕
                </td>
            </tr>
        `;

        return;
    }


    // Display each player
    searchedData.forEach((item,index) => {

        // Rank
        let rank = filteredData.indexOf(item) + 1;


        // Average color
        let color = "red";

        if(item.averageScore >= 80){

            color = "green";

        }else if(item.averageScore >= 50){

            color = "orange";
        }


        // Player initial
        let initial = item.name
            .trim()
            .split(" ")
            .map(word => word[0])
            .join("")
            .substring(0,2)
            .toUpperCase();


        // Profile colors
        const profileColors = [
            "#4F46E5",
            "#F59E0B",
            "#0d1613",
            "#EF4444",
            "#8B5CF6",
            "#06B6D4",
            "#EC4899",
            "#F97316"
        ];

        let profileColor =
            profileColors[index % profileColors.length];


        // Quiz details
        let quizDetails = item.quizzes.map(quiz => {

            return `
                <span class="quiz-detail">
                    ${quiz.category} · ${quiz.difficulty}
                </span>
            `;

        }).join("");


        // Table row
        tbody.innerHTML += `
            <tr>

                <td>#${rank}</td>

                <td>
                    <div class="player-info">

                        <div class="profile"
                             style="background:${profileColor}">
                            ${initial}
                        </div>

                        <span style="
                            font-weight:bold;
                            font-size:small;">
                            ${item.name}
                        </span>

                    </div>
                </td>


                <td>
                    <strong>
                        ${item.quizCount}
                    </strong>
                </td>


                <td>
                    <div class="quiz-details">
                        ${quizDetails}
                    </div>
                </td>


                <td style="
                    font-weight:bold;">
                    ${item.totalScore.toFixed(0)} pts
                </td>


                <td style="
                    color:${color};
                    font-weight:bold;">
                    ${item.averageScore.toFixed(1)}%
                </td>

            </tr>
        `;
    });
}


// =====================================
// Events
// =====================================

categorySelect.addEventListener("change", function(){

    displayLeaderboard();

});


difficultySelect.addEventListener("change", function(){

    displayLeaderboard();

});


searchInput.addEventListener("input", function(){

    displayLeaderboard();

});


// =====================================
// Initial Load
// =====================================

createLeaderboardData();

displayLeaderboard();