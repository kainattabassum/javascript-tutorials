function calculateCartPrice(val1, val2, ...val) {
  return val;
}

// console.log(calculateCartPrice(10, 20, 30, 40, 50));

const user = {
  username: "Kainat",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// handleObject(user);
// handleObject({ username: "functionUser", price: 99 });

const myNewArray = [10, 20, 30, 40, 50];
function returnSecondVal(arr) {
  return arr[1];
}

console.log(returnSecondVal(myNewArray));
console.log(returnSecondVal([1, 2, 3, 4]));
