let words = ["nathan","keith","jaden"]

let currentword, scrambleword, rescramblebutton, submitbutton;
let score =0;
let streak =0;
let maxstreak =0;
let message = "";

let textinput;
let button;
let displaytext = "enter text here"

function setup(){
createCanvas(600,400)

currentword = random(words)

    textinput = createInput("ask me ANYTHING");
    textinput.position(245, 175);
    textinput.size(110,30);
    textinput.style(100,30);

    button = createButton("display");
    button.position(400, 160);
    button.style(100,30);
    button.mousePressed(displayText);

}

function draw(){
    background(220);
    text(displaytext, 300,230);

}
function displayText(){
    displaytext = input.value();
}