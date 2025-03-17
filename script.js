// Variables to track game rounds and scores
const update = {
    user: 0,
    computer: 0,
    roundsPlayed: 0
};


// Function to play the game
function playGame(userChoice) {
    if (update.roundsPlayed >= 5) {
        alert("Game over! Refresh the page to play again.");
        return;
    }

   

    // Getting computer input
    let computerChoice = Math.floor(Math.random() * 3);
    let computerMove = "";

    // Relating numbers to Rock, Paper, Scissors
    if (computerChoice === 0) {
        computerMove = "rock";
    } else if (computerChoice === 1) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }

    alert(`Computer chose: ${computerMove}`);
    alert(`You chose: ${userChoice}`);

    // Determine the round winner
    if (userChoice === computerMove) {
        alert("It's a tie!");
    } else if (
        (userChoice === "paper" && computerMove === "rock") ||
        (userChoice === "scissors" && computerMove === "paper") ||
        (userChoice === "rock" && computerMove === "scissors")
    ) {
        alert("You win this round!");
        update.user++; // Fix: Increment correct property
    } else {
        alert("You lose this round!");
        update.computer++; // Fix: Increment correct property
    }

    update.roundsPlayed++; // Fix: Update roundsPlayed correctly

    // Display current score
    alert(`Round ${update.roundsPlayed}/5 \nYour Score: ${update.user} \nComputer Score: ${update.computer}`);

    // Check if the game is over
    if (update.roundsPlayed === 5) {
        if (update.user > update.computer) {
            alert("Congratulations! You won the game! 🎉");
        } else if (update.computer > update.user) {
            alert("You lost the game! Better luck next time. 😞");
        } else {
            alert("It's a tie game! 😮");
        }
        alert("Game Over! Refresh the page to play again.");
    }
}
