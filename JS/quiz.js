let nextBtn = document.getElementById('nextBtn');
let ques = document.querySelector('.ques');
let ans = document.querySelectorAll('.let-ans');
let fill = document.querySelector('.fill');
let btn = document.querySelectorAll('.btn')

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

function loadQuestion(){
    timeDown();
    let quiz = gkQuestions[currentQuestion];

    ques.textContent = quiz.question;
    ans[0].textContent = quiz.options[0];
    ans[1].textContent = quiz.options[1];
    ans[2].textContent = quiz.options[2];
    ans[3].textContent = quiz.options[3];

    let progress = ((currentQuestion+1) / gkQuestions.length)*100;
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

    if(currentQuestion < gkQuestions.length-1){
        currentQuestion++;
        loadQuestion();
        // question number increament 
        count++;
        ques_no.textContent = "Question "+count;
        ques10.textContent = `Question ${count} of 10`;
    }
    else{
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
let score =0;

btn.forEach((item)=>{
    item.onclick = function(){
        let qiuzAnswer = gkQuestions[currentQuestion];
        let last = item.querySelector('.last');
        let selectedAnswer = item.querySelector('.let-ans');
        let selectedOption = item.querySelector('.let-op');
        
        if(selectedAnswer.textContent == qiuzAnswer.answer){
            item.classList.add("correct"); //create new "correct" class;
            last.innerHTML = `<i id="tick" class="fa-solid fa-check-circle"></i>`
            selectedOption.style.backgroundColor = "#4ff75a"
            selectedOption.style.color = "white"
            score++;
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

