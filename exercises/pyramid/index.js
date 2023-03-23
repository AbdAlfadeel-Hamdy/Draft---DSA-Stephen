// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

// Solution (1)
// function pyramid(n) {
//   for (let row = 1; row <= n; row++) {
//     let level = '';
//     for (let col = 0; col < n - row; col++) {
//       level += ' ';
//     }
//     for (let col = 0; col < 2 * row - 1; col++) {
//       level += '#';
//     }
//     for (let col = 0; col < n - row; col++) {
//       level += ' ';
//     }
//     console.log(level);
//   }
// }

// Solution (2)
// function pyramid(n) {
//   const midPoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (col > midPoint + row || col < midPoint - row) level += ' ';
//       else level += '#';
//     }
//     console.log(level);
//   }
// }

// Solution (3)(recursive)
function pyramid(
  n,
  row = 0,
  level = '',
  midPoint = Math.floor((2 * n - 1) / 2)
) {
  if (n === row) return;
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  if (level.length > midPoint + row || level.length < midPoint - row)
    level += ' ';
  else level += '#';
  return pyramid(n, row, level);
}
pyramid(5);

module.exports = pyramid;
