function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  // fill(200,0,0);
  // circle(75,200,100);

  // fill(0,200,0);
  // circle(225,200,100);

  // fill(0,0,200);
  // circle(375,200,100);

  // fill(200,200,200);
  // circle(525,200,100);

  for(let i =0; i<40; i++){
    fill(i*5)
    // circle(75 + (i*150),200,100)
    square(75 + (i*10),200,10)

  }
  for(let i=0;i<8;i++){
    if(i%2==0){
      fill(0);
    
    }else{
      fill(255)
    }

  }
  

  // Task 1: Colour Gradient

  // Task 2: Colour Loop
  let spacing =50
    for(let i=0;i<8;i++){
    if(i%2==0){
      fill(0);
    
    }else{
      fill(255)
    }
    circle(spacing + i*spacing,200,40)
  }

  // Task 3: Row of Circles
for(let i=0;i<5;i++){
  circle(15 +i*30,15,30)
}
let circlediameter = 30
let halfwidth = width/2
let circlewidth = 30*5
let halfcirclewidth = circlewidth/2
let gap = halfwidth - halfcirclewidth
let radius = circlediameter/2
let startX = 0;

  // Task 4: Grid of Circles
}