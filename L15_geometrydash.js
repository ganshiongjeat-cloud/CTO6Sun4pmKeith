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
let playerY;
let playerSIze = 30;
let velocity = 0;
let isGrounded = false;

function setup(){
    createCanvas(600,400);
    background(0)
    
}

function draw(){
    textAlign(CENTER,CENTER)
    textSize(20)
    fill(255)
    text("press Space to jump",300,50)

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
rect(playerX,playerY,playerSIze,)
    
}
