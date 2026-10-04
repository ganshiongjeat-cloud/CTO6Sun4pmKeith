let r = 220
let g = 220
let b = 220
let textInput;
let button;
let textInputverb;
let textInputadjtive;
let textInputadverb;
let textInputplace;
function setup(){
    createCanvas(700,800)
    textInput = createInput();
    textInput.position(width/2, 100)
    button = createButton("generate story");
    button.position(width/2, 200);
    button.mousePressed(updateText);

    textInputverb = createInput();
    textInputverb.position(width/2, 120)
    textInputadjtive = createInput();
    textInputadjtive.position(width/2, 140)
    textInputadverb = createInput();
    textInputadverb.position(width/2, 160)
    textInputplace = createInput();
    textInputplace.position(width/2, 180)
}

function draw(){
    background(r,g,b);
    fill(220,0,0)
    textSize(18)
    textAlign(RIGHT,CENTER)
    text("input ur name here: ",width/2 - 15,95);
    text("input verb here: ",width/2-15,115);
    text("input adjective here:",width/2 -15,135);
    text("input adverb here: ",width/2-15,155);
    text("input place here: ",width/2-15,175);
    

}

function updateText(){
    console.log("hello," + textInput.value())
    console.log("verb: " + textInputverb.value())
        console.log("adjective: " + textInputadjtive.value())
    console.log("adverb: " + textInputadverb.value())
    console.log("place: " + textInputplace.value())    
}