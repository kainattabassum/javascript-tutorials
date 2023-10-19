const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // current context
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam" // change context
// user.welcomeMessage()

// console.log(this); // {} > Empty object in node env

function simpleFunction() {
  let username = "functionUsername";
  console.log(this.username); // undefined
}
// simpleFunction()

const functionExpression = function () {
  let username = "functionUsername2";
  console.log(this.username); // undefined
};
// functionExpression()

const arrowFunction = () => {
  let username = "functionUsername3";
  console.log(this.username); // undefined
  console.log(this);
};
// arrowFunction()

// +++++++++++++++++++++++ ARROW FUNCTION
const addTwoNumber = (num1, num2) => {
  return num1 + num2;  // explicit Return 
};

// implicit Return - with {} type return keyword but not with ()
const addTwoNumbers = (num1, num2) => num1 + num2;
const addTwoNum = (num1, num2) => ( num1 + num2 );
const returnObject = () => ({ name: "username" });

console.log(addTwoNumbers(4, 7));
console.log(returnObject());
