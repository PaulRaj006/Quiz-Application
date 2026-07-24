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
    console.log("history clicked");
    window.location.href = "about.html";
});

const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click", () => {
    console.log("contact clicked");
    window.location.href = "contact.html";
});



// FAQ accordion
document.querySelectorAll(".faq-item").forEach(item => {

    item.addEventListener("click", () => {

        const alreadyOpen = item.classList.contains("open");

        document.querySelectorAll(".faq-item").forEach(faq => {
            faq.classList.remove("open");
        });

        if (!alreadyOpen) {
            item.classList.add("open");
        }

    });

});