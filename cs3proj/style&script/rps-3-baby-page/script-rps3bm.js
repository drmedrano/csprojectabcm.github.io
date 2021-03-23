var cscore = 0;
var pscore = 0;
var compmove = 0;
var computer = "";

window.onload=function() {
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true;
}

function computermove(){
    let compmove = Math.floor(Math.random()*3);
    if (compmove == 0){
        compmove = "Rock";
    }
    else if (compmove == 1){
        compmove = "Paper";
    }
    else {
        compmove = "Scissors";
    }
    computer = compmove;
    document.getElementById("compspan1").innerHTML = "Computer used ";
    document.getElementById("compspan2").innerHTML = compmove;
    document.getElementById("buttonrock").disabled = false;
    document.getElementById("buttonpaper").disabled = false;
    document.getElementById("buttonscissors").disabled = false;
    document.getElementById("buttontext2").innerHTML = "im disabled";
    document.getElementById("buttontext2").disabled = true;
    document.getElementById("chosen").innerHTML = "Player used...";
}

function prock(){
    document.getElementById("chosen").innerHTML = "Player used Rock";

    if (computer === "Rock"){
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    else if (computer === "Paper"){
        cscore = cscore + 1;
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    else{
        pscore = pscore + 1;
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }   
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true;
    document.getElementById("buttontext2").disabled = false;
    document.getElementById("buttontext2").innerHTML = "See computer's next move n3rd";
}

function ppaper(){
    document.getElementById("chosen").innerHTML = "Player used Paper";
    if (computer === "Paper"){
        document.getElementById("result").innerHTML = "DRAW";
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    else if (computer === "Scissors"){
        cscore = cscore + 1;
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    else{
        pscore = pscore + 1;
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true;
    document.getElementById("buttontext2").disabled = false;
    document.getElementById("buttontext2").innerHTML = "See computer's next move n3rd";
}

function pscissors(){
    document.getElementById("chosen").innerHTML = "Player used Scissors";

    if (computer === "Scissors"){
        document.getElementById("result").innerHTML = "DRAW";
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    else if (computer === "Rock"){
        cscore = cscore + 1;
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    else{
        pscore = pscore + 1;
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true; 
    document.getElementById("buttontext2").disabled = false;
    document.getElementById("buttontext2").innerHTML = "See computer's next move n3rd";
}