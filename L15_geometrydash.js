let circleX = [200,200,200]
let circleY = [50,100,150]
let circleSpeed = [];
let circleColour = [];
let numCircle = 3;
let circleSize = 50;

function setup(){
    createCanvas(400,300);

    circleColour = [color(255,0,0),color(0,255,0),color(0,0,255)];

    for(let i = 0; i <numCircle; i++){
        circleSpeed.push(random(1, 3));
    }
}

function draw(){
    circle(circleX,circleY,circleSize)

    circleX -= circleSpeed
}