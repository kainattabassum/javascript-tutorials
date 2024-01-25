let myname = "kainat"
let namechange = "kainat      "

// console.log(namechange.length);

let myHero = ['thor', 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spidername power is ${this.spiderman}`)
    }
}

Object.prototype.myName = function () {
    console.log("name is present in all objects");
}

Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says hello`);
}

// myHero.myName()
// heroPower.myName()
// heroPower.heyHitesh() // TypeError: heroPower.heyHitesh is not a function


// Inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// ++++++++++++++ modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea       ".trueLength()