// ====================================
// =========== TIC TAC TOE ============
// ====================================



// The possible outcomes are:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.

// Our code will break the game into four parts:

// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

// LEts begin!!!


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    }
    console.log(`ERROR!!! ${userInput} wrong input use ONE of these ('rock', 'paper', 'scissors')!!!`);
}

// getUserChoice('rock');
// getUserChoice('rockpaperscissors');

const getComputerChoice = _ => {
    const pcChoice = Math.floor(Math.random() * 3);
    
    // console.log(pcChoice);
    
    if (pcChoice === 0) {
        return 'rock';
    }
    else if (pcChoice === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    
    // Checking Tie
    if (userChoice === computerChoice) {
        return "It's a TIE!!!";
    }

    // EXTRA CHEATCODE 
    if (userChoice === 'bomb') {
        return 'User Wins!!!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Wins!!!';
        }
        return 'User Wins!!!';
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer Wins!!!';
        }
        return 'User Wins!!!';
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer Wins!!!';
        }
        return 'User Wins!!!';
    }
}

const playGame = _ => {
    const userChoice  = getUserChoice('paper');
    const computerChoice = getComputerChoice();

    console.log(userChoice, computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();