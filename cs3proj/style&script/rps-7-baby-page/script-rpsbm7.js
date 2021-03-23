var cscore = 0;
var pscore = 0;
var compmove = 0;
var computer = "";

window.onload=function() {
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true;
    document.getElementById("buttonfire").disabled = true;
    document.getElementById("buttonwater").disabled = true;
    document.getElementById("buttonair").disabled = true;
    document.getElementById("buttonsponge").disabled = true;
}

function computermove(){
    let compmove = Math.floor(Math.random()*7);
    if (compmove == 0){
        compmove = "Rock";
    }
    else if (compmove == 1){
        compmove = "Paper";
    }
    else if (compmove == 2){
        compmove = "Water";
    }
    else if (compmove == 3){
        compmove = "Air";
    }
    else if (compmove == 4){
        compmove = "Sponge";
    }
    else if (compmove == 5){
        compmove = "Fire";
    }
    else{
        compmove = "Scissors";
    }
    document.getElementById("compspan1").innerHTML = "Computer used ";
    document.getElementById("compspan2").innerHTML = compmove;
    document.getElementById("buttonrock").disabled = false;
    document.getElementById("buttonpaper").disabled = false;
    document.getElementById("buttonscissors").disabled = false;
    document.getElementById("buttonfire").disabled = false;
    document.getElementById("buttonwater").disabled = false;
    document.getElementById("buttonair").disabled = false;
    document.getElementById("buttonsponge").disabled = false;
    document.getElementById("buttontext2").innerHTML = "im disabled";
    document.getElementById("buttontext2").disabled = true;
    document.getElementById("chosen").innerHTML = "Player used...";
    computer = compmove;
}

function prock(){
    if (computer === "Paper"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Paper";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Water"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Water";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Air"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Air";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Fire"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Fire";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Sponge"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Sponge";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Scissors"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Rock, Computer used Scissors";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Rock";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true;
    document.getElementById("buttonfire").disabled = true;
    document.getElementById("buttonwater").disabled = true;
    document.getElementById("buttonair").disabled = true;
    document.getElementById("buttonsponge").disabled = true;
    document.getElementById("buttontext2").disabled = false;
    document.getElementById("buttontext2").innerHTML = "See computer's next move";
}

function pwater(){
    if (computer === "Air"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Air";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Paper"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Paper";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Sponge"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Sponge";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Fire"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Fire";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Rock"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Rock";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Scissors"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Water, Computer used Scissors";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Water";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true;
    document.getElementById("buttonfire").disabled = true;
    document.getElementById("buttonwater").disabled = true;
    document.getElementById("buttonair").disabled = true;
    document.getElementById("buttonsponge").disabled = true;
    document.getElementById("buttontext2").disabled = false;
    document.getElementById("buttontext2").innerHTML = "See computer's next move";
}

function pair(){
    if (computer === "Scissors"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Scissors";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Paper"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Paper";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Sponge"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Sponge";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Fire"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Fire";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Rock"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Rock";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Water"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Air, Computer used Water";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Air";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true;
    document.getElementById("buttonfire").disabled = true;
    document.getElementById("buttonwater").disabled = true;
    document.getElementById("buttonair").disabled = true;
    document.getElementById("buttonsponge").disabled = true;
    document.getElementById("buttontext2").disabled = false;
    document.getElementById("buttontext2").innerHTML = "See computer's next move";
}

function ppaper(){
    if (computer === "Scissors"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Scissors";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Fire"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Fire";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Sponge"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Sponge";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Air"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Air";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Rock"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Rock";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Water"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Paper, Computer used Water";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Paper";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true;
    document.getElementById("buttonfire").disabled = true;
    document.getElementById("buttonwater").disabled = true;
    document.getElementById("buttonair").disabled = true;
    document.getElementById("buttonsponge").disabled = true;
    document.getElementById("buttontext2").disabled = false;
    document.getElementById("buttontext2").innerHTML = "See computer's next move";
}

function psponge(){ 
    if (computer === "Scissors"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Scissors";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Fire"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Fire";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Rock"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Rock";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Air"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Air";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Paper"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Paper";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Water"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Sponge, Computer used Water";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Sponge";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true;
    document.getElementById("buttonfire").disabled = true;
    document.getElementById("buttonwater").disabled = true;
    document.getElementById("buttonair").disabled = true;
    document.getElementById("buttonsponge").disabled = true;
    document.getElementById("buttontext2").disabled = false;
    document.getElementById("buttontext2").innerHTML = "See computer's next move";
}

function pscissors(){
    if (computer === "Water"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Water";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Fire"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Fire";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Rock"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Rock";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Air"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Air";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Paper"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Paper";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Water"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Scissors, Computer used Air";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Scissors";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true;
    document.getElementById("buttonfire").disabled = true;
    document.getElementById("buttonwater").disabled = true;
    document.getElementById("buttonair").disabled = true;
    document.getElementById("buttonsponge").disabled = true;
    document.getElementById("buttontext2").disabled = false;
    document.getElementById("buttontext2").innerHTML = "See computer's next move";
}

function pfire(){
    
    if (computer === "Water"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Water";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Air"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Air";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Rock"){
        cscore = cscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Rock";
        document.getElementById("result").innerHTML = "Computer wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Scissors"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Scissors";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }

    else if (computer === "Paper"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Paper";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    } 

    else if (computer === "Sponge"){
        pscore = pscore + 1;
        document.getElementById("chosen").innerHTML = "Player used Fire, Computer used Sponge";
        document.getElementById("result").innerHTML = "Player wins" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }    

    else{
        document.getElementById("chosen").innerHTML = "Player and Computer both used Fire";
        document.getElementById("result").innerHTML = "DRAW" ;
        document.getElementById("score").innerHTML = "Player: " + pscore + "   " + "Computer: " + cscore;
    }
    document.getElementById("buttonrock").disabled = true;
    document.getElementById("buttonpaper").disabled = true;
    document.getElementById("buttonscissors").disabled = true;
    document.getElementById("buttonfire").disabled = true;
    document.getElementById("buttonwater").disabled = true;
    document.getElementById("buttonair").disabled = true;
    document.getElementById("buttonsponge").disabled = true;
    document.getElementById("buttontext2").disabled = false;
    document.getElementById("buttontext2").innerHTML = "See computer's next move";
}