console.log("Hello World")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice()); 

function getHumanChoice() {
    let validChoices = ["rock", "paper", "scissors"];
    let userInput = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    while (!validChoices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
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
// Main function to play 5 rounds and declare a winner
function playGame() {
    let playerTotalScore = 0;
    let computerTotalScore = 0;

    console.log("Starting the game...");

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        const { playerScore, computerScore } = playRound(round);
        playerTotalScore += playerScore;
        computerTotalScore += computerScore;
    }
    console.log("\nGame Over!");
    console.log(`Player Total Score: ${playerTotalScore}`);
    console.log(`Computer Total Score: ${computerTotalScore}`);

    // Determine the winner
    if (playerTotalScore > computerTotalScore) {
        console.log("Player wins!");
    } else if (computerTotalScore > playerTotalScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!");
    }
}

// Call the playGame function to start
playGame();


