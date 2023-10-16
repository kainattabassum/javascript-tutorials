// const userInfo = new Object() // singleton 
const userInfo = {}
userInfo.id = "123xyz"
userInfo.name = "Sami"
userInfo.isLoggedIn = false
// console.log(userInfo);

const regularUser = {
    email: "username@gmail.com",
    usefullName: {
        firstname: "kainat",
        lastname: "tabassum"
    }
}

// console.log(regularUser.usefullName.lastname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2) // {} optional - target  
const obj3 = { ...obj1, ...obj2 }

// console.log(obj3);

const users = [
    {
        id: "6287628",
        email: "user1@gmail.com"
    },
    {
        id: "6287629",
        email: "user2@gmail.com"
    },
    {
        id: "6287692",
        email: "user3@gmail.com"
    },
    {
        id: "6287610",
        email: "user4@gmail.com"
    },
    {
        id: "6287687",
        email: "user5@gmail.com"
    },
]
// console.log(users[1].email);

// console.log(userInfo);
// console.log(Object.keys(userInfo));
// console.log(Object.values(userInfo));
// console.log(Object.entries(userInfo));

// console.log(userInfo.hasOwnProperty('isLoggedIn'));
// console.log(userInfo.hasOwnProperty('isLoggedOut'));