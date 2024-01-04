// for loop
for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element == 5) {
    // console.log(`${index} is best number`);
  }
  // console.log(element);
}

for (let i = 1; i <= 5; i++) {
  console.log(`Outer Loop: ${i}`);
  for (let j = 1; j <= 5; j++) {
    // console.log(`j Inner Loop: ${j}, i Inner Loop: ${i}`);
    // console.log(`| ${i} | ${j} | ${i} - ${j} |`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

const myArr = ["flash", "batman", "superman"];
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  // console.log(element);
}

// ++++++++++++++++++ break and continue
for (let index = 1; index <= 5; index++) {
  if (index == 2) {
    // console.log(`Detected 2`);
    break;
  }
  // console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 5; index++) {
  if (index == 2) {
    // console.log(`Detected 2`);
    continue;
  }
  // console.log(`Value of i is ${index}`);
}
