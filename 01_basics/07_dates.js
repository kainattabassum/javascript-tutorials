let myDate = new Date()

// console.log(myDate);
// console.log(typeof myDate); // Object
// console.log(`toString: ${myDate.toString()}`);
// console.log(`toDateString: ${myDate.toDateString()}`);
// console.log(`toISOString: ${myDate.toISOString()}`);
// console.log(`toLocaleDateString: ${myDate.toLocaleDateString()}`);
// console.log(`toLocaleString: ${myDate.toLocaleString()}`);
// console.log(`toLocaleTimeString: ${myDate.toLocaleTimeString()}`);
// console.log(`toTimeString: ${myDate.toTimeString()}`);
// console.log(`toUTCString: ${myDate.toUTCString()}`);

// let myCreatedDate = new Date(2023, 0, 22)
// let myCreatedDate = new Date(2023, 0, 22, 6, 3)
let myCreatedDate = new Date("2023-01-22")
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now()
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()
// console.log(newDate.getMonth() + 1);

newDate.toLocaleDateString("default", {
    weekday: "long"
})

console.log(newDate);