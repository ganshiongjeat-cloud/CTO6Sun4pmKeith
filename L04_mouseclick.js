let shapecolour;
function setup(){
    createCanvas(600,400);
    background(220);
}

function draw(){
    let shapecolour
    fill(shapecolour);
    circle(300,200,300);
    // fill(random(255),random(255),random(255))
    // React(10,20,20,20)
}

function mousePressed(){

    //  shapecolour = (random(255));
    // fill(shapecolour,shapecolour,shapecolour);
    // circle(random(600),random(400),random(60));

    // fill(shapecolour,shapecolour,shapecolour);
    // rect(random(600),random(400),random(100),random(80));
}

function mouseReleased(){
    rect(random(600),random(400),random(100),random(300));
    background(220)
}
function mousemoved(){
    ellipse(mouseX,mouseY,10,10);
}
