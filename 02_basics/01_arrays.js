// Shallow Copy in Array (share the same Reference point)
const myArr = [0, 1, 2, 3, 4, 5, 3];
const myHeros = ["string1", "string2"];
// console.log(myArr[1]); // 1

const myArr2 = new Array(1, 2, 3, 4);
myArr.push(7);
myArr.pop();
myArr.unshift(9);
myArr.shift();
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 3]
// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join(); // convert array into string
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 3]
// console.log(newArr); // 0.1,2,3,4,5,3

// ++++++++++++++++++++++++ slice, splice

console.log("A: ", myArr); // A: [0, 1, 2, 3, 4, 5, 3]

const myn1 = myArr.slice(1, 3);
console.log("B: ", myArr); // B: [0, 1, 2, 3, 4, 5, 3]
console.log("Sliced Array: ", myn1); // Sliced Array: [1, 2]

// splice[change the original array]
const myn2 = myArr.splice(1, 3);
console.log("C: ", myArr); // C: [0, 4, 5, 3]
console.log("Spliced Array: ", myn2); // Spliced Array: [1, 2, 3]

console.log("D: ", myArr); // D: [0, 4, 5, 3]
