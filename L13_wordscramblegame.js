let textinput;
let button;


function setup(){
createCanvas(200,40)
    textInput = createInput();
    textInput.position(width/2, 10)
    button = createButton("generate story");
    button.position(width/2, 210);
    button.mousePressed(updateText);
}