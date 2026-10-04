let r = 220
let g = 220
let b = 220
let textInput;
let button;
let textInputA;
let textInputB;
let textInputC
function setup(){
    createCanvas(700,800)
    textInput = createInput();
    textInput.position(width/2, 100)
    button = createButton("generate story");
    button.position(width/2, 135);
    button.mousePressed(updateText);
}

function draw(){
    background(r,g,b);
    fill(220,0,0)
    textSize(18)
    textAlign(RIGHT,CENTER)
    text("input ur name here: ",width/2 - 15,95)
    

}

function updateText(){
    console.log("hello," + textInput.value())
}