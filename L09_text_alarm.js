let x = 100
let y = 100
let speedx = 3
let speedy = 3
function setup(){
    createCanvas(600,400);
    background(220)
}

function draw(){
      x += speedx
    y += speedy
    textSize(40)
    text("Bounce!",x,y)
  
    if(x = width){
        speedx = -speedx
    }
    if(y = height){
        speedy = -speedy
    }
}