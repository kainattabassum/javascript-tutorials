const accountId = 456524;
let accountEmail = "kainat.tabasum001@gmail.com";
var accountPassword = "123456";
accountCity = "Lahore";
let accountState; // undefined

// accountId = 287 // NOT ALLOWED
accountEmail = "changes@gmail.com";
accountPassword = "565678";
accountCity = "Karachi";

/*
  multi line comment 
  prefer not to use var > issue in block scope and function
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
