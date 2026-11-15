// let circleX = [200,200,200]
// let circleY = [50,100,150]
// let circleSpeed = [];
// let circleColour = [];
// let numCircle = 3;
// let circleSize = 50;

// function setup(){
//     createCanvas(400,300);

//     circleColour = [color(255,0,0),color(0,255,0),color(0,0,255)];

//     for(let i = 0; i <numCircle; i++){
//         circleSpeed.push(random(1, 3));
//     }
// }

// function draw(){
// for(let i = 0; i < numCircle; i++){
//     circle(circleX,circleY,circleSize)
// }

//     circleX -= circleSpeed
// }
let playerX = 100;
let playerY = 400;
let playerSIze = 30;
let velocity = 0;
let isGrounded = false;
let spikeX = [];
let spikewidth = 20;
let spikeHeight = 30;
let spikeSpeed = 5;
let score = 0;
let gameover = false;

function setup(){
    createCanvas(600,400);

    for(let i = 0; i<3;i++){
        spikeX.push(width + i * 300);
    }
}

function draw(){
    background(0)

    if(!gameover){
        fill(255,0,0);
        for(let i = 0; i < spikeX.length;i++){
            for(let i = 0;i < spikeX.length; i++){
    spikeX[i] -= spikeSpeed;

    if(spikeX[i] < -spikewidth){
        spikeX[i] = width + random(100,300);
    }
    triangle(spikeX[i], height, spikeX[i] + spikewidth / 2, height - spikeHeight, spikeX[i] + spikewidth, height)
}
if(
    playerX + playerSIze > spikeX[i] &&
    playerX < spikeX[i] + spikewidth &&
    playerY + playerSIze > height - spikeHeight
) {
    
}
        }
    }

    textAlign(CENTER,CENTER)
    textSize(20)
    fill(255)
    text("press Space to jump",300,50)
    text("score: " +score,300,70)

    if(spikeX <= playerX){
        score += 1
    }
    velocity += 0.8;
    playerY += velocity;

    if(playerY >= height - playerSIze){
        playerY = height - playerSIze;
        isGrounded = true;
        velocity = 0;
    } else{
        isGrounded = false;
    }
fill(0,255,0);
rect(playerX , playerY , playerSIze , playerSIze);

fill(255,0,0);


}
    


function keyPressed(){
    if(key === ' ' && isGrounded){
        velocity = -12;
    }
}