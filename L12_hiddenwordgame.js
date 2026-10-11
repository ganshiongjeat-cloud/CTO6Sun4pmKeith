let textinput;
let submitbutton;

function setup(){
    createCanvas(600,400)
    selectedddd = random(word);

    hint = selectedddd.charAt(0).toUpperCase()
    for (let i =1;1<selectedddd.length; i ++){
        hint = hint +"_";
    }

    textinput = createInput("");
    textinput.position(220,260)
    textinput.size(80,30)

    submitbutton = createInput("")
    submitbutton.position(335,260)
    submitbutton.size(80,30)
    submitbutton.mousePressed(showWord);    
}