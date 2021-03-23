var cscore = 0;
var pscore = 0;
var computer = 0;

function prock(){
    let computer = Math.floor(Math.random()*3);
    if (computer == 0){
        computer = "Rock";
    }
    else if (computer == 1){
        computer = "Paper";
    }
    else {
        computer = "Scissors";
    }

    if (computer === "Rock"){
        document.getElementById("chosen").innerHTML = "Player and Computer both used Rock";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore
    }
    else if (computer === "Paper"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Paper";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    else{
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Scissors";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }   
}

function ppaper(){
    let computer = Math.floor(Math.random()*2);
    if (computer == 0){
        computer = "Rock";
    }
    else if (computer == 1){
        computer = "Paper";
    }
    else {
        computer = "Scissors";
    }

    if (computer === "Paper"){
        document.getElementById("chosen").innerHTML = "Player and Computer both used Paper";
        document.getElementById("result").innerHTML = "DRAW";
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore
    }
    else if (computer === "Scissors"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Scissors";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    else{
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Rock";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }   
}

function pscissors(){
    let computer = Math.floor(Math.random()*2);
    if (computer == 0){
        computer = "Rock";
    }
    else if (computer == 1){
        computer = "Paper";
    }
    else {
        computer = "Scissors";
    }

    if (computer === "Scissors"){
        document.getElementById("chosen").innerHTML = "Player and Computer both used Scissors";
        document.getElementById("result").innerHTML = "DRAW";
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore
    }
    else if (computer === "Rock"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Rock";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    else{
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Paper";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }   
}