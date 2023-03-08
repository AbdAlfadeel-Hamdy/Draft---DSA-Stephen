// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1
function reverseInt(n) {
  return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
}
// Solution 2
// function reverseInt(n) {
//   const nums = String(n).split('');
//   // if (nums[0] === '-') return +`-${nums.slice(1).reverse().join('')}`;
//   if (Math.sign(n) === -1) return +`-${nums.slice(1).reverse().join('')}`;
//   else return +nums.reverse().join('');
// }

module.exports = reverseInt;
