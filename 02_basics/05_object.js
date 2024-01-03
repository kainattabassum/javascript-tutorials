// destructure
const course = {
  coursename: "js aur chai",
  price: "999",
  courseInstructor: "hitesh",
};

// const { courseInstructor } = course;
const { courseInstructor: instructor } = course;

// console.log(courseInstructor); // hitesh
console.log(instructor); // hitesh

// ++++++++++++++++++ JSON

// OBJECT
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// ARRAY > oBJECT
[{}, {}, {}];
