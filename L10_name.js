let r = 220
let g = 220
let b = 220
let countdownTimer = 60;
let countdownID;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(r,g,b)
    countdownID = setInterval( countdownID,1000)
    textSize(24);
    textAlign(CENTER,CENTER);
    text(count)

}

function countdown(){
    if(countdownTimer>0){
        countdownTimer--;
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
    }else{
        clearInterval(countdownID);
    }
}