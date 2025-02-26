

/*
Rock, Paper, Scissors

First Draft Pseudocode
1. Enter 1 for rock, 2 for paper, 3 for scissors
2. function that randomly picks a number 1-3
3. function that returns "rock, paper, or scissors"
4. Repeat this 3 times
5. compare results, rock > scissors, paper > rock, scissors > paper
6. Add up score
7. Return results 

2nd draft 
1. 
2. Use Math.random to return rock, paper, scissors
*/

//Asks for human choice
let answer = parseInt(prompt("Please enter a choice of Rock, Paper, or Scissors"));


//generates computer response
function getComputerChoice() {

    let randomNumber = Math.random();
    
    if (randomNumber > 0.33 && randomNumber < 0.66) {

        console.log("Paper");
    }

    else if (randomNumber <= 0.33) {

        console.log("Rock");
    }

    else {

        console.log("Scissors");
    } 

}

getComputerChoice();
    

    