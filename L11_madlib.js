let r = 220
let g = 220
let b = 220
let textInput;
let button;
function setup(){
    createCanvas(700,800)
    textInput = createInput();
    textInput.position(width/2, 100)
    button = createButton("click me");
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

