

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function getHumanChoice() {
    let humanInput = prompt("Rock Paper Scissors ???").toLowerCase();
    return humanInput.charAt(0).toUpperCase() + humanInput.slice(1);
}



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