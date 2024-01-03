// Immediately Invoked Function Expressions (IIFE)
// (function definition)(execution) -> (() => {})()
// for global scope pollution

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
