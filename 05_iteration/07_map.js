const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myNumbers);
// myNumbers.map((num) => console.log(num + 10));

const newNums = myNumbers
  .map((num) => (num * 10) + 1)
  .filter((num) => num >= 40 && num < 100); // chaining
console.log(newNums);
