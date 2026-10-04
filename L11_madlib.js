let r = 220
let g = 220
let b = 220
let textInput;
let button;
let textInputA;
let textInputB;
let textInputC;
let textInputD;
function setup(){
    createCanvas(700,800)
    textInput = createInput();
    textInput.position(width/2, 100)
    button = createButton("generate story");
    button.position(width/2, 135);
    button.mousePressed(updateText);

    textInputA = createInput();
    textInputA.position(width/2, 120)
    textInputB = createInput();
    textInputB.position(width/2, 140)
    textInputC = createInput();
    textInputC.position(width/2, 160)
    textInputD = createInput();
    textInputD.position(width/2, 180)
}

function draw(){
    background(r,g,b);
    fill(220,0,0)
    textSize(18)
    textAlign(RIGHT,CENTER)
    text("input ur name here: ",width/2 - 15,95)
    text("input adjective here: ",width/2-15,115)
    text("input verb here:",width/2 -15,135)
    text("input adverb here: ",width/2-15,155)
    text("")
    

}

function updateText(){
    console.log("hello," + textInput.value())
}