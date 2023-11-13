# Project Related JavaScript

## Project 01

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

## Project 02

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

## Project 02

### Solution:
``` javascript

```