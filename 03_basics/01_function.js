function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}
// sayMyName // fucntion reference
// sayMyName() // fucntion rexecution

// function addTwoNumbers(num1, num2){
//      console.log(num1 + num2)
// }
addTwoNumbers(4, 8); // 12
addTwoNumbers(4, "8"); // 48
addTwoNumbers(4, "a"); // 4a
addTwoNumbers(4, null); // 4

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
  // return num1 + num2
  console.log("name"); // unreachable code [ not execute after return ]
}
const result = addTwoNumbers(4, 5);
// console.log("Result: ", result); // 9 | without function return > Result: undefined

function loginUserMessage(username = "anonymus") {
  if (!username) {
    console.log("Please enter a username");
    return; // if this execute -> below code will not be execute.
  }
  return `${username} just logged in!`;
}

console.log(loginUserMessage("kainat"));
console.log(loginUserMessage());
