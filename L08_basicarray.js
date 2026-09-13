let favfood = ["pizza","burger","sushi","tacos","pasta"]
let y =200
let speed = 3
let r = 100
let g = 100
let b = 100
let yPos = 400
let lineGap = 30
function setup(){
    createCanvas(600,400);
}
// }
function draw(){
    background(0);
    fill(255,255,0)
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

    for(let i = 0;i<favfood.length; i++){
        text((i+1)+"."+favfood[i] , 50,yPos+(+ i*lineGap) );
    }



yPos-=0.6;
}
