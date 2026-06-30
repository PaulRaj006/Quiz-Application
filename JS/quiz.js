let nextBtn = document.getElementById('nextBtn');
let ques = document.querySelector('.ques');
let ans = document.querySelectorAll('.let-ans');
let fill = document.querySelector('.fill');
let btn = document.querySelectorAll('.btn');

// name get from localcStorage :
let name = localStorage.getItem("userName");
// category fet from localcStorage :
let category = localStorage.getItem("category");
// diffLevel get from local Storage :
let diffLevel = localStorage.getItem("diffLevel")

//check user skip or fail in quiz
let attempted = false;    

let currentQuestion = 0;

// Timer set 30s
let time =30;
let timeDisplay = document.querySelector("#time");
let timer;
function timeDown(){
    clearInterval(timer);
    timeDisplay.textContent = time + "s";
    timer = setInterval(function(){
        time--;
        timeDisplay.textContent = time + "s";
        if(time==0){
            clearInterval(timer);
            nextQuestion();
        }
    },1000)
}

const allQuestion = {
    "General Knowledge":gkQuestions,
    "Data Structures":dataStructureQuestions,
    "Python":pythonQuestions,
    "HTML":htmlQuestions,
    "CSS":cssQuestions,
    "JavaScript":javascriptQuestions
}

let quizData = allQuestion[category][diffLevel];

function loadQuestion(){
    timeDown();
    let quiz = quizData[currentQuestion];

    ques.textContent = quiz.question;
    ans[0].textContent = quiz.options[0];
    ans[1].textContent = quiz.options[1];
    ans[2].textContent = quiz.options[2];
    ans[3].textContent = quiz.options[3];

    let progress = ((currentQuestion+1) / quizData.length)*100;
    fill.style.width = progress + "%";
}

// question number increament 
let count = 1;
let ques_no = document.querySelector('.ques-no');
ques_no.textContent = "Question "+count;

let ques10 = document.querySelector('.ques10');
ques10.textContent = `Question ${count} of 10`;

// Question Loading function :
loadQuestion();
nextBtn.onclick = function(){
    nextQuestion();
}
function nextQuestion(){  
    clearInterval(timer);   // stop the previeos timer
    time = 30;              // time begin from the 30 ;

    if(currentQuestion < quizData.length-1){
        currentQuestion++;
        loadQuestion();
        // question number increament 
        count++;
        ques_no.textContent = "Question "+count;
        ques10.textContent = `Question ${count} of 10`;
    }
    else{
        updateResult()
        let overlay = document.querySelector('.overlay-hidden');
        let popup = document.querySelector('.popup-box');
        overlay.style.display = "flex";
        popup.style.display = "flex";
    }
    btn.forEach((item)=>{

        item.classList.remove("correct"); // delete correct class
        item.classList.remove("wrong");   // delete wrong class
        item.querySelector('.let-op').style.backgroundColor = ""
        item.querySelector('.last').innerHTML = "";

        item.disabled = false;
        item.querySelector('.let-op').style.color = "black";
    })
}

// compar the option with answer :
let score = 0;

btn.forEach((item)=>{
    item.onclick = function(){
        attempted = true;
        clearInterval(timer);     //stop the current timer
        let qiuzAnswer = quizData[currentQuestion];
        let last = item.querySelector('.last');
        let selectedAnswer = item.querySelector('.let-ans');
        let selectedOption = item.querySelector('.let-op');
        
        if(selectedAnswer.textContent == qiuzAnswer.answer){
            item.classList.add("correct"); //create new "correct" class;
            last.innerHTML = `<i id="tick" class="fa-solid fa-check-circle"></i>`
            selectedOption.style.backgroundColor = "#4ff75a"
            selectedOption.style.color = "white"
            score++;
            console.log(score);  
        }
        else{
            item.classList.add("wrong");  //create new "wrong" class;
            last.innerHTML = `<i id="wrong" class="fa-solid fa-circle-xmark"></i>`
            selectedOption.style.backgroundColor = "#f74f4f"
            selectedOption.style.color = "white"

            btn.forEach((button)=>{
                let findAns = button.querySelector('.let-ans').textContent;
                if(findAns == qiuzAnswer.answer){
                    button.classList.add("correct"); // createe a "correct" class
                    button.querySelector('.last').innerHTML = `<i id="tick" class="fa-solid fa-check-circle"></i>`
                    button.querySelector('.let-op').style.backgroundColor = "#4ff75a";
                    button.querySelector('.let-op').style.color = "white";
                }
            });
        }
        //remainnning buton desable...]
        btn.forEach((button)=>{
            button.disabled = true;
        })
    }
});


        // score updatation =========== popup ============= 
        // work agala ennanu kandupudi...............
        
