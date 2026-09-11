// =======================================
//          NAVIGATION
// =======================================

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


// =======================================
//          CURRENT USER DATA
// =======================================

const currentUser = localStorage.getItem("currentUser");

const allUserData =
    JSON.parse(localStorage.getItem("userData")) || {};

const user = allUserData[currentUser];

let historyData = user?.quizHistory || [];

console.log("Current User:", currentUser);
console.log("History:", historyData);


// =======================================
//          HTML ELEMENTS
// =======================================

const historyBody = document.getElementById("historyBody");

const searchInput = document.getElementById("input");

const categorySelect =
    document.getElementById("selectCategories");

const difficultySelect =
    document.getElementById("selectDifficulties");

const dateInput =
    document.getElementById("date");

const sortSelect =
    document.getElementById("selectSort");


// Cards

const totalAttempts =
    document.getElementById("totalAttempts");

const passedQuizzes =
    document.getElementById("passedQuizzes");

const averageScore =
    document.getElementById("averageScore");

const highestScore =
    document.getElementById("highestScore");


// =======================================
//          DISPLAY TABLE
// =======================================

function displayTable(data) {

    if (data.length === 0) {

        historyBody.innerHTML = `
            <tr>
                <td colspan="8" class="no-data">
                    No records found 😕
                </td>
            </tr>
        `;

        return;
    }

    historyBody.innerHTML = "";

    data.forEach((item, index) => {

        let scoreColor = "red";

        if (item.score >= 80) {
            scoreColor = "green";
        }
        else if (item.score >= 50) {
            scoreColor = "orange";
        }


        // Profile Initial

        const initial =
            currentUser
                .trim()
                .split(" ")
                .map(word => word[0])
                .join("")
                .substring(0, 2)
                .toUpperCase();


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

        const profileColor =
            profileColors[index % profileColors.length];


        historyBody.innerHTML += `
            <tr>

                <td>${index + 1}</td>

                <td>
                    <div class="player-info">

                        <div class="profile"
                             style="background:${profileColor}">
                            ${initial}
                        </div>

                        <span style="font-weight:bold;font-size:small;">
                            ${currentUser}
                        </span>

                    </div>
                </td>


                <td>
                    <span class="category-badge ${item.category.replace(/\s+/g, '')}">
                        ${item.category}
                    </span>
                </td>


                <td>
                    <span class="difficulty-badge ${item.difficulty.toLowerCase()}">
                        ${item.difficulty}
                    </span>
                </td>


                <td style="color:${scoreColor};font-weight:bold;">
                    ${item.score}%
                </td>


                <td>
                    ${item.score * 1000}
                </td>


                <td>
                    ${item.date}
                </td>


                <td>
                    ${item.time}
                </td>

            </tr>
        `;
    });
}


// =======================================
//          DATE + TIME PARSER
// =======================================

function parseDateTime(item) {

    const [day, month, year] =
        item.date.split("/");

    const [time, period] =
        item.time.split(" ");

    let [hour, minute] =
        time.split(":").map(Number);


    if (period?.toLowerCase() === "pm" && hour !== 12) {
        hour += 12;
    }

    if (period?.toLowerCase() === "am" && hour === 12) {
        hour = 0;
    }


    return new Date(
        year,
        month - 1,
        day,
        hour,
        minute
    );
}


// =======================================
//          FILTER + SORT
// =======================================

