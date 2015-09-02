////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move = value();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
      if (value = "rock") {
        return "rock";
    } else if (value = "paper") {
        return "paper";
    } else if (value = "scissors") {
        return "scissors";
    } else {
        return "getInput()"
        }
}

function getComputerMove(move) {
    var move = value();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
      if (value = "rock") {
        return "rock";
    } else if (value = "paper") {
        return "paper";
    } else if (value = "scissors") {
        return "scissors";
    } else {
        return "randomPlay()"
        }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (getWinner('rock','scissors')) {
        return "player";
    } else if (getWinner('rock','paper')) {
        return "computer";
    } else if (getWinner('rock','rock')) {
            return "tie";
        }
    if (getWinner('scissors','paper')) {
        return "player";
    } else if (getWinner('scissors','rock')) {
        return "computer";
    } else if (getWinner('scissors','scissors')) {
            return "tie";
        }
    if (getWinner('paper','rock')) {
        return "player";
    } else if (getWinner('paper','scissors')) {
        return "computer";
    } else if (getWinner('paper','paper')) {
            return "tie";
        }
    }
    return winner;
}

function playToFive(playerWins,computerWins) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
    var result;
    var max = 5;
    while (playerWins < max && computerWins < max) {
    if (winner = 'player') playerWins += 1;) 
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n'););
    else if (winner = 'computer') computerWins += 1;)  
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n'););
    }
    if (playerWins === 5){
        result = 'Player' + ' ' + 'Wins';
        console.log('Player' + ' ' + 'Wins');
    else if (computerWins === 5) {
        result = 'Computer' + ' ' + 'Wins';}
        console.log('Computer' + ' ' + 'Wins');
    }
}

