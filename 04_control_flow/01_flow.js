// >, <, <=, >=, ==, !=, ===, !==
if (2 == "2") {
  console.log("execute");
}

const temperature = 60;
if (temperature < 50) {
  console.log("less than 50");
} else {
  console.log("greater then 50"); // greater then 50
}

const score = 100;
if (score >= 100) {
  const power = "fly";
  console.log(`user power: ${power}`); // user power: fly
}

const balance = 1000;
// if(balance > 500) console.log("test"), console.log("test2") // unreadable
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 750");
} else {
  console.log("less than 1200"); // less then 1200
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course"); // not executable with && logical operator
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in"); // User logged in
}
