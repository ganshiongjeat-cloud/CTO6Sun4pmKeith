let size = 5;
let colors;
function setup(){
    createCanvas(600,400);
    background(220);

}

function mousePressed(){
    colors = color(random(255),random(255),random(255));
    size = 5;
}
function mouseDragged(){
    fill(colous);
    circle(mouseX,mouseY,size);

    size += 0.5;
}