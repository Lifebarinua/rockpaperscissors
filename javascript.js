console.log("Hello World");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let validChoices = ["rock", "paper", "scissors"];
    let userInput = prompt("Enter your choice: rock, paper, or scissors");

    if (userInput) {
        userInput = userInput.toLowerCase();
    }

    while (!userInput || !validChoices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:");
        if (userInput) {
            userInput = userInput.toLowerCase();
        }
    }
    return userInput;
}

// Global score variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Define the rules of the game
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++; // Increment human score for a win
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++; // Increment computer score for a loss
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame() {
    console.log("Starting the game...");
    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    console.log("\nGame Over!");
    console.log(`Player Total Score: ${humanScore}`);
    console.log(`Computer Total Score: ${computerScore}`);
    // Determine the winner
    if (humanScore > computerScore) {
        console.log("Player wins!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!");
    }
}

// Start the game
playGame();
