const score = 400;
// console.log(score); // 400

const balance = new Number(100);
// console.log(typeof balance); // Object
// console.log(balance); // 100
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // Object
// console.log(Math.abs(-4)); // absolute value convert negative into positive

// console.log(Math.round(4.3768)); // greater then 4.4 round 4.5 > 5
// console.log(Math.ceil(4.2)); // upper value will convert into 4.1 > 5
// console.log(Math.floor(4.999)); // before dot

// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// console.log(Math.random()); //  values b/w 0 to 1
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min * 1)) + min);
