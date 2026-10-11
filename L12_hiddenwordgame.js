let input;
let button;

function setup(){
createCanvas(600,400)
input = createInput()
input.position(width/2, 200)
button = createButton("show input")
button.position(width/2, 150)
button.mousePressed(updateText)
}
function draw(){
    background(220)
    fill(0)
}
function updateText(){
    
}