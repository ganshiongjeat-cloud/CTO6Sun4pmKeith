let word = ["nathan","keith","jaden"]

let currentword, scrambleword, rescramblebutton, submitbutton;
let

let textinput;
let button;
let displaytext = "enter text here"

function setup(){
createCanvas(200,40)
    textinput = createInput("ask me ANYTHING");
    textinput.position(200, 100);
    textinput.size(200,40);
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