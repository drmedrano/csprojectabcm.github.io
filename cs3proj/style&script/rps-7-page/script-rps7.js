var cscore = 0;
var pscore = 0;

function prock(){
    let computer = Math.floor(Math.random()*7);
    if (computer == 0){
        computer = "Rock";
    }
    else if (computer == 1){
        computer = "Paper";
    }
    else if (computer == 2){
        computer = "Water";
    }
    else if (computer == 3){
        computer = "Air";
    }
    else if (computer == 4){
        computer = "Sponge";
    }
    else if (computer == 5){
        computer = "Fire";
    }
    else {
        computer = "Scissors";
    }
    
    if (computer === "Paper"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Paper";
        document.getElementById("extra").innerHTML = "Paper covers Rock";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Water"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Water";
        document.getElementById("extra").innerHTML = "Water erodes Rock";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Air"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Air";
        document.getElementById("extra").innerHTML = "Air erodes Rock";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Fire"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Fire";
        document.getElementById("extra").innerHTML = "Rock pounds out Fire";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Sponge"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Sponge";
        document.getElementById("extra").innerHTML = "Rock crushes Sponge";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Scissors"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Scissors";
        document.getElementById("extra").innerHTML = "Rock crushes Scissors";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Rock";
        document.getElementById("extra").innerHTML = "Rocks Ricochet Technique";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
}

function pwater(){
    let computer = Math.floor(Math.random()*7);
    if (computer == 0){
        computer = "Rock";
    }
    else if (computer == 1){
        computer = "Paper";
    }
    else if (computer == 2){
        computer = "Water";
    }
    else if (computer == 3){
        computer = "Air";
    }
    else if (computer == 4){
        computer = "Sponge";
    }
    else if (computer == 5){
        computer = "Fire";
    }
    else {
        computer = "Scissors";
    }
    
    if (computer === "Air"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Air";
        document.getElementById("extra").innerHTML = "Air evaporates Water";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Paper"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Paper";
        document.getElementById("extra").innerHTML = "Paper floats on Water";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Sponge"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Sponge";
        document.getElementById("extra").innerHTML = "Sponge absorbs Water";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Fire"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Fire";
        document.getElementById("extra").innerHTML = "Water puts out Fire";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Rock"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Rock";
        document.getElementById("extra").innerHTML = "Water erodes Rock";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Scissors"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Scissors";
        document.getElementById("extra").innerHTML = "Water rusts Scissors";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Water";
        document.getElementById("extra").innerHTML = "Water becomes one with Water";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
}

function pair(){
    let computer = Math.floor(Math.random()*7);
    if (computer == 0){
        computer = "Rock";
    }
    else if (computer == 1){
        computer = "Paper";
    }
    else if (computer == 2){
        computer = "Water";
    }
    else if (computer == 3){
        computer = "Air";
    }
    else if (computer == 4){
        computer = "Sponge";
    }
    else if (computer == 5){
        computer = "Fire";
    }
    else {
        computer = "Scissors";
    }
    
    if (computer === "Scissors"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Scissors";
        document.getElementById("extra").innerHTML = "Scissors swish through Air (?!)";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Paper"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Paper";
        document.getElementById("extra").innerHTML = "Paper fans Air";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Sponge"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Sponge";
        document.getElementById("extra").innerHTML = "Sponge uses Air Pockets";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Fire"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Fire";
        document.getElementById("extra").innerHTML = "Air blows out Fire";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Rock"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Rock";
        document.getElementById("extra").innerHTML = "Air erodes Rock";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Water"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Water";
        document.getElementById("extra").innerHTML = "Air evaporates Water";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Air";
        document.getElementById("extra").innerHTML = "Air mixes with... Air";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
}

function ppaper(){
    let computer = Math.floor(Math.random()*7);
    if (computer == 0){
        computer = "Rock";
    }
    else if (computer == 1){
        computer = "Paper";
    }
    else if (computer == 2){
        computer = "Water";
    }
    else if (computer == 3){
        computer = "Air";
    }
    else if (computer == 4){
        computer = "Sponge";
    }
    else if (computer == 5){
        computer = "Fire";
    }
    else {
        computer = "Scissors";
    }
    
    if (computer === "Scissors"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Scissors";
        document.getElementById("extra").innerHTML = "Scissors cut Paper";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Fire"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Fire";
        document.getElementById("extra").innerHTML = "Fire burns Paper";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Sponge"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Sponge";
        document.getElementById("extra").innerHTML = "Sponge soaks Paper (?!)";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Air"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Air";
        document.getElementById("extra").innerHTML = "Paper fans Air";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Rock"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Rock";
        document.getElementById("extra").innerHTML = "Paper covers Rock";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Water"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Water";
        document.getElementById("extra").innerHTML = "Paper floats on Water";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Paper";
        document.getElementById("extra").innerHTML = "Paper will paper Paper";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
}

function psponge(){
    let computer = Math.floor(Math.random()*7);
    if (computer == 0){
        computer = "Rock";
    }
    else if (computer == 1){
        computer = "Paper";
    }
    else if (computer == 2){
        computer = "Water";
    }
    else if (computer == 3){
        computer = "Air";
    }
    else if (computer == 4){
        computer = "Sponge";
    }
    else if (computer == 5){
        computer = "Fire";
    }
    else {
        computer = "Scissors";
    }
    
    if (computer === "Scissors"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Scissors";
        document.getElementById("extra").innerHTML = "Scissors cut Sponge";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Fire"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Fire";
        document.getElementById("extra").innerHTML = "Fire burns Sponge";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Rock"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Rock";
        document.getElementById("extra").innerHTML = "Rock crushes Sponge";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Air"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Air";
        document.getElementById("extra").innerHTML = "Sponge uses Air pockets";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Paper"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Paper";
        document.getElementById("extra").innerHTML = "Sponge soaks Paper";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Water"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Water";
        document.getElementById("extra").innerHTML = "Sponge absorbs Water";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Sponge";
        document.getElementById("extra").innerHTML = "Spongebob tried to communicate with a fellow Sponge, he failed";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
}

function pscissors(){
    let computer = Math.floor(Math.random()*7);
    if (computer == 0){
        computer = "Rock";
    }
    else if (computer == 1){
        computer = "Paper";
    }
    else if (computer == 2){
        computer = "Water";
    }
    else if (computer == 3){
        computer = "Air";
    }
    else if (computer == 4){
        computer = "Sponge";
    }
    else if (computer == 5){
        computer = "Fire";
    }
    else {
        computer = "Scissors";
    }
    
    if (computer === "Water"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Water";
        document.getElementById("extra").innerHTML = "Water rusts Scissors";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Fire"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Fire";
        document.getElementById("extra").innerHTML = "Fire melts Scissors";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Rock"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Rock";
        document.getElementById("extra").innerHTML = "Rock crushes Scissors";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Air"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Air";
        document.getElementById("extra").innerHTML = "Scissors swish through Air (?!)";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Paper"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Paper";
        document.getElementById("extra").innerHTML = "Scissors cut Paper";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Sponge"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Sponge";
        document.getElementById("extra").innerHTML = "Scissors cut Sponge";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Scissors";
        document.getElementById("extra").innerHTML = "Scissors tried cutting another Scissors, it failed";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
}

function pfire(){
    let computer = Math.floor(Math.random()*7);
    if (computer == 0){
        computer = "Rock";
    }
    else if (computer == 1){
        computer = "Paper";
    }
    else if (computer == 2){
        computer = "Water";
    }
    else if (computer == 3){
        computer = "Air";
    }
    else if (computer == 4){
        computer = "Sponge";
    }
    else if (computer == 5){
        computer = "Fire";
    }
    else {
        computer = "Scissors";
    }
    
    if (computer === "Water"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Water";
        document.getElementById("extra").innerHTML = "Water puts out Fire";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Air"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Air";
        document.getElementById("extra").innerHTML = "Air blows out Fire";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Rock"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Rock";
        document.getElementById("extra").innerHTML = "Rock pounds out Fire";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Scissors"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Scissors";
        document.getElementById("extra").innerHTML = "Fire melts Scissors";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Paper"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Paper";
        document.getElementById("extra").innerHTML = "Fire burns Paper";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Sponge"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Sponge";
        document.getElementById("extra").innerHTML = "Fire burns Sponge";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Fire";
        document.getElementById("extra").innerHTML = "Fight fire with fire, you get, big fire";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
}