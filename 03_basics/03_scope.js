// let > Identifier 'c > variable-name' has already been declared but var override

var c = 300;
let a = 300; // global-scope

// block-scope {}
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER a value:", a);
}
// console.log(a);
// console.log(c);

function one() {
  const username = "kainat";

  function two() {
    const website = "youtube";
    // console.log(username + "-" + website);
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
  // console.log(website); // ReferenceError: website is not defined
}

// console.log(username); // ReferenceError: username is not defined

// ++++++++++++++++++ INTERESTING ++++++++++++++++++
console.log(addOne(10)); // run
function addOne(num) {
  return num + 1;
}
console.log(addOne(3));

// console.log(addTwo(4)); // ReferenceError: Cannot access 'addTwo' before initialization {Hoisting}
// function expression -> const variableName = function() {}
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(4));
