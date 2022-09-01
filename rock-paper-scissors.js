function playerMove() {
    let playerInput = window.prompt('Type Rock, Paper or Scissors');
    let playerSelection = playerInput.toLowerCase(); // Converting the input all to lower cases
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1); // Converting only the first letter to upper case
    while (['Rock', 'Paper', 'Scissors'].indexOf(playerSelection) === -1) {
        playerInput = window.prompt('You made a mistake. Be sure you type Rock, Paper or Scissors correctly');
        playerSelection = playerInput.toLowerCase(); // Converting the input all to lower cases
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1); // Converting only the first letter to upper case
    };
    
    return playerSelection;
};

function computerMove() {
    let computerSelection = '';
    let number = Math.floor(Math.random()*3);
    switch (number) {
        case 0:
            computerSelection = 'Rock';
            return computerSelection;
            
        case 1:
            computerSelection = 'Paper';
            return computerSelection;
        
        case 2:
            computerSelection = 'Scissors';
            return computerSelection;           
    };
};

function playRound(playerSelection, computerSelection, i) {
    if(playerSelection === computerSelection) {
        console.log(`
            ============================ Round ${i+1} =============================

            Tie! ${playerSelection} ties with ${computerSelection}

            ==================================================================
        `)
    } else if (
        playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper'
    ) {
        playerWins++;
        console.log(`
            ============================ Round ${i+1} =============================

            You Win! ${playerSelection} beats ${computerSelection}

            ==================================================================
        `)
    } else {
        computerWins++;
        console.log(`
            ============================ Round ${i+1} =============================

            You Lose! ${computerSelection} beats ${playerSelection}

            ==================================================================
        `);
    };
};

let playerWins = 0;
let computerWins = 0;

for(let i = 0; i < 5; i++) {
    playerSelection = playerMove();
    computerSelection = computerMove();
    playRound(playerSelection, computerSelection, i);
};

console.log(`
            ==================================================================

            The player won ${playerWins} times and the computer won ${computerWins} times
            
            ==================================================================
            
`);

if(playerWins > computerWins) {
    console.log(`
            ==================================================================

            Congratulations! You beat the computer
            To play again, please, reload the page

            ==================================================================
    `)
} else {
    console.log(`
            ==================================================================

            That's too bad! But don't be sad and try again!
            To play again, please, reload the page

            ==================================================================
    `)
};