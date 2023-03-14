// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION (1)
// function anagrams(stringA, stringB) {
//   const mapA = {};
//   const mapB = {};

//   for (const char of stringA.toLowerCase()) {
//     if (char.charCodeAt(0) > 122 || char.charCodeAt(0) < 97) continue;
//     mapA[char] = mapA[char] + 1 || 1;
//   }

//   for (const char of stringB.replace(/[^\w]/g, '').toLowerCase()) {
//     // if (char.charCodeAt(0) > 122 || char.charCodeAt(0) < 97) continue;
//     mapB[char] = mapB[char] + 1 || 1;
//   }
//   // for (const char of stringB.toLowerCase().split('')) {
//   //   if (char.charCodeAt(0) > 122 || char.charCodeAt(0) < 97) continue;
//   //   mapB[char] = mapB[char] + 1 || 1;
//   // }

//   if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

//   for (const char in mapA) {
//     if (mapA[char] !== mapB[char]) return false;
//   }
//   // for (const char in mapB) {
//   //   if (mapA[char] !== mapB[char]) return false;
//   // }
//   return true;
// }

// SOLUTION (2)
function anagrams(stringA, stringB) {
  const sortedStringA = stringA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  const sortedStringB = stringB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  return sortedStringA === sortedStringB;

  // in this solution we don't need join method
  // for (const [index, char] of sortedStringA.entries())
  //   if (char !== sortedStringB[index]) return false;
  // return true;
}

module.exports = anagrams;
