let x = 200
let y = 200
let soundEffect, bgmusic, staticImage;
function preload(){
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png')
}
function setup(){
createCanvas(400,400);
bgMusic.loop();
}

function draw(){
background("lightblue");
if(keyIsDown(LEFT_ARROW))
image(staticImage,staticImageX,staticImageY,50,50);
}

function keyPressed(){
    if(keyCode ===32){
        soundEffect.loop();
    }

}