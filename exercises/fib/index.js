// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const res = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const num = res[i - 2] + res[i - 1];
//     res.push(num);
//   }
//   return res[n];
// }

// // Recursive Solution
// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// Recursive Solution
// const memos = {};
// function fib(n) {
//   if (n < 2) return n;
//   else {
//     const ans = memos[`fib${n}`] || fib(n - 1) + fib(n - 2);
//     memos[`fib${n}`] = ans;
//     return ans;
//   }
// }

// Another Solution
// function slowFib(n) {
//   if (n < 2) return n;
//   else return slowFib(n - 1) + slowFib(n - 2);
// }

// const memoize = function (fn) {
//   const memos = {};
//   return function (rest) {
//     const ans = memos[`fib${n}`];
//     memos[`fib${n}`] = ans;
//     return ans;
//   };
// };

// const fib = memoize(slowFib);

console.log(fib(60));

module.exports = fib;
