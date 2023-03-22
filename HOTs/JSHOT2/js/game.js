// app.js
  
// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    let moves = 0;
  
  
    // Function to 
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
          
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
  
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${9-moves}`;
                  
  
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
  
                // Function to check who wins
                winner(this.innerText,computerChoice)
                  
                // Calling gameOver function after 9 moves
                if(moves == 9){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
          
    }
  
    // Function to decide winner
    const winner = (player,computer, tie) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        const tieScoreBoard = document.querySelector('.t-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie! Player and Computer chose ' + player.toUpperCase() + '!';
            tieScore++;
            tieScoreBoard.textContent = tieScore
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Player Won! Rock burns down Paper!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
  
            }else{
                result.textContent = 'Computer Won! Scissor hammers down Rock!'
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Player Won! Scissors hammer down Rock!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Computer Won! Paper files down Scissors!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Player Won! Paper files down Scissors!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Computer Won! Rock burns down Paper!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
    }
  
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
  
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
  
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
  
       
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
  
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Play Again';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
  
  
    // Calling playGame function inside game
    playGame();
      
}
  
// Calling the game function
game();