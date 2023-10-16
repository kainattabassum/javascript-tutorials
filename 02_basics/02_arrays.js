const marvelHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

marvelHeros.push(dcHeros)
// console.log(marvelHeros[3][2]);

const allHeroStack = marvelHeros.concat(dcHeros)
// console.log(allHeroStack);

// Spread Operator
const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);

const arrStack0 = [1, 2, 3, 4, [5, 6, 7], 8, [4, 9, [4, 6]], 3]
const arrStack1 = arrStack0.flat(Infinity) //flat [spread out all array]
// console.log(arrStack1);

console.log(Array.isArray('kainat'));
console.log(Array.from('kainat')); // convert into array
console.log(Array.from({ name: 'kainat', age: 27 })); // interesting []

let score0 = 100
let score1 = 200
let score2 = 300
console.log(Array.of(score0, score1, score2));