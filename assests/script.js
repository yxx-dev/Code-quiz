//page control
let intro = document.querySelector(".intro");
let main = document.querySelector(".main");
let submit = document.querySelector(".submit");
let highScores = document.querySelector(".highscores");
let header = document.querySelector("header");

//store Q&As
const quizQuestions = ['Commonly used data types DO Not include:', 'Arrays in JavaScript can be used to store:', 'String values must be enclosed within _____ when being assigned to variables', 'The condition in an if / else statement is enclosed with ______', 'A very useful tool used during development and debugging for printing content to the debugger is:'];
const quizOption1 = ['1. strings', '1. numbers and string', '1. commas', '1. quotes', '1. JavaScript'];
const quizOption2 = ['2. booleans', '2. other arrays', '2. curly brackets', '2. curly brackets', '2. terminal/bash'];
const quizOption3 = ['3. alerts', '3. booleans', '3. quotes', '3. parenthesis', '3. for loops'];
const quizOption4 = ['4. none of the above', '4. all of the above', '4. parenthesis', '4. square brackets', '4. console log'];
const quizAnswer = ['3','4','3','3','4'];

//grab the QA elements
let elemQuestion = document.querySelector(".question");
let elemBtn1 = document.getElementById('opt1');
let elemBtn2 = document.getElementById('opt2');
let elemBtn3 = document.getElementById('opt3');
let elemBtn4 = document.getElementById('opt4');
let elemAllOptBtn = document.querySelector(".btn2");
let elemRightWrong = document.querySelector(".rightwrong");
let elemTimer = document.querySelector(".timer")

//global timer
let timeLeft = 30;
let countdown = 0;
function timer() {
    let timeInterval = setInterval(funCount, 1000);
    function funCount () {   
        if (countdown === timeLeft) {
            clearInterval(timeInterval);
            showSubmit();
        } else {
            countdown++
            console.log(timeLeft, countdown); //timer test
        }
    }
}

//initial load
document.addEventListener("DOMContentLoaded",showIntro);
function showIntro () {
    //console.log("showIntro is working");
    header.style.display = "none";
    intro.style.display = "flex";
    main.style.display = "none";
    submit.style.display = "none";
    highScores.style.display = "none";
};

const viewHighScore = document.querySelector(".scores");
viewHighScore.addEventListener("click",showHighScores);

//load main
function showMain () {
    //console.log("showMain is working");
    header.style.display = "flex";
    intro.style.display = "none";
    main.style.display = "flex";
    submit.style.display = "none";
    highScores.style.display = "none";
    //load 1st question
    elemQuestion.textContent = quizQuestions[0];
    elemBtn1.textContent = quizOption1[0];
    elemBtn2.textContent = quizOption2[0];
    elemBtn3.textContent = quizOption3[0];
    elemBtn4.textContent = quizOption4[0];
    elemRightWrong.textContent = ""; 

    //timer control
    elemTimer.textContent = `Time left: ${timeLeft}s`;
    timer();
    console.log(timeLeft, countdown);

};

//check answers and next

let yourScores = 100;
let mainI = 0;
main.addEventListener("click",proceed);
function proceed (event) {
    let element = event.target;
    //let id = element.getAttribute("data-id");
    if (element.dataset.id === quizAnswer[mainI]) {
        console.log("correct", yourScores);
        elemRightWrong.textContent = "Correct!"; 
    } else if (!isNaN(element.dataset.id)) {
        console.log("wrong", yourScores);
        yourScores =- 10;
        elemRightWrong.textContent = "Wrong!"; 
    };
mainI++;
//ADD timer check
if (mainI === quizQuestions.length) {
    showSubmit();
    mainI=0;
} else {
    elemQuestion.textContent = quizQuestions[mainI];
    elemBtn1.textContent = quizOption1[mainI];
    elemBtn2.textContent = quizOption2[mainI];
    elemBtn3.textContent = quizOption3[mainI];
    elemBtn4.textContent = quizOption4[mainI];
};



};


//load submit
function showSubmit () {
    //console.log("showSubmit is working");
    timeLeft = 30; //ensure the same as initial setup
    header.style.display = "none";
    intro.style.display = "none";
    main.style.display = "none";
    submit.style.display = "flex";
    highScores.style.display = "none";
    document.getElementById("submit-rightwrong").textContent = elemRightWrong.textContent;
};



//load highScores
function showHighScores () {
    //console.log("showHighscores is working");
    header.style.display = "none";
    intro.style.display = "none";
    main.style.display = "none";
    submit.style.display = "none";
    highScores.style.display = "flex";
};

const goBack = document.querySelector("#back");
//TODO need to navigate to the previous page
goBack.addEventListener("click",showMain);
const clear = document.querySelector("#clear");
//clear.addEventListener("click",)

//start quiz
let startQuiz = document.querySelector(".btn1");
startQuiz.addEventListener("click", showMain);



let title = document.querySelector(".question");
let subtitle = document.querySelector(".subtitle");
//let btn