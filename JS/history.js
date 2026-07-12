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

// serch fields


let historyData = JSON.parse(localStorage.getItem("leaderboard")) || [];
console.log(historyData);
let historyBody = document.getElementById('historyBody');

if(historyData.length === 0){
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

    historyData.forEach((item,index)=>{
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
