let size = 5;
let colors;
let ballcolor;

let x = 100;
let y = 100;
let speed = 8;
function setup(){
    createCanvas(600,400);
    background(220);
   ballcolor=color(255);
}

function mousePressed(){
    colors = color(random(255),random(255),random(255));
    size = 5;
}
function mouseDragged(){
    fill(colors);
    circle(mouseX,mouseY,size);

    size += 0.5;
}

function keyPressed(){
    background(220);
    let numCircles = floor(random(5,21));
    for(let i =0; i < numCircles; ++i){
        let x = random(width);
        let y = random(height);
        let size = random(5,40);
        fill(random(255),random(255),random(255));
        circle(x,y,size);
    }
}

console.log("key:",key);
console.log("keycode:",keycode);

function keyReleased(){
    background(220);
}


function draw(){
    if(key ===  'c' || key === 'c'){
        circle(100,100,80);
    }
    if(key === 's'|| key === 's'){
        square(60,60,80);
    }
    if(key === 't'|| key === 't'){
        triangle(100,50,50,150,150,150);
    }

fill(ballcolor)
circle(x,y,50);
if(keyCode === 38){
    ballcolor = color(255,0,0);
}
if(keyCode === 40){
    ballcolor = color(0,0,0)
}
if(key === 'w'||key === 'w'){
    ballcolor = color(255,255,255);
    }
else if(key === 'r'||key ==='r'){
    ballcolor = color(255,0,0);
}
else if(key === 'g'||key === 'g'){
    ballcolor = color(0,255,0);
}
else{
    ballcolor = color(255,255,0);
}
if(keyIsDown(LEFT_ARROW)){
    x-=speed;
}
if(keyIsDown(RIGHT_ARROW)){
    x+=speed;
}
if(keyIsDown(UP_ARROW)){
    y-=speed;
}
if(keyIsDown(DOWN_ARROW)){
    y+=speed;
}
x = constrain(x,0,width);
y = constrain(y,0,height);


if(key === 'r' || key === 'R'){
    square(mouseX,mouseY,50,50)
}
if(key === 'e' || key === 'E'){
circle(mouseX,mouseY,50)
}
if(key === 'b' || key === 'B'){
    shapeColour = colour(0,0,255);
}
if(key === 'g' || key === 'G'){
    shapeColour = colour(0,255,0);
}
if(key === '' || key === 'B'){
    shapeColour = colour(0,0,255);
}
}
function keyReleased(){
    background(220);
}

