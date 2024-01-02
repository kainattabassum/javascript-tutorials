// singleton - constructor [Object.create]

const mySymbol = Symbol("key1");
// Object literals is not singleton can create multiple instances
const user = {
  name: "Kainat",
  "full name": "Kainat Tabassum",
  [mySymbol]: "mykey1",
  age: 20,
  location: "Lahore",
  email: "kainat.tabassum001@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Thursday"],
};
// console.log(user.email);
// console.log(user["full name"]);
// console.log(user[mySymbol]);
// console.log(typeof user[mySymbol]);

user.email = "changed.mail@gmail.com";
// console.log(user);

// Object.freeze(user);
user.email = "microsoft.mail@hotmail.com";
// console.log(user);

user.greeting = function () {
  console.log(`Hello, user`);
};
user.greeting2 = function () {
  console.log(`Hello, ${this.name}`);
};
console.log(user.greeting());
console.log(user.greeting2());

console.log(user);
