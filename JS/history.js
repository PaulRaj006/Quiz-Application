// section-box page open
const leaderboardBtn = document.querySelector(".leaderboard");
leaderboardBtn.addEventListener("click", () => {
    console.log("Leaderboard clicked");
    window.location.href = "leaderboard.html";
});

const indexBtn = document.querySelector(".index");
indexBtn.addEventListener("click", () => {
    console.log("Home clicked");
    window.location.href = "index.html";
});

const historyBtn = document.querySelector(".history");
historyBtn.addEventListener("click", () => {
    console.log("history clicked");
    window.location.href = "history.html";
});

let clear = document.querySelector('.clear');
function popupShow(){
    overlay.style.display = "flex";
}
let overlay=document.querySelector('.overlay');
function cancelUpdate(){
    overlay.style.display = "none";
}

let historyData = JSON.parse(localStorage.getItem("leaderboard")) || [];
console.log(historyData);
let historyBody = document.getElementById('historyBody');

// displayTable function :

function displayTable(data){
    if(data.length === 0){
        historyBody.innerHTML = `
            <tr>
                <td colspan="8" class="no-data">
                    No records found 😕
                </td>
            </tr>
        `;
    }
    else{

        historyBody.innerHTML = "";

        data.forEach((item,index)=>{
            let color = "red";

        if(item.score >= 80){
            color = "green";
        }else if(item.score >= 50){
            color = "orange";
        }
        // First letter || 1st 2nd letter
        let initial = item.name.trim().split(" ").map(word => word[0]).join("").substring(0,2).toUpperCase();
        // Random profile coloiir
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

        let profileColor = profileColors[index % profileColors.length];


            historyBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        <div class="player-info">
                            <div class="profile"
                                 style="background:${profileColor}">
                                ${initial}
                            </div>
                           <span style="font-weight: bold;font-size: small;">${item.name}</span>
                        </div>
                    </td>
                    <td>
                        <span class="category-badge ${item.category.replace(/\s+/g,'')}">
                            ${item.category}
                       </span>
                    </td>

                    <td>
                        <span class="difficulty-badge ${item.difficulty.toLowerCase()}">
                            ${item.difficulty}
                        </span>
                    </td>
                    <td style="color:${color};font-weight:bold">
                        ${item.score}%
                    </td>
                    <td>${item.score * 1000}</td>
                    <td>${item.date}</td>
                    <td>${item.time}</td>
                </tr>
            `;
        });
    }
    console.log(historyData);
}


// serch fields
let searchInput = document.getElementById("input");
searchInput.addEventListener("input", filterData);

// Initial category,difficulty :
let categorySelect = document.getElementById("selectCategories");
let difficultySelect = document.getElementById("selectDifficulties");


//add Event Listeners (Appo search type pannalum filter nadakkum, category change pannalum filter nadakkum)
categorySelect.addEventListener("change", filterData);
difficultySelect.addEventListener("change", filterData);

//Date Filter
let dateInput = document.getElementById("date");
dateInput.addEventListener("change", filterData);

function parseDateTime(item){
    let [day, month, year] = item.date.split("/");
    let [time, period] = item.time.split(" ");
    let [hour, minute] = time.split(":").map(Number);

    if(period.toLowerCase() === "pm" && hour !== 12) hour += 12;
    if(period.toLowerCase() === "am" && hour === 12) hour = 0;

    return new Date(year, month - 1, day, hour, minute);
}

//Select sort-list
let sortSelect = document.getElementById("selectSort");
sortSelect.addEventListener("change", filterData);


function filterData(){
    console.log("Filter Running");

    let search = searchInput.value.trim().toLowerCase();
    let category = categorySelect.value;
    let difficulty = difficultySelect.value;
    let date = dateInput.value;
    let sort = sortSelect.value;

    let filtered = historyData.filter(item => {

        let searchMatch =
            item.name.toLowerCase().includes(search);

        let categoryMatch =
            category === "" ||
            item.category === category;

        let difficultyMatch =
            difficulty === "" ||
            item.difficulty.toLowerCase() === difficulty;

        let dateMatch = true;
        if (date !== "") {
            let [day, month, year] = item.date.split("/");
            let formattedDate = `${year}-${month}-${day}`;
            dateMatch = formattedDate === date;
        }
        return searchMatch &&
               categoryMatch &&
               difficultyMatch &&
               dateMatch;
    });

    // Sorting
    if (sort === "latest") {
        filtered.sort((a, b) => parseDateTime(b) - parseDateTime(a));
    }
    else if (sort === "oldest") {
        filtered.sort((a, b) => parseDateTime(a) - parseDateTime(b));
    }
    else if (sort === "highest") {
        filtered.sort((a, b) => b.score - a.score);
    }
    else if (sort === "lowest") {
        filtered.sort((a, b) => a.score - b.score);
    }
    displayTable(filtered);
    updateCards(filtered);
    
}

let totalAttempts = document.getElementById("totalAttempts");
let totalPlayers = document.getElementById("totalPlayers");
let averageScore = document.getElementById("averageScore");
let highestScore = document.getElementById("highestScore");

function updateCards(data){
    totalAttempts.textContent = data.length;

    let uniquePlayers = new Set(data.map(item => item.name));
    totalPlayers.textContent = uniquePlayers.size;

    if(data.length === 0){
        averageScore.textContent = "0%";
        highestScore.textContent = "0%";
        return;
    }
    
    let total = data.reduce((sum,item)=>sum + item.score,0);
    averageScore.textContent =
        (total / data.length).toFixed(1) + "%";
    highestScore.textContent =
        Math.max(...data.map(item=>item.score)) + "%";
}
//Export CSV download
let exportBtn = document.getElementById("exportBtn");
exportBtn.addEventListener("click", exportCSV);
function exportCSV(){
    if(historyData.length === 0){
        alert("No history available!");
        return;
    }
    let csv = "Name,Category,Difficulty,Score,Points,Date,Time\n";
    historyData.forEach(item=>{
        csv += `"${item.name}","${item.category}","${item.difficulty}","${item.score}%","${item.score * 1000}","${item.date}","${item.time}"\n`;    });
    let blob = new Blob([csv],{type:"text/csv"});
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "Quiz_History.csv";

    a.click();
    URL.revokeObjectURL(url);
}
filterData();
