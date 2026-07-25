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

// Star rating
let selectedRating = 0;
const stars = document.querySelectorAll("#starRating i");
stars.forEach(star=>{
    star.addEventListener("click", function(){
        selectedRating = Number(this.dataset.v);
        stars.forEach(s=>{
            if(Number(s.dataset.v) <= selectedRating){
                s.classList.remove("fa-regular");
                s.classList.add("fa-solid");
            } else {
                s.classList.remove("fa-solid");
                s.classList.add("fa-regular");
            }
        });
    });
});

let overlay = document.querySelector('.overlay');
function cancelPopup(){
    overlay.style.display = "none"
}
function showPopup(){
    overlay.style.display = "flex"
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    showPopup();

    form.reset();

    stars.forEach(star=>{
        star.classList.remove("fa-solid");
        star.classList.add("fa-regular");
    });

    selectedRating = 0;
});