const name = "usernameOne";
const repoCount = 3;

// string interpolation ``
// console.log(`my name is ${name} and repo count is ${repoCount}.`);

const gameName = new String("username-one");

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(typeof gameName); // Object

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

console.log();

const newString = gameName.substring(4, 9);
// console.log(newString);

const slicedString = gameName.slice(-8, 8);
// console.log(slicedString);

const spacedText = "            user        ";
// console.log(spacedText);
// console.log(spacedText.trim()); // whitespace and line terminators

const url = "https://url.com/some%20thing";
// console.log(url)
console.log(url.replace("%20", "-"));
// console.log(url.includes('some'))

// console.log(gameName.split('-'));
