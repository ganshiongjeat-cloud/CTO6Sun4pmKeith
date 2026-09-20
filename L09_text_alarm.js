let x = 100
let y = 100
let speedx = 2
let speedy = 3
let interval;
let countdown = 5
let bgmusic;
let r =0;
let g =0;
let b=0;
function preload(){
        bgMusic = loadSound('assets/bossaNova.mp3');
}
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(r,g,b)
    fill(0)
    textSize(32)
    text("Bounce!",x,50)
      x += speedx

    if(x > width-60 ||x-60<0){
        speedx = -speedx
    }

    let h = hour();
    let m = minute();
    let s = second();
    let string = nf(h,2)+" : " + nf(m,2)+" : " + nf(s,2);
    textSize(32);
    fill("gold");
    text(string,100,200);

    textSize(32)
    text("Click me to start timer", width / 2, height = 50);

    textSize(100)
    text(countdown, 300, 200);
    
}
function mousePressed(){
    interval = setInterval(updateCountdown, 1000);

}
function updateCountdown(){
    if (countdown > 0){
        countdown -= 1;
    } else {
        clearInterval(interval);
        setInterval(alarm,500);
    }

    }
function alarm(){
        r = random(r)
        g = random(g)
        b = random(b)
        bgMusic.play();
}