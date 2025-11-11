// console.log("Hello World!");

function getComputerChoice() {
    let choice = getRandomInt(3);
    if (choice === 2) {
        choice = "paper";
    } else if (choice === 1) {
        choice = "rock";
    }
    else choice = "scissors";
    console.log(`Computer chooses ${choice}!`);
    return choice;
}

function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

function getHumanChoice() {
    let pick = prompt("rock, paper, or scissors?");
    if (!(pick.toLowerCase() === "rock" ||
        pick.toLowerCase() === "paper" ||
        pick.toLowerCase() === "scissors"
    )) {
        console.log("You must enter 'paper' 'scissors' or 'rock'!");
        return 0
    } else {
        console.log(`Player chooses ${pick.toLowerCase()}!`);
        return pick.toLowerCase();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (!humanChoice) {
            console.log("Computer wins by default.");
            computerScore++;
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie! No points.");
        } else if (
            humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "scissors" && computerChoice === "rock" ||
            humanChoice === "paper" && computerChoice === "scissors"
        ) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        } else if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } 
        console.log(`Human ${humanScore} | Computer ${computerScore}`);
    }

    for (let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You win the game! Congratulations!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game. Better luck next time!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();