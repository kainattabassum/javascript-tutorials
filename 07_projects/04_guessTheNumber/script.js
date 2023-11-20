let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(parseInt(Math.random() * 100 + 1));

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHighValue = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numberOfGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const userGuess = parseInt(userInput.value);
    // console.log(userGuess);
    validateGuess(userGuess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number!");
  } else if (guess < 1) {
    alert("Please enter a valid number!");
  } else if (guess > 100) {
    alert("Please enter a valid number!");
  } else {
    prevGuess.push(guess);
    if (numberOfGuesses === 10) {
      cleanUpGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}.`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guested it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}
function cleanUpGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  remaining.innerHTML = `${10 - numberOfGuesses}`;
  numberOfGuesses++;
}
function displayMessage(message) {
  lowOrHighValue.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (event) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numberOfGuesses = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numberOfGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    displayMessage("");
    playGame = true;
  });
}
