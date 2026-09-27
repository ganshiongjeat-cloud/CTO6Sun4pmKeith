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
    setInterval( countdownID,1000)

}

function countdown(){
    if(countdownTimer>0){
        countdownTimer--;
        r = random(0,255);
        r = random(0,255);r = random(0,255);
    }else{
        clearInterval(countdownID);
    }
}