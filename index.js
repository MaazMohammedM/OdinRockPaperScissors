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

console.log(getComputerChoice())