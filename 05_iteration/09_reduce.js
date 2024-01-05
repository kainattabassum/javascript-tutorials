const myNums = [0, 1, 2, 3, 4];

// reduce((accumlator, currentVal) => {}, initialValue)
const initialValue = 0;
const myTotal = myNums.reduce((accumlator, currentVal) => {
  // console.log(`accumlator: ${accumlator} and current value: ${currentVal}`);
  return accumlator + currentVal;
}, initialValue);
// console.log(myTotal); // 10

const anotherWay = myNums.reduce((acc, cur) => acc + cur, 0);
// console.log(anotherWay); // 10

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalCost = shoppingCart.reduce(
  (accumlator, item) => accumlator + item.price,
  0
);
console.log(totalCost); // 22996
