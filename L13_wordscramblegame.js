let words = ["nathan","keith","jaden"]

let currentword, scrambleword, rescramblebutton, submitbutton;
let score =0;
let streak =0;
let maxstreak =0;
let message = "";

let textinput;
let button;
let displaytext = "enter text here"

function setup(){
createCanvas(600,400);

currentword = random(words)
scrambleword = shuffleWord(currentword);

    textinput = createInput("enter anything");
    textinput.position(120, 175);
    textinput.size(110,35);
    textinput.style('font-size',"16px");

    rescramblebutton = createButton("rescramble");
    rescramblebutton.position(120,220);
    rescramblebutton.style('font-size',"16px");
    rescramblebutton.mousePressed(rescambleWord);

    submitbutton = createButton("submit");
    submitbutton.position(155,220);
    submitbutton.size(100,35);
    submitbutton.style('font-size',"16px");
    submitbutton.mousePressed(checkAnswer)

}

function draw(){
    background(220);
    text("word scramble game!",300.60);
    textSize(18);
    text("Random word: " + scrambleword,300,125);
    textSize(16);
    text("Score" + score,300,250);
    text("Streak"+ streak + "(Max: "+maxstreak,300,275)
    text(message,300,315);
}

function shuffleWord(word){
    let arr = word.split('');
    for(let i = arr.length -1;i>0;i--){
        let j = floor(random(i+1));
        [arr[i],arr[j]] = [arr[j],arr[j]]
    }
    return arr.join('');
}



function displayText(){
    displaytext = input.value();
}
function rescambleWord(){

}
function checkAnswer(){

}