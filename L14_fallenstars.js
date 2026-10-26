let starX = [];
let starY = [];
let starSize = [];
let starSpeed = [];
let numStars = 10;
let playerX;
let gameOver = false;

function setup(){
    createCanvas(600,400);

    for (let i = 0; i < numStars; i++){
        starX.push(random(width));
        starY.push(random(-300,-50));
        starSize.push(random(10, 20));
        starSpeed.push(random(1, 3));
    }
playerX = width/2
}

function draw(){
    background(0);
     


if (!gameOver){
    for(let i = 0; i < numStars; i++){

        if(starY[i]> height - 40 && starX[i] - playerX >= 0 && starX[i] - playerX <= 40){
            gameOver = true;
        }

    }
} else{
    fill(255,0,0);
    textSize(32);
    text("GAME OVER U SUCK!!!", width / 2, height / 2);
}




}