


// crEATING THE FUNCTION
function playGame(userChoice){

    // getting computer input
let computerChoice = Math.floor(Math.random()*3);
console.log(computerChoice);
// relate the numbers to rock sissors paper
let computerMove='';
if(computerChoice === 0){
    computerMove = "rock";
}else if(computerChoice === 1){
    computerMove ="paper";
}else{computerMove = "scissors"}


console.log(`computer chose: ${computerMove}`);
console.log(`You chose: ${userChoice}`);



    if (userChoice===computerMove){
        alert('Theres a tie');

    }
    // lets get the win
    else if( 
    (userChoice === 'paper' && computerMove === 'rock') ||
    (userChoice === 'scissors' && computerMove ==='paper') ||
    (userChoice === 'rock'&& computerMove === 'scissors') )
    
    {
        alert('you win');

    }else{
        alert('You lose!! Hard luck next time.');
    }
    
}
