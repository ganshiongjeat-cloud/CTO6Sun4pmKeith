let x = 100
let y = 100
let speedx = 3
function setup(){
    createCanvas(600,400);
    background(220)
}

function draw(){
    textSize(40)
    textalign(CENTER)
    text("Bounce!",x,y)
    x += speed
    y += speed
    if(x = 600){
        
    }
}