function filterData() {

    const search =
        searchInput.value.trim().toLowerCase();

    const category =
        categorySelect.value;

    const difficulty =
        difficultySelect.value;

    const selectedDate =
        dateInput.value;

    const sort =
        sortSelect.value;


    let filtered = historyData.filter(item => {

        // Search

        const searchMatch =
            currentUser.toLowerCase().includes(search);


        // Category

        const categoryMatch =
            category === "" ||
            item.category === category;


        // Difficulty

        const difficultyMatch =
            difficulty === "" ||
            item.difficulty.toLowerCase() === difficulty;


        // Date

        let dateMatch = true;

        if (selectedDate !== "") {

            const [day, month, year] =
                item.date.split("/");

            const formattedDate =
                `${year}-${month}-${day}`;

            dateMatch =
                formattedDate === selectedDate;
        }


        return (
            searchMatch &&
            categoryMatch &&
            difficultyMatch &&
            dateMatch
        );
    });


    // ===================================
    // SORTING
    // ===================================

    if (sort === "latest") {

        filtered.sort(
            (a, b) =>
                parseDateTime(b) -
                parseDateTime(a)
        );
    }

    else if (sort === "oldest") {

        filtered.sort(
            (a, b) =>
                parseDateTime(a) -
                parseDateTime(b)
        );
    }

    else if (sort === "highest") {

        filtered.sort(
            (a, b) =>
                Number(b.score) -
                Number(a.score)
        );
    }

    else if (sort === "lowest") {

        filtered.sort(
            (a, b) =>
                Number(a.score) -
                Number(b.score)
        );
    }


    displayTable(filtered);

    updateCards(filtered);
}


// =======================================
//          UPDATE TOP CARDS
// =======================================

function updateCards(data) {

    // Total Attempts

    totalAttempts.textContent =
        data.length;


    // Passed Quizzes

    const passed =
        data.filter(item =>
            Number(item.score) >= 60
        ).length;

    passedQuizzes.textContent =
        passed;


    // No data

    if (data.length === 0) {

        averageScore.textContent = "0%";
        highestScore.textContent = "0%";

        return;
    }


    // Average Score

    const total =
        data.reduce(
            (sum, item) =>
                sum + Number(item.score),
            0
        );

    averageScore.textContent =
        (total / data.length).toFixed(1) + "%";


    // Highest Score

    highestScore.textContent =
        Math.max(
            ...data.map(item =>
                Number(item.score)
            )
        ) + "%";
}


// =======================================
//          CLEAR HISTORY POPUP
// =======================================

const overlay =
    document.querySelector(".overlay");


function popupShow() {

    overlay.style.display = "flex";
}


function cancelUpdate() {

    overlay.style.display = "none";
}


function deleteUpdate() {

    if (!user) {
        overlay.style.display = "none";
        return;
    }


    const confirmed =
        window.confirm(
            "Are you sure you want to delete your quiz history?"
        );


    if (!confirmed) {
        return;
    }


    // Clear current user's history

    user.quizHistory = [];

    user.questionsAttempted = 0;
    user.quizzesCompleted = 0;
    user.bestScore = 0;
    user.currentStreak = 0;


    // Save updated data

    allUserData[currentUser] = user;

    localStorage.setItem(
        "userData",
        JSON.stringify(allUserData)
    );


    // Update local data

    historyData = [];


    overlay.style.display = "none";


    // Refresh page

    filterData();
}


// =======================================
//          EXPORT CSV
// =======================================

const exportBtn =
    document.getElementById("exportBtn");


exportBtn.addEventListener(
    "click",
    exportCSV
);


function exportCSV() {

    if (historyData.length === 0) {

        alert("No history available!");

        return;
    }


    let csv =
        "Name,Category,Difficulty,Score,Points,Date,Time\n";


    historyData.forEach(item => {

        csv +=
            `"${currentUser}",` +
            `"${item.category}",` +
            `"${item.difficulty}",` +
            `"${item.score}%",` +
            `"${item.score * 1000}",` +
            `"${item.date}",` +
            `"${item.time}"\n`;
    });


    const blob =
        new Blob(
            [csv],
            { type: "text/csv" }
        );


    const url =
        URL.createObjectURL(blob);


    const a =
        document.createElement("a");

    a.href = url;

    a.download =
        "Quiz_History.csv";

    a.click();


    URL.revokeObjectURL(url);
}


// =======================================
//          EVENT LISTENERS
// =======================================

searchInput.addEventListener(
    "input",
    filterData
);

categorySelect.addEventListener(
    "change",
    filterData
);

difficultySelect.addEventListener(
    "change",
    filterData
);

dateInput.addEventListener(
    "change",
    filterData
);

sortSelect.addEventListener(
    "change",
    filterData
);


// =======================================
//          INITIAL LOAD
// =======================================

filterData();