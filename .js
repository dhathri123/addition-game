let firstNumberElement = document.getElementById('firstNumber');
let secondNumberElement = document.getElementById('secondNumber');
let userInputElement = document.getElementById('userInput');
let gameResultElement = document.getElementById('gameResult');

function restartGame() {
    let firstRandomNumber = Math.ceil(Math.random() * 100);
    let secondRandomNumber = Math.ceil(Math.random() * 100);
    firstNumberElement.textContent = firstRandomNumber;
    secondNumberElement.textContent = secondRandomNumber;
    gameResultElement.textContent = "";
    userInputElement.value = "";
}
restartGame();

function checkResult() {
    let isEquelTo = parseInt(firstNumberElement.textContent) + parseInt(secondNumberElement.textContent);
    let userInputNumber = parseInt(userInputElement.value);
    if (userInputNumber === "") {
        gameResultElement.textContent = "please Try Again";
        gameResultElement.style.backgroundColor = "#1e217c";
    } else if (userInputNumber === isEquelTo) {
        gameResultElement.textContent = "congratulations! you got it right";
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = "please Try Again";
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}
