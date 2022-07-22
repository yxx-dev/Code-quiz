//page control
let intro = document.querySelector(".intro");
let main = documet.querySelector(".main");
let submit = documet.querySelector(".submit");
let highScores = documet.querySelector(".highscores");

//initial load

document.addEventListener("load",showIntro);

function showIntro () {
    if (intro.dateset.state === "hide") {
        console.log("hide intro")
    }
}

let title = document.querySelector(".question");
let subtitle = document.querySelector(".subtitle");
//let btn