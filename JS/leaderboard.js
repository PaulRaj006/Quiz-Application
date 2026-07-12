let sortBtn = document.getElementById("sortBtn");
let data = JSON.parse(localStorage.getItem("leaderboard")) || [];
let tbody = document.getElementById("leaderboardBody");
let searchInput = document.getElementById('input');

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

let categorySelect = document.getElementById("selectCategories");
let difficultySelect = document.getElementById("selectDifficulties");

//no of player
document.getElementById("no-players").textContent = data.length;

//add event listener for category and difficulty:
categorySelect.addEventListener("change", displayTable);
difficultySelect.addEventListener("change", displayTable);

//add event listener for seacrch input:
searchInput.addEventListener("input", function () {
    displayTable();
});

let isLowest = false;

function sortList(){
    console.log("Button Clicked")
    if(isLowest){
        // Highest
        data.sort((a,b)=>Number(b.score)-Number(a.score));
        
        sortBtn.innerHTML =
        `<i class="fa-solid fa-arrow-up-wide-short"></i> Sort: Highest Score`;
        
    }else{
        // Lowest
        data.sort((a,b)=>Number(a.score)-Number(b.score));

        sortBtn.innerHTML =
        `<i class="fa-solid fa-arrow-down-wide-short"></i> Sort: Lowest Score`;
        
    }
    isLowest = !isLowest;
    displayTable();
}

// Initial Highest Sort
data.sort((a,b)=>Number(b.score)-Number(a.score));
data.forEach((item,index)=>{
    item.originalRank = index + 1;
});
const fixedTopThree = [...data.slice(0,3)];

displayTopPlayers(fixedTopThree);
displayTable();

function displayTopPlayers(players){
    // todays top player name with score..
    document.getElementById("top-player").innerHTML = `${fixedTopThree[0].name} (${fixedTopThree[0].score}%)`;

    let first = players[0];
    let second = players[1];
    let third = players[2];

    if(first){
        document.querySelector(".top1 .name").innerHTML = first.name;
        document.querySelector(".top1 .score").innerHTML = first.score+"%";
        document.querySelector(".top1 .category").innerHTML =
        `${first.category} · ${first.difficulty}`;

        document.querySelector(".top1 .profileTop").innerHTML =
        first.name.charAt(0).toUpperCase();
        document.querySelector('.position1').innerHTML = "#1";
        document.querySelector(".top1 .points").textContent = `${first.score * 100} pts`;
    }else{
        document.querySelector(".top1 .name").textContent = "No Player Yet";
        document.querySelector(".top1 .profileTop").textContent = "--";
        document.querySelector(".top1 .category").textContent = "-";
        document.querySelector(".top1 .score").textContent = "0%";
        document.querySelector('.top1 .points').innerHTML = "0pts"
    }

    if(second){
        document.querySelector(".top2 .name").innerHTML = second.name;
        document.querySelector(".top2 .score").innerHTML = second.score+"%";
        document.querySelector(".top2 .category").innerHTML =
        `${second.category} · ${second.difficulty}`;

        document.querySelector(".top2 .profileTop").innerHTML =
        second.name.charAt(0).toUpperCase();
        document.querySelector('.position2').innerHTML = "#2";
        document.querySelector(".top2 .points").textContent = `${second.score * 100} pts`;
    }else{
        document.querySelector(".top2 .name").textContent = "No Player Yet";
        document.querySelector(".top2 .profileTop").textContent = "--";
        document.querySelector(".top2 .category").textContent = "-";
        document.querySelector(".top2 .score").textContent = "0%";
        document.querySelector('.top2 .points').innerHTML = "0pts"
    }

    if(third){
        document.querySelector(".top3 .name").innerHTML = third.name;
        document.querySelector(".top3 .score").innerHTML = third.score+"%";
        document.querySelector(".top3 .category").innerHTML =
        `${third.category} · ${third.difficulty}`;

        document.querySelector(".top3 .profileTop").innerHTML =
        third.name.charAt(0).toUpperCase();
        document.querySelector('.position3').innerHTML = "#3";
        document.querySelector('.top3 .points').innerHTML = `${third.score * 100} pts`;
    }else{
        document.querySelector(".top3 .name").textContent = "No Player Yet";
        document.querySelector(".top3 .profileTop").textContent = "--";
        document.querySelector(".top3 .category").textContent = "-";
        document.querySelector(".top3 .score").textContent = "0%";
        document.querySelector('.top3 .points').innerHTML = "0pts"
    }
}

function displayTable(){
    console.table(data);

    tbody.innerHTML="";
    
    const filteredData = data.filter(item => {
        const categoryMatch =
            categorySelect.value === "" ||
            item.category === categorySelect.value;
        const difficultyMatch =
            difficultySelect.value === "" ||
            item.difficulty === difficultySelect.value;
    return categoryMatch && difficultyMatch;
    });

    let remaining;

    // Category or Difficulty filter active
    if(categorySelect.value !== "" || difficultySelect.value !== ""){
        displayTopPlayers(filteredData.slice(0,3));
    
        // Filter active-na ella filtered players-um table-la kaatu
        remaining = filteredData;
    }
    else{
        displayTopPlayers(fixedTopThree);
        // Highest / Lowest sort-ku remaining players
        if(isLowest){

            // Lowest Sort
            remaining = data.filter(player =>
                !fixedTopThree.some(top => top.name === player.name)
            );
        }else{

            // Highest Sort
            remaining = data.slice(3);
        }
    }

    const filteredPlayers = remaining.filter(item =>{
        const searchMatch =item.name.toLowerCase().includes(searchInput.value.toLowerCase());
        const categoryMatch = categorySelect.value === "" || item.category === categorySelect.value;
        const difficultyMatch = difficultySelect.value === "" || item.difficulty === difficultySelect.value;
        return searchMatch && categoryMatch && difficultyMatch;
    });

    //No result found
    if(filteredPlayers.length===0){
        tbody.innerHTML=`
        <tr>
            <td colspan="7" style="text-align:center;padding:50px">
                No player found 😕
            </td>
        </tr>`;
        return;
    }
    filteredPlayers.forEach((item,index)=>{

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

    tbody.innerHTML += `
    <tr>
        <td>#${item.originalRank}</td>
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
        <td>${item.date}</td>
        <td>${item.time}</td>
    </tr>`;
});
}
