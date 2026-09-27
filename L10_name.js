// let r = 220
// let g = 220
// let b = 220
// let countdownTimer = 60;
// let countdownID;
let userinput;
let usertext = "ENTER NAME HERE";
let userage = "ENTER AGE HERE";
let ageinput;
let bgcolorpicker;
function setup(){
    createCanvas(400,400);
    userinput = createInput();
    userinput.position(width/2 - 90, height + 80)
    userinput.input(updateText);
    ageinput = createInput();
    ageinput.position(width/2 - 90, height + 100)
    ageinput.input(updateTex);

    bgcolorpicker = createColorPicker(220);
    bgcolorpicker.position(width/2 - 90, height +150)
}

function draw(){
    // background(r,g,b)
    // countdownID = setInterval( countdownID,1000)
    // textSize(24);
    // textAlign(CENTER,CENTER);
    // text(countdownTimer,width/2,height/2);
    background(bgcolorpicker.value());
    
    textSize(24);
    textAlign(CENTER,CENTER);
    text(usertext,height/2,width/2)
    text(userage,height/2 - 16,width/2 + 30)
    textSize(12);
    text("Enter name",60 , height -305)
    textSize(12);
    text("Enter age",60 , height - 290)
}

function updateText(){
    usertext = this.value()

}
function updateTex(){
     userage = this.value()
}
// function countdown(){
//     if(countdownTimer>0){
//         countdownTimer--;
//         r = random(0,255);
//         g = random(0,255);
//         b = random(0,255);
//     }else{
//         clearInterval(countdownID);
//     }
// }