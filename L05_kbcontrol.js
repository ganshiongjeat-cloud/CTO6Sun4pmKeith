let size = 5;
let colours;
function setup(){
    createCanvas(600,400);
    background(220);


}

function mousePressed(){
    colours = colour(random(255),random(255))
}