let sortBtn = document.getElementById('sortBtn');
let data = JSON.parse(localStorage.getItem("leaderboard")) || [];
let tbody = document.getElementById("leaderboardBody");

let assending = true;
function sortList(){
    if(assending){
        data.sort((a,b)=>a.score-b.score);

        sortBtn.innerHTML=`<i class="fa-solid fa-arrow-down-wide-short"></i> Sort: Lowest Score`
        assending = false;
    }
    else{
        data.sort((a,b)=>b.score-a.score);

        sortBtn.innerHTML=`<i class="fa-solid fa-arrow-up-wide-short"></i> Sort: Highest Score`
        assending = true;
    }
    displayLeaderboard();
}

data.sort((a,b)=>b.score-a.score);
displayLeaderboard();

// displayLeaderboard function
function displayLeaderboard(){
    tbody.innerHTML = "";

    data.forEach((item,index)=>{
        let color;
        if(item.score >= 80){
            color="green";
        }
        else if(item.score >= 50){
            color="orange";
        }
        else{
            color="red";
        }

        tbody.innerHTML += `
        <tr>
            <td>#${index+1}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.difficulty}</td>
            <td style="color:${color};font-weight:bold">
                ${item.score}%
            </td>
            <td>${item.date}</td>
            <td>${item.time}</td>
        </tr>
        `;
    });
}