// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);
/* {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
} */

// console.log(Math.PI); // can't override
// Math.PI = 6
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,

    // with enumerable false value 
   /*  price : 250
    isAvailable : true */
    
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}