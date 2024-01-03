// const userInfo = new Object() // singleton
const userInfo = {};
userInfo.id = "123xyz";
userInfo.name = "Sami";
userInfo.isLoggedIn = false;
// console.log(userInfo); // { id: '123xyz', name: 'Sami', isLoggedIn: false }

const regularUser = {
  email: "username@gmail.com",
  usefullName: {
    firstname: "kainat",
    lastname: "tabassum",
  },
};
// console.log(regularUser.usefullName.lastname); // tabassum

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = { obj1, obj2 } // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign({}, obj1, obj2) // {} optional - target -> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 = { ...obj1, ...obj2 }; // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj3);

const users = [
  {
    id: "6287628",
    email: "user1@gmail.com",
  },
  {
    id: "6287629",
    email: "user2@gmail.com",
  },
  {
    id: "6287692",
    email: "user3@gmail.com",
  },
  {
    id: "6287610",
    email: "user4@gmail.com",
  },
  {
    id: "6287687",
    email: "user5@gmail.com",
  },
];
// console.log(users[1].email); // user1@gmail.com

console.log(userInfo); // { id: '123xyz', name: 'Sami', isLoggedIn: false }
console.log(Object.keys(userInfo)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(userInfo)); // [ '123xyz', 'Sami', false ]
console.log(Object.entries(userInfo)); // [ [ 'id', '123xyz' ], [ 'name', 'Sami' ], [ 'isLoggedIn', false ] ]

console.log(userInfo.hasOwnProperty('isLoggedIn')); // true
console.log(userInfo.hasOwnProperty('isLoggedOut')); // false
