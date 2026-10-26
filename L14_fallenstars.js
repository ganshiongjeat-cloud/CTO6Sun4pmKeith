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
     
    for(let i = 0; i < numStars; i++){
        fill(255, 255, 0);
        ellipse(starX[i], starY[i], starSize[i]);
        starY[i] += starSpeed[i];

        if (starY[i] > height){
            starY[i] = random(-200, -50);
            starX[i] = random(width);
            starSpeed[i] = random(2, 5);
        }
    }

if(keyIsDown(LEFT_ARROW)){
    playerX -= 7;
}
if(keyIsDown(RIGHT_ARROW)){
    playerX += 7;
}
playerX = constrain(playerX, 0, width-40);

fill(0,255,0);
rect(playerX, height - 40, 40, 40);

if (!gameOver){
    for(let i = 0; i < numStars; i++){

        if(starY[i]> height - 40 && starX[i] - playerX >= 0 && starX[i] - playerX <= 40){}

    }
}




}