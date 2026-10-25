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

    textinput = createInput("enter anything");
    textinput.position(120, 175);
    textinput.size(110,35);
    textinput.style('font-size',"16px");

    rescramblebutton = createButton("rescramble");
    rescramblebutton.position(120,220);
    rescramblebutton.style('font-size',"16px");
    button.mousePressed(rescambleWord);

    submitbutton = createButton("submit");
    submitbutton.position(375,250);
    submitbutton.size(100,35);
    submitbutton.style('font-size',"16px");
    button.mousePressed(checkAnswer)

}

function draw(){
    background(220);
    textinput("word scramble game")

}
function displayText(){
    displaytext = input.value();
}