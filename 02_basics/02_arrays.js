const marvelHeros = ["thor", "Ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros); // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvelHeros[3][2]); // batman

const allHeroStack = marvelHeros.concat(dcHeros);
// console.log(allHeroStack); 
// ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Spread Operator
const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros); 
// ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const arrStack0 = [1, 2, 3, 4, [5, 6, 7], 8, [4, 9, [4, 6]], 3];
const arrStack1 = arrStack0.flat(Infinity); //flat [spread out all array]
// console.log(arrStack1); // [1, 2, 3, 4, 5, 6, 7, 8, 4, 9, 4, 6, 3]

// console.log(Array.isArray("kainat")); // false
// console.log(Array.from("kainat")); // convert into array [ 'k', 'a', 'i', 'n', 'a', 't' ]
// console.log(Array.from({ name: "kainat", age: 27 })); // interesting -> []

let score0 = 100;
let score1 = 200;
let score2 = 300;
console.log(Array.of(score0, score1, score2)); // [100, 200, 300]
