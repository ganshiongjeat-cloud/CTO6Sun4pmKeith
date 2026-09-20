let x = 100
let y = 100
let speedx = 2
let speedy = 3
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(220)
    fill(0)
    textSize(32)
    text("Bounce!",x,50)
      x += speedx

    if(x > width-60 ||x-60<0){
        speedx = -speedx
    }
}