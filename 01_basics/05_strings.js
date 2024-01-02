const name = "usernameOne";
const repoCount = 3;
// console.log(`my name is ${name} and repo count is ${repoCount}.`); // my name is usernameOne and repo count is 3.

const gameName = new String("username-one");
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.__proto__);
// console.log(typeof gameName); // Object

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(4, 9); // cannot use negative value
// console.log(newString);

const slicedString = gameName.slice(-8, 8); // negative value -> rever order
// console.log(slicedString);

const spacedText = "            user        ";
// console.log(spacedText);
// console.log(spacedText.trim()); // whitespace and line terminators

const url = "https://url.com/some%20thing";
// console.log(url); // https://url.com/some%20thing
// console.log(url.replace("%20", "-")); // https://url.com/some-thing
// console.log(url.includes("some")); // boolean value -> true

console.log(gameName.split("-")); // [ 'username', 'one' ]
