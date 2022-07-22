//page control
let intro = document.querySelector(".intro");
let main = document.querySelector(".main");
let submit = document.querySelector(".submit");
let highScores = document.querySelector(".highscores");
let header = document.querySelector("header");

//store Q&As
const quizQuestions = ['Commonly used data types DO Noe include:', 'Arrays in JavaScript can be used to store:', 'String values must be enclosed within _____ when being assigned to variables', 'The condition in an if / else statement is enclosed with ______', 'A very useful tool used during development and debugging for printing content to the debugger is:'];
const quizOption1 = ['1. string', '1. numbers and string', '1. commas', '1. quotes', '1. JavaScript'];
const quizOption2 = ['2. booleans', '2. other arrays', '2. curly brackets', '2. curly brackets', '2. terminal/bash'];
const quizOption3 = ['3. alerts', '3. booleans', '3. quotes', '3. parenthesis', '3. for loops'];
const quizOption4 = ['4. none of the above', '4. all of the above', '4. parenthesis', '4. square brackets', '4. console log'];
const quizAnswer = ['quizOption3', 'quizOption4', 'quizOption3', 'quizOption3', 'quizOption4'];

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

//load main
function showMain () {
    //console.log("showMain is working");
    header.style.display = "flex";
    intro.style.display = "none";
    main.style.display = "flex";
    submit.style.display = "none";
    highScores.style.display = "none";
};

//load submit
function showSubmit () {
    //console.log("showSubmit is working");
    header.style.display = "flex";
    intro.style.display = "none";
    main.style.display = "none";
    submit.style.display = "flex";
    highScores.style.display = "none";
};

//load highScores
function showHighScores () {
    //console.log("showHighscores is working");
    intro.style.display = "none";
    main.style.display = "none";
    submit.style.display = "none";
    highScores.style.display = "flex";
};

//start quiz
let startQuiz = document.querySelector(".btn1");
startQuiz.addEventListener("click", showMain);



let title = document.querySelector(".question");
let subtitle = document.querySelector(".subtitle");
//let btn