//  Primitive - 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Reference (Non-Primitive) - Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// string > string
// number > number
// boolean > boolean
// undefined > undefined
// symbol > symbol 
// bigint > bigint
// object && array && null > object
// functoin > function


/* 
    STACK [primitive type]
        > copy of the variable
    HEAP [non-primitive type] 
        > reference (change the original)
*/

// STACK Example
let youtubeName = "youtubeNameOne"
let anotherYtName = youtubeName

anotherYtName = "youtubeNameTwo"

console.log(youtubeName); // youtubeNameOne
console.log(anotherYtName); // youtubeNameTwo

// HEAP Example
const userOne = {
    name: 'nameOne',
    age: '24'
}

const userTwo = userOne
userTwo.age = 27

console.log(userOne.age); // 27 change the original value of userOne.age
console.log(userTwo.age); // 27