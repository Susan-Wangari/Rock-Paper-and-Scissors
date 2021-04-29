//the rock breaks scissors, the scissors cut paper and the paper covers the rock
const getUserChoice = userInput =>  {
    userInput.toLowerCase(); // user input in lowercase to ensure uniformity
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') { //user choices
        return userInput;
    } else {
        return'You should pick between rock, paper and scissors'; //error message
    };
};
// getUserChoice('wood');
const getComputerChoice = () => { //the number chosen by the computer
   const randomNumber = Math.floor(Math.random() * 3);
   switch(randomNumber) {
       case 0:
           return 'rock';
           break;
       case 1:
            return 'paper';
            break;
       case 2:
            return 'scissors';
            break;
   }
}
// console.log(getComputerChoice()); logging the computers choice

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb') {
        return 'The user won';
    };

    if(userChoice === computerChoice) {
        return 'The game was a tie!';
    };

    if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'The user won';
        }
    };

    if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'The user won!';
        }
    };

    if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'The user won!'; 
        }
    };
};
//  console.log(determineWinner('paper', 'rock')); testing the winner
//this starts the game 
const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();

    console.log(determineWinner(userChoice, computerChoice));
//     console.log(userChoice);
//     console.log(computerChoice);
};
playGame(); //starting the game