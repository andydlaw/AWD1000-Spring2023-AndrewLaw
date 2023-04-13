"use strict";
$(document).ready(() => {



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
            const playerOptions = [rockBtn, paperBtn, scissorBtn];
            const computerOptions = ['rock', 'paper', 'scissors']

            // Function to start playing game
            playerOptions.forEach(option => {
                option.addEventListener('click', function () {

                    const movesLeft = document.querySelector('.movesleft');
                    moves++;
                    movesLeft.innerText = `Moves Left: ${3 - moves}`;


                    const choiceNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOptions[choiceNumber];

                    // Function to check who wins
                    winner(this.innerText, computerChoice)

                    // Calling gameOver function after 3 moves
                    if (moves == 3) {
                        gameOver(playerOptions, movesLeft);
                    }
                })
            })

        }

        function displayImage(src, width, height) {
            var img = document.createElement("img");
            img.src = src;
            img.width = width;
            img.height = height;

            document.querySelector('.resultIMG').append(img);


        }


        var delay = (function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();


        // Function to decide winner
        const winner = (player, computer, tie) => {
            const result = document.querySelector('.result');
            const resultIMG = document.querySelector('.resultIMG');
            const playerScoreBoard = document.querySelector('.p-count');
            const computerScoreBoard = document.querySelector('.c-count');
            const tieScoreBoard = document.querySelector('.t-count');
            player = player.toLowerCase();
            computer = computer.toLowerCase();




            if (player === computer) {
                result.textContent = 'Tie!';
                tieScore++;
                tieScoreBoard.textContent = tieScore
            }
            else if (player == 'rock') {
                if (computer == 'paper') {
                    result.textContent = 'You won with...';

                    resultIMG.textContent = '';
                    displayImage('images/rock.png', 250, 250);

                    playerScore++;
                    playerScoreBoard.textContent = playerScore;







                } else {
                    result.textContent = 'Computer won with...';
                    resultIMG.textContent = '';
                    displayImage('images/scissors.png', 250, 250);

                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                }
            }
            else if (player == 'scissors') {
                if (computer == 'rock') {
                    result.textContent = 'You won with...';

                    resultIMG.textContent = '';
                    displayImage('images/scissors.png', 250, 250);

                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                } else {
                    result.textContent = 'Computer won with...';
                    resultIMG.textContent = '';
                    displayImage('images/paper.png', 250, 250);

                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                }
            }
            else if (player == 'paper') {
                if (computer == 'scissors') {
                    result.textContent = 'Player won with...';
                    resultIMG.textContent = '';
                    displayImage('images/paper.png', 250, 250);

                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                } else {
                    result.textContent = 'Computer won with...';
                    resultIMG.textContent = '';
                    displayImage('images/rock.png', 250, 250);

                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                }
            }
        }

        // Function to run when game is over
        const gameOver = (playerOptions, movesLeft) => {

            const chooseMove = document.querySelector('.move');
            const result = document.querySelector('.result');
            const reloadBtn = document.querySelector('.reload');


            const resultIMG = document.querySelector('.resultIMG');
            const playerScoreBoard = document.querySelector('.p-count');
            const computerScoreBoard = document.querySelector('.c-count');
            const tieScoreBoard = document.querySelector('.t-count');

            playerOptions.forEach(option => {
                option.style.display = 'none';
            })


            chooseMove.innerText = 'Game Over!!'
            movesLeft.style.display = 'none';

            if (playerScore > computerScore) {
                result.style.fontSize = '2rem';
                result.innerText = 'You Won The Game'
                result.style.color = '#308D46';
            }
            else if (playerScore < computerScore) {
                result.style.fontSize = '2rem';
                result.innerText = 'You Lost The Game';
                result.style.color = 'red';
            }
            else {
                result.style.fontSize = '2rem';
                result.innerText = 'Tie';
                result.style.color = 'grey'
            }


            delay(function () {
                result.textContent = "";
                resultIMG.textContent = "";
                playerScoreBoard.textContent = "0";
                computerScoreBoard.textContent = "0";
                tieScoreBoard.textContent = "0";
                chooseMove.innerText = '';

                reloadBtn.innerText = 'Play Again';
                reloadBtn.style.display = 'flex'
                reloadBtn.addEventListener('click', () => {
                    window.location.reload();

                })  // do stuff
            }, 5000); // end delay

            /*
    
    
            */
        }


        // Calling playGame function inside game
        playGame();

    }

    // Calling the game function
    game();

});