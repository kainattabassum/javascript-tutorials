// Shallow Copy in Array (share the same Reference point)

const myArr = [0, 1, 2, 3, 4, 5, 3];
const myHeros = ["string1", "string2"]
// console.log(myArr[1]);

const myArr2 = new Array(1, 2, 3, 4)

// ++++++++++++++++++++++++ Array Methods
myArr.push(7)
myArr.pop()
myArr.unshift(9)
myArr.shift()

// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // convert array into string
// console.log(myArr);
// console.log(newArr);

// ++++++++++++++++++++++++ slice, splice[change the original array]
console.log("A ", myArr);
 
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

console.log(myArr);