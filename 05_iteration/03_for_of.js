// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  // console.log(val);
}

const greeting = "Hello world!";
for (const greet of greeting) {
  // console.log(greet);
}

// MAP
const mapping = new Map();
mapping.set("PAK", "Pakistan");
mapping.set("IN", "India");
mapping.set("USA", "United State of America");
mapping.set("FR", "France");
mapping.set("IN", "India"); // Unique Value > ignored
// console.log(mapping);
for (const [key, value] of mapping) {
  //  console.log(`${key} - ${value}`);
}

const myObject = {
  game1: "NFS",
  game2: "CODE",
  game3: "PUBG",
};
for (const [key, value] of myObject) {
  console.log(`${key} - ${value}`); // ERROR > not iterable
}
