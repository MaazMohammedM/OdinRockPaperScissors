

let rockBtn = document.querySelector('#rockBtn');
let paperBtn = document.querySelector('#paperBtn');
let scissorBtn = document.querySelector('#scissorBtn');
let compScoreElem = document.querySelector('#compScore');
let humanScoreElem = document.querySelector('#yourScore');
let ComputerSelection = document.querySelector('#ComputerSelection');
let humanSelection = document.querySelector('#yourSelection');
let result = document.querySelector('#result');
let compScore = 0;
let humanScore = 0;
compScoreElem.innerText = compScore;
humanScoreElem.innerText = humanScore;




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

function playGame(e) {


    let humanChoice = e.target.textContent;
    let computerChoice = getComputerChoice();

    ComputerSelection.innerText = computerChoice;
    humanSelection.innerText = humanChoice;

    result.style.padding = '1em';


    if (humanChoice === computerChoice) {
        console.log(`it's a Draw!`);
        result.innerText = `it's a Draw!`;
    } else if ((humanChoice === 'Rock') && (computerChoice === 'Scissors')) {
        humanScore++;
        result.innerText = `You Win!, ${humanChoice} beats ${computerChoice}`
        console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
        console.log(humanScore, compScore)

    } else if ((humanChoice === 'Scissors') && (computerChoice === 'Paper')) {
        humanScore++;
        result.innerText = `You Win!, ${humanChoice} beats ${computerChoice}`
        console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
        console.log(humanScore, compScore)

    } else if ((humanChoice === 'Paper') && (computerChoice === 'Rock')) {
        humanScore++;
        result.innerText = `You Win!, ${humanChoice} beats ${computerChoice}`;
        console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
        console.log(humanScore, compScore);

    } else if ((computerChoice === 'Rock') && (humanChoice === 'Scissors')) {
        compScore++;
        result.innerText = `You Lose!, ${computerChoice} beats ${humanChoice}`;
        console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
        console.log(humanScore, compScore);

    } else if ((computerChoice === 'Scissors') && (humanChoice === 'Paper')) {
        compScore++;
        result.innerText = `You Lose!, ${computerChoice} beats ${humanChoice}`;
        console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
        console.log(humanScore, compScore);

    } else if ((computerChoice === 'Paper') && (humanChoice === 'Rock')) {
        compScore++;
        result.innerText = `You Lose!, ${computerChoice} beats ${humanChoice}`;
        console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
        console.log(humanScore, compScore);
    }
    compScoreElem.innerText = compScore;
    humanScoreElem.innerText = humanScore;


    if (compScore >= 5 || humanScore >= 5) {
        result.innerText = `Game Over the winner is ${humanScore > 5 ? 'You' : 'Computer'}`;
        compScore = 0;
        humanScore = 0;
        compScoreElem.innerText = compScore;
        humanScoreElem.innerText = humanScore;
        ComputerSelection.innerText = '';
        humanSelection.innerText = '';
    }


}













rockBtn.addEventListener('click', playGame);
paperBtn.addEventListener('click', playGame);
scissorBtn.addEventListener('click', playGame);
