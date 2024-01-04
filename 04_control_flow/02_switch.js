// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

// if not added break except last case all case will be execute
const month = "march";
switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march"); // march
    break;
  case "april":
    console.log("april");
    break;
  default:
    console.log("default case match");
    break;
}
