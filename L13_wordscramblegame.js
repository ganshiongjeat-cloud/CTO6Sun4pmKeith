let textinput;
let button;


function setup(){
createCanvas(200,40)
    textInput = createInput();
    textInput.position(width/2, 10)
    button = createButton("click me");
    button.position(width/2, 30);
    button.mousePressed(updateText);
}