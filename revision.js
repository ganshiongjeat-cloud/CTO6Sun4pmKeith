function setup(){
    createCanvas(600,400);
    background(0);
}
function draw(){
//     stroke(255,0,0);
//     strokeWeight(10);
//     triangle(200,150,240,250,160,250);
//     fill(0);
//     circle(300,200,100);
//     rect(350,150,100,100);
for(let i =0; i<10; i++){
    fill(0 + i*25);
    circle(30*i+20,30 + i*20,20)
}
}
/*revision notes
css -> cascading style sheet
heading in html -> h1 to h7
must have in html -> body, title, html, head
declare a variable -> let variable_name = value;
must have functions in p5js -> setup() and draw()
in for loop be very careful of the initial variable declaration
for loop syntax -> for(let i =0; i<5; i++)
for loop syntax -> for(declaration; condition; increment)
to create new canvas -> createCanvas(width,height)
cordinate system -> top left is (0,0)
if move right -> x increase y remain same 
cordinate system -> if move down x same y increase
coordinate system-> we dont use negative value
functiion that only run once -> function setup()
function that run multiple times-> function draw()
*/