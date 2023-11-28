const user = {
  username: "kainat",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user detail from DB.");
    // this > current contaxt
    console.log(this);
    // console.log(`username: ${this.username}`);
  },
};
// console.log(user.username);
// console.log(user.getUserDetails());

// ++++++++++++++++++++ CONSTRUCTOR function > create new instance
function User(username, loginCount, isLoggegIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggegIn = isLoggegIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; // implicity define
}

const userOne = new User("kainat", 12, true);
const userTwo = new User("kainat786", 2, false); // Override UserOne values before writting "new" keyword
console.log(userOne);
console.log(userTwo.constructor);
