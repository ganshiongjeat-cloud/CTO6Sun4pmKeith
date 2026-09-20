let x = 100
let y = 100
let speedx = 2
let speedy = 3
function setup(){
    createCanvas(600,400);
    background(220)
}

function draw(){
    fill(0)
    textSize(40)
    text("Bounce!",x,y)
      x += speedx

    if(x > width-60 ||x-60<0){
        speedx = -speedx
    }
}