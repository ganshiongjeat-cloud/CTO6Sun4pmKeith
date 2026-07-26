function setup(){
    createCanvas(600,400);
    background(220);
}

function draw(){
    fill(shapecolour);
    circle(300,200,300);
    // fill(random(255),random(255),random(255))
    // React(10,20,20,20)
}

function mousePressed(){
    for(let i = 0;i<shapecolour;i++)
    shapecolour = (random(255),random(255),random(255))
    fill(shapecolour)
    circle(random(600),random(400),random(60))
    fill(shapecolour)
    rect(random(600),random(400),random(100),random(80))
}

function mouseReleased(){
    rect(random(600))
}
