let x =300
let y =200

function setup(){
    createCanvas(600,400);
    
}
function draw(){
    background(220);
    fill(random(255),random(255),random(255));
    rect(x,y,100);
    x += speed
}