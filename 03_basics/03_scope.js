// let > Identifier 'c > variable-name' has already been declared but var override

// var c = 300
let a = 300; // global-scope

// block-scope {}
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER a value:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "kainat";

  function two() {
    const website = "youtube";
    // console.log(username);
  }
  // console.log(website); // ReferenceError: website is not defined
  two();
}
one();

if (true) {
  const username = "kainat";
  if (username === "kainat") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++
addOne(3); // run
function addOne(num) {
  return num + 1;
}
addOne(3);

addTwo(4); // ReferenceError: Cannot access 'addTwo' before initialization {Hoisting}

// function expression
const addTwo = function (num) {
  return num + 2;
};
addTwo(4);
