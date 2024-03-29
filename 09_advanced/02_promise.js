// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Q & bluebird library as Promise
// > Do as async task
// > DB calls, cryptography, network

// PromiseOne
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("PromiseOne consumed");
});

// PromiseTwo - in a single line
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("task 2 resolved");
});

// PromiseThree - can pass data in resolve
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      username: "chai",
      email: "chai@example.com",
    });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

// PromiseFour - reject
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "kainat",
      });
    } else {
      reject("ERROR: Something went wrong."); // ERROR: Something went wrong.
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("promise is either resolve or reject")); // promise is either resolve or reject

// PromiseFive - async & await with try{}catch(){}
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        username: "javascript",
        password: "12345",
      });
    } else {
      reject("ERROR: Promise 5 went wrong.");
    }
  }, 1000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response); // { username: 'javascript', password: '12345' }
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); // without await Promise[pending state]
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
