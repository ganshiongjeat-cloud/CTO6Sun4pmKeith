let favfood = ["pizza","burger","sushi","tacos","pasta"]
let y =200
let speed = 3
let r = 100
let g = 100
let b = 100
let yPos = 1000
function setup(){
    createCanvas(600,400);
    
// }
// function draw(){
//     background(220);
//     fill(random(255),random(255),random(255));
//     rect(x,y,100);
//     x += speed
// if(x  >= width || x <=0){
//         speed = -speed;
//     r = random(255)
//     g = random(255)
//     b = random(255)
//     }

    textSize(32);
text("hi",width/2,yPos);
yPos-=0.6
    for(let i = 0;i<favfood.length; i++){
        text((i+1)+"."+favfood[i] , 50,(50 + i*50) );
    }

}