function updateResult(){
        let scorePer = document.getElementById('scorePersentage')
        let percentage = score ;
        let degree = percentage * 36;
        scorePer.innerHTML = `${score*10} %`
        console.log(degree);
        let correct = document.getElementById('Correct-no');
        let scoreout = document.getElementById('scor-outof');
        let wrong = document.getElementById('wrong-no');
        let circle = document.querySelector('.circle');

        let instruct = document.getElementById('instruction');

        let pass_fail = document.querySelector('.pass-fail');
        let icone = pass_fail.querySelector('#icone');
        let status = pass_fail.querySelector('#status');

        correct.textContent = score;
        scoreout.textContent = score;
        wrong.textContent = 10 - score;

        //category :
        let category_id = document.getElementById('category-id');
        let difficulty_id = document.getElementById('difficulty-id');
        category_id.textContent = `${category} `;
        difficulty_id.textContent = `(${diffLevel})`;

        circle.style.background = `conic-gradient(#4F6EF7 0deg ${degree}deg,#ddd ${degree}deg 360deg)`;

        // ✗ ✓
        if(score>=6){
            icone.textContent = "✓"
            icone.style.color = "green";
            status.textContent = "Passed"
            status.style.color = "green";
            pass_fail.style.border = "2px solid rgb(90, 242, 90)";
            pass_fail.style.backgroundColor = "#cbfac1"
            instruct.innerHTML = `🎉 Well Done, <span>${name}</span> !`;
            
        }
        else if (score == 5) {
            // Average
            icone.textContent = "!";
            icone.style.color = "#f59e0b";
            status.textContent = "Average";
            status.style.color = "#f59e0b";
            pass_fail.style.border = "2px solid #fcd34d";
            pass_fail.style.backgroundColor = "#fef3c7";
            instruct.innerHTML = `👍 Good Try, <span>${name}</span> !`;
        }
        else if(score == 0){
            icone.textContent = "✗"
            icone.style.color = "red";
            status.textContent = "Failed"
            status.style.color = "red";
            pass_fail.style.border = "2px solid rgb(242, 90, 90)";
            pass_fail.style.backgroundColor = "#facec1"
            if(attempted){
                instruct.innerHTML = `😔 Better Luck Next Time, <span>${name}</span> !`;
            }
}
        else{
            icone.textContent = "✗"
            icone.style.color = "red";
            status.textContent = "Failed"
            status.style.color = "red";
            pass_fail.style.border = "2px solid rgb(242, 90, 90)";
            pass_fail.style.backgroundColor = "#facec1"
            instruct.innerHTML = `💪 Keep Practising, <span>${name}</span> !`;
        }
}

let submit = document.getElementById('submit-score');
submit.onclick=function(){
    let today = new Date();
    
    let currentDate = today.toLocaleDateString("en-GB");
    let currentTime = today.toLocaleTimeString([],{
        hour : "2-digit",
        minute : "2-digit"
    });
    console.log(currentTime);
    console.log(currentDate);
    
    let history = JSON.parse(localStorage.getItem("leaderboard")) || [];
    
    history.push({
        name: name,
        category: category,
        difficulty: diffLevel,
        score: score*10,
        date: currentDate,
        time: currentTime
    });
    console.log(history);

    localStorage.setItem("leaderboard",JSON.stringify(history));

    window.location.href = "index.html";
}