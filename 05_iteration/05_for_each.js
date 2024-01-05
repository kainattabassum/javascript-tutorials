const coding = ["js", "ruby", "java", "python", "cpp"];
// console.log(coding);

coding.forEach((element) => {
  // console.log(element);
});

function printMe(arr) {
  console.log(arr);
}
// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];
myCoding.forEach((item) => {
//   console.log(item.languageFileName);
});

const values = coding.forEach((element) => {
  console.log(element);
  return element; // no return > undefined
});
console.log(values);
