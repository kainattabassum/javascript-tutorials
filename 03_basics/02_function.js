function calculateCartPrice(val1, val2, ...values) {
  return values;
}
// console.log(calculateCartPrice(10, 20, 30, 40, 50)); // [30, 40, 50]

const user = {
  username: "Kainat",
  price: 199,
};
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// handleObject(user); // Username is Kainat and price is 199
// handleObject({ username: "functionUser", price: 99 }); // Username is functionUser and price is 99

const myNewArray = [10, 20, 30, 40, 50];
function returnSecondVal(getArray) {
  return getArray[1];
}

console.log(returnSecondVal(myNewArray)); // 20
console.log(returnSecondVal([1, 2, 3, 4])); // 2
