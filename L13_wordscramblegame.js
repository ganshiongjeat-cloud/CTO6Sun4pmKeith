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
    button.position(250, 160);
    button.style(100,30);
    button.mousePressed(displaytext);

}

function draw(){
    background(220);
    text(displaytext, 300,230);

}
function displaytext(){
    displaytext = input
}