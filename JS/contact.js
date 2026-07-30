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


//Form submit prevent :
let overlay = document.querySelector('.overlay');
function cancelPopup(){
    overlay.style.display = "none"
}
function showPopup(){
    overlay.style.display = "flex"
}

const form = document.getElementById("contactForm");

let selectedRating = 0;
const stars = document.querySelectorAll("#starRating i");

const ratingError = document.getElementById("ratingError");

const sendBtn = document.getElementById("sendBtn");
const btnText = document.querySelector(".btn-text");
const loader = document.querySelector(".loader");

// form submit function
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // rating error
    if (selectedRating === 0) {
        ratingError.textContent = "Please select a rating.";
        return;
    }
    ratingError.textContent = "";

    // get value from input 
    const templateParams = {
        name: document.getElementById("cName").value,
        email: document.getElementById("cEmail").value,
        subject: document.getElementById("cSubject").value,
        message: document.getElementById("cMessage").value,
        rating: selectedRating
    };

    sendBtn.disabled = true;
    btnText.innerHTML = "Sending...";
    loader.style.display = "inline-block";

    emailjs.send(
        "service_8da8lor",
        "template_iho3ky9",
        templateParams
    )
    .then(function(){
        loader.style.display = "none";
        btnText.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        Message Sent
        `;
        sendBtn.disabled = false;

        showPopup();
        setTimeout(() => {
            btnText.innerHTML = `
                <i class="fa-solid fa-paper-plane"></i>
                Send Message
            `;
            sendBtn.disabled = false;
        }, 2000);
        form.reset();
            stars.forEach(star=>{
            star.classList.remove("fa-solid");
            star.classList.add("fa-regular");
        });
        selectedRating = 0;
    })

   .catch(function (error) {

      loader.style.display = "none";

      btnText.innerHTML = `
          <i class="fa-solid fa-triangle-exclamation"></i>
          Try Again
      `;

     sendBtn.disabled = false;

     console.error(error);

      alert("Failed to send message!");

      setTimeout(() => {
          btnText.innerHTML = `
              <i class="fa-solid fa-paper-plane"></i>
              Send Message
         `;
     }, 2000);

    });
});

//remove validate
stars.forEach(star => {
    star.addEventListener("click", function(){

        selectedRating = Number(this.dataset.v);

        ratingError.textContent = "";

        stars.forEach(s => {
            if(Number(s.dataset.v) <= selectedRating){
                s.classList.remove("fa-regular");
                s.classList.add("fa-solid");
            }else{
                s.classList.remove("fa-solid");
                s.classList.add("fa-regular");
            }
        });
    });
});

