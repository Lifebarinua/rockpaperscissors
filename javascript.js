function getComputerChoice() {
  const computerChoice = [`Rock`, `Paper`, `Scissors`];
  const randomChoice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomChoice].toLowerCase();
}

function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  let humanChoice;
  do {
    humanChoice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    if (!validChoices.includes(humanChoice)) {
      alert(`humanChoice()`); // Recursively prompt again for a valid choice
    }
  }while (!validChoices.includes(humanChoice));

  return humanChoice;
  }


let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  console.log(`Human choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);


  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win this round!");
    humanScore++;
  }
  else {
    console.log("Computer wins!")
    computerScore++;

  }
}

// Function to play the entire game
function playGame() {
  console.log("Starting the game...");

  for (let round = 1; round <= 5; round++) {
    console.log(`\nRound ${round}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("\nGame Over!");
  console.log(`Final Scores:\nHuman: ${humanScore}\nComputer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  }
  else if (humanScore < computerScore) {
    console.log("Computer wins the game. Better luck next time!");
  }
  else {
    console.log("It's a draw! What a close game!");
  }
}
// Start the game
playGame();