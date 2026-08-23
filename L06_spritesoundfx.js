function setup(){
createCanvas(400,400);
background(220);
}

function draw(){
    circle(x,y,50);
    if(keyCode === 38){
        y -= 5;}
    if(keyCode === 37){
        x -=5;
    
    }
}