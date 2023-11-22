# Project Related JavaScript

## Project 01 - Change Background Color

### Solution:

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "grey":
        body.style.background = e.target.id;
        break;
      case "white":
        body.style.background = e.target.id;
        break;
      case "blue":
        body.style.background = e.target.id;
        break;
      case "yellow":
        body.style.background = e.target.id;
        break;
      default:
        body.style.background = "skyblue";
        break;
    }
  });
});
```

## Project 02 - BMI Calculator

### Solution:

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}.`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}.`;
  } else {
    const bmiFormula = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmiFormula < 18.6) {
      results.innerHTML = `<span>${bmiFormula}</span> (Under weight)`;
    } else if (bmiFormula >= 18.6 || bmiFormula <= 24.9) {
      results.innerHTML = `<span>${bmiFormula}</span> (Normal weight)`;
    } else {
      results.innerHTML = `<span>${bmiFormula}</span> (Over weight:)`;
    }
  }
});
```

## Project 03 - Digital Clock

### Solution:
``` javascript
const clock = document.querySelector("#clock")
setInterval(function() {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

## Project 04 - Guess The Numbers

### Solution:
``` javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

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

```

## Project 05 - 

### Solution:
``` javascript
const insert = document.getElementById("insert");
window.addEventListener("keydown", function (e) {
  insert.innerHTML = `<div class="color">
        <table>
            <tr>
                <th>key</th>
                <th>keyCode</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${e.key === " " ? "Space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    <div>`;
});
```

## Project 06 - Unlimited Background Color 

### Solution:
``` javascript
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
let intervalId;

const changeBodyColor = function () {
  document.body.style.background = randomColor();
};

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBodyColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

startButton.addEventListener("click", startChangingColor);
stopButton.addEventListener("click", stopChangingColor);
```