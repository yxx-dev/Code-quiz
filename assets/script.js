//page control
let intro = document.querySelector(".intro");
let main = document.querySelector(".main");
let submit = document.querySelector(".submit");
let highScores = document.querySelector(".highscores");
let header = document.querySelector("header");

//store Q&As
const quizQuestions = ['Commonly used data types DO Not include:', 'Arrays in JavaScript can be used to store:', 'String values must be enclosed within _____ when being assigned to variables:', 'The condition in an if / else statement is enclosed with ______:', 'A very useful tool used during development and debugging for printing content to the debugger is:'];
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

//scores
let yourScores;
let mainI;
let initials;
let scoreBoard = document.querySelector(".records");
function resetScoresI () {
    yourScores = 100; //reset score
    //initials = ""; //reset initials
    mainI = 0; //reset iteration
}
let recordScore = [];
//let recordName = [];
let recordNumber = 0;

//global timer
let timeLeft;
let countdown;
let timeDisplay;
let timerInterval;
function timer() {
    timerInterval = setInterval(funCount, 1000);
    function funCount () {   
        if (countdown === timeLeft) {
            clearInterval(timerInterval);
            mainI=0;
            showSubmit();
        } else {
            countdown++;
            timeDisplay = timeLeft - countdown;
            elemTimer.textContent = `Time left: ${timeDisplay}s`;
            console.log(timeLeft, countdown); //timer test
        }
    }
};
function resetTimer() {
    timeLeft = 30;
    timeDisplay = timeLeft;
    countdown = 0;
};

//load intro
document.addEventListener("DOMContentLoaded",showIntro);
function showIntro (event) {
    //console.log("showIntro is working");
    event.preventDefault();
    event.stopPropagation();
    header.style.display = "none";
    intro.style.display = "flex";
    main.style.display = "none";
    submit.style.display = "none";
    highScores.style.display = "none";
    resetScoresI();
};

//view high score button
let viewHighScore = document.querySelector(".scores");
viewHighScore.addEventListener("click",showHighScores);


//start quiz
let startQuiz = document.querySelector(".btn1");
startQuiz.addEventListener("click", showMain);

//load main
function showMain () {
    //console.log("showMain is working");
    //event.preventDefault();
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

    resetScoresI(); //reset scores and I
    resetTimer(); //reset timer
    //timer control
    timer();
};

//check answers and next

main.addEventListener("click",proceed);
function proceed () {
    //event.preventDefault();
    let element = event.target;
    //let id = element.getAttribute("data-id");
    if (element.dataset.id === quizAnswer[mainI]) {
        console.log("correct", yourScores);
        elemRightWrong.textContent = "Correct!"; 
        timeDisplay = timeLeft;
        countdown = 0;
    } else if (!isNaN(element.dataset.id)) {
        yourScores -= 10;
        console.log("incorrect", yourScores);
        elemRightWrong.textContent = "Incorrect!"; 
        timeLeft = timeDisplay;
        countdown = 0;
    };
    if (!isNaN(element.dataset.id)) {
        mainI++;
        if (mainI === quizQuestions.length) {
        showSubmit();
        mainI=0;
        } else {
            elemQuestion.textContent = quizQuestions[mainI];
            elemBtn1.textContent = quizOption1[mainI];
            elemBtn2.textContent = quizOption2[mainI];
            elemBtn3.textContent = quizOption3[mainI];
            elemBtn4.textContent = quizOption4[mainI];
            //timer();
            };
    }
};


//load submit
function showSubmit () {
    //console.log("showSubmit is working");
    clearInterval(timerInterval); // stop timer if still time left
    resetTimer(); //reset timer
    header.style.display = "none";
    intro.style.display = "none";
    main.style.display = "none";
    submit.style.display = "flex";
    highScores.style.display = "none";
    document.querySelector(".finalScore").textContent = `Your final score is ${yourScores}`;
    document.getElementById("submit-rightwrong").textContent = elemRightWrong.textContent;
    document.getElementById("btn3-submit").addEventListener("click", writeRecord);
    function writeRecord () {
        console.log(recordNumber, recordScore);
        //console.log(`initials is ${initials.value}`);
        //event.preventDefault();
        //event.stopPropagation();
        initials = document.querySelector(".initials").value;
        recordScore.push(`${initials}, ${yourScores}`);
        document.querySelector(".initials").value = "";
        recordNumber += 1;
        showHighScores();
        console.log(recordNumber, recordScore);
    };
};

//load highScores
function showHighScores () {
    //console.log("showHighscores is working");
    //event.preventDefault();
    clearInterval(timerInterval); // stop timer if still time left
    resetTimer(); //reset timer
    header.style.display = "none";
    intro.style.display = "none";
    main.style.display = "none";
    submit.style.display = "none";
    highScores.style.display = "flex";
    scoreBoard.setAttribute("rows", recordNumber);
    scoreBoard.value = "";
    //console.log(recordNumber, recordName, recordScore);
    //scoreBoard.value += recordName[recordNumber - 1] + ", " + recordScore[recordNumber - 1] + "\n";
    for (i=0; i<recordNumber; i++) {
        console.log(recordNumber, recordScore);
        //scoreBoard.value = "test"; //recordName[i] + "," + recordScore[i]; 
        console.log(i);
        console.log(recordNumber, recordScore);
        scoreBoard.value += recordScore[i] + "\n";
        console.log(recordNumber, recordScore);
    };
    console.log(recordNumber, recordScore);
};

//go back from highscore
let goBack = document.querySelector("#back");
goBack.addEventListener("click",showIntro);
let clear = document.querySelector("#clear");
clear.addEventListener("click",clearScores);
function clearScores () {
    recordNumber = 0;
    recordScore = [];
    scoreBoard.value = "";
};


