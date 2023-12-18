let score = null;
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // false

// 1 => true; 0 => false
// "" => false
// "kainat" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber); // string

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 3 power of 2
// console.log(2/3);
// console.log(2%3);

let str1 = "hellow";
let str2 = " kai";
let str3 = str1 + str2;
// console.log(str3); // hellow kai

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3); // 2

// console.log(+true); // not - 1
// console.log(+""); // not - 2

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
// console.table([num1, num2, num3]) // 4 all

let gameCounter = 100;
++gameCounter;

console.log(`game-counter: ${gameCounter}`); // 101

let postIncrementVal = gameCounter++;
console.log(`post-increment: ${postIncrementVal}`); // 101

console.log(`game-counter: ${gameCounter}`); // gameCounter = 102

let preIncrementVal = ++gameCounter;
console.log(`pre-increment: ${preIncrementVal}`); // 103

console.log(`game-counter: ${gameCounter}`); // 103

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
