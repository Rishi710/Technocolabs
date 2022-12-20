const getUserChoice= userInput=>{
    userInput = userInput.toLowerCase();

if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
}else{
    console.log('ERROR!');
}
}

function getComputerChoice(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

function determineWinner(userChoice,computerChoice){
    if(userChoice === computerChoice){
        return 'This game is a tie!';
}
 if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
        return 'sorry, computer won!';
    }else{
    return "congratulations, you won!";
    }
 }

if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
        return 'sorry, computer won!';
    }else{
        return "congratulations, you won!";
    }
}

if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
        return "sorry, computer won!";
    }else{
        return "congratulations, you won!";
    }
}
}
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'rock'));