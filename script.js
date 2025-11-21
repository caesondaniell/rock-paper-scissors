function getComputerChoice() {
    let choice = getRandomInt();
    if (choice === 2) {
        choice = "paper";
    } else if (choice === 1) {
        choice = "rock";
    }
    else choice = "scissors";
    return choice;
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function playGame(humanChoice, computerChoice) {
    const gameText = game.lastElementChild;
    if (humanChoice === computerChoice) {
        gameText.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}. It's a tie! No points.`;
    } else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "scissors"
    ) {
        gameText.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}. You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
        cScore.textContent = computerScore;
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        gameText.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}. You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
        hScore.textContent = humanScore;
    }
    if (humanScore === 5 || computerScore === 5) {
        end.firstElementChild.textContent = humanScore > computerScore ?
        `Game Over! Computer Score: ${computerScore} | Player Score: ${humanScore} You win! Congratulations!` :
        `Game Over! Computer Score: ${computerScore} | Player Score: ${humanScore} You lose! Better luck next time.`;
        end.classList.toggle("hidden");
        game.classList.toggle("hidden");
        hScore.textContent = 0;
        cScore.textContent = 0;
    }
}

const top = document.querySelector(".top");
const game = document.querySelector(".gameContent");
const end = document.querySelector(".endMessage");
const btns = document.querySelectorAll("button");
const hScore = document.querySelector(".hScore");
const cScore = document.querySelector(".cScore");
let humanScore = 0;
let computerScore = 0;
console.log(btns);
btns.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.textContent) {
            case "START THE GAME":
                top.classList.toggle("hidden");
                game.classList.toggle("hidden");
                break;
            case "ROCK":
                playGame(button.textContent.toLowerCase(), getComputerChoice());
                break;
            case "PAPER":
                playGame(button.textContent.toLowerCase(), getComputerChoice());
                break;
            case "SCISSORS":
                playGame(button.textContent.toLowerCase(), getComputerChoice());
                break;
            case "RESET":
                top.classList.toggle("hidden");
                end.classList.toggle("hidden");
                break;
        }
    })
})