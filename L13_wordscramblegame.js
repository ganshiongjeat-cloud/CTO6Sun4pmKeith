let textinput;
let button;
let displaytext;

function setup(){
createCanvas(200,40)
    textinput = createInput("ask me ANYTHING");
    textinput.position(200, 100)
    textinput.size(200,40)
    button = createButton("click me");
    button.position(width/2, 30);
    button.mousePressed(updateText);
}