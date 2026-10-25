let textinput;
let button;
let displaytext;

function setup(){
createCanvas(200,40)
    textinput = createInput("ask me ANYTHING");
    textinput.position(200, 100);
    textinput.size(200,40);
    textinput.style(100,30);
    button = createButton("click me");
    button.position(250, 160);
    button.mousePressed(updateText);
}