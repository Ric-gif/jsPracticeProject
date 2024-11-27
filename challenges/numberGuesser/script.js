
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates random Target number between 0 and 9
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const rand = getRandomInt(0, 10);

const generateTarget = _ => {
    return rand;
}

// Compares both user and computer and determines which is closer to the target using Math.abs()
const compareGuesses = (user, computer, target) => {
    if (Math.abs(user - target) > Math.abs(computer - target)) {
        return false;
    }
    if (Math.abs(user - target) < Math.abs(computer - target)) {
        return true;
    }
    return true;
}

// console.log(compareGuesses(9, 12, 10));

// Updates score based on return
const updateScore = input => {
    switch (input.toLowerCase()) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        default:
            break;
    }
}

const advanceRound = _ => {
    currentRoundNumber++;
}