console.log('Working');

function getComputerChoice() {
    let randomNum = Math.round(Math.random() * 2);
    switch (randomNum) {
        case 0:
            if (randomNum === 0) {
                return 'Rock'
            }
            break;
        case 1:
            if (randomNum === 1) {
                return 'Paper';

            }
            break;
        case 2:
            if (randomNum === 2) {
                return 'Scissors';
            }
            break;
    }
}

function getHumanChoice() {
    let humanInput = prompt("Rock Paper Scissors ???");
    let inputFirstPart = humanInput.slice(0, 1).toUpperCase();
    let inputSecondPart = humanInput.slice(1).toLowerCase();
    humanInput = inputFirstPart.concat(inputSecondPart);
    return humanInput;
}
console.log(getHumanChoice())







function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`it's a Draw!`);
        } else if ((humanChoice === 'Rock') && (computerChoice === 'Scissors')) {
            console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else if ((humanChoice === 'Scissors') && (computerChoice === 'Paper')) {
            console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else if ((humanChoice === 'Paper') && (computerChoice === 'Rock')) {
            console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else if ((computerChoice === 'Rock') && (humanChoice === 'Scissors')) {
            console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else if ((computerChoice === 'Scissors') && (humanChoice === 'Paper')) {
            console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else if ((computerChoice === 'Paper') && (humanChoice === 'Rock')) {
            console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }


    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore};`)
    if (humanScore > computerScore) {
        console.log('You Win!')
    } else {
        console.log('You Lose!')
    }
}

playGame();