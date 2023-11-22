const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());

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
