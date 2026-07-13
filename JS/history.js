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
displayTable(historyData);

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

//Select sort-list
let sortSelect = document.getElementById("selectSort");
sortSelect.addEventListener("change", filterData);

function filterData(){

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

        let dateMatch =
            date === "" ||
            item.date === date;

        return searchMatch &&
               categoryMatch &&
               difficultyMatch &&
               dateMatch;
    });

    // Sorting
    if(sort === "latest"){
        filtered.sort((a,b)=> new Date(b.date) - new Date(a.date));
    }
    else if(sort === "oldest"){
        filtered.sort((a,b)=> new Date(a.date) - new Date(b.date));
    }
    else if(sort === "highest"){
        filtered.sort((a,b)=> b.score - a.score);
    }
    else if(sort === "lowest"){
        filtered.sort((a,b)=> a.score - b.score);
    }

    displayTable(filtered);
}