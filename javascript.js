

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

//making the score variables global increments correctly, inside playGame function increment twice
let humanScore = 0;

let computerScore = 0;

for (i = 0; i < 5; i++)
    
    {

//Declare variables for get functions
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


//getHumanChoice function
function getHumanChoice() {

let answer = prompt("Please enter a choice of rock, paper, or scissors");

return answer.toLowerCase();

}

//log response
console.log(humanSelection);

//getComputerChoice function
function getComputerChoice() {

    let randomNumber = Math.random();
    
    if (0.33 < randomNumber && randomNumber < 0.66) {

        return 'paper';
    }

    else if (randomNumber <= 0.33) {

        return 'rock';
    }

    else {

        return 'scissors';
    } 

}

//log response
console.log(computerSelection);
    





//for loop 

//play function 


function playGame () {




function playRound(humanChoice, computerChoice) {

 if (humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'scissors' && computerChoice === 'paper' ||
    humanChoice === 'paper' && computerChoice === 'rock')
{
    console.log('You win! Your score: ' + ++humanScore);
    return humanScore;
    
} else if (humanChoice === 'scissors' && computerChoice === 'rock' ||
        humanChoice === 'paper' && computerChoice === 'scissors'  ||
        humanChoice === 'rock'  && computerChoice === 'paper')
{ 
    console.log('You lose! Computer Score: ' + ++computerScore);
    return computerScore;
    
} else {
    console.log('It is a tie!');
}

}

//Call play function, How do I call it 5 times 
playRound(humanSelection, computerSelection);

}

playGame();

}

if (humanScore > computerScore) {
    console.log('You win the game, great work!');
}

else if (computerScore > humanScore) {
    console.log('You lose the game, better luck next time');
}

else { 
    console.log('It is a tie!');
}