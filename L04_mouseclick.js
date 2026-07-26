// write your codes here
let shapecolour = 'blue';
function setup(){
    createcanvas(600,400);
    background(220);
}

function draw(){
    fill(shapecolour);
    circle(300,200,300);
    fill(random(255),random(255),random(255))
    React(10.10)
}

function mousePressed(){
    shapecolour = 'red';
}

function mouseReleased(){
    shapecolour = 'blue';
}
