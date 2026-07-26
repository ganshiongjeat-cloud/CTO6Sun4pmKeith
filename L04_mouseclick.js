function setup(){
    createcanvas(600,400);
    background(220);
}

function draw(){
    fill(shapecolour);
    circle(300,200,300);
    // fill(random(255),random(255),random(255))
    // React(10,20,20,20)
}

function mousePressed(){
    shapecolour = (random(255),random(255),random(255))
    circle(random(600),random(400),random(60))
    rect(random(600),random(400),random(100))
}

function mouseReleased(){
    shapecolour = 0 ;
}
