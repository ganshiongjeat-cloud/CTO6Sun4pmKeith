let textinput;
let button;
let displaytext;

function setup(){
createCanvas(200,40)
    textinput = createInput("ask me ANYTHING");
    textinput.position(width/2, 10)
    textinput
    button = createButton("click me");
    button.position(width/2, 30);
    button.mousePressed(updateText);
}