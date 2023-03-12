// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution (1)
function chunk(array, size) {
  const chuncked = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    chuncked.push(chunk);
  }
  return chuncked;
}

// Solution (2)
// function chunk(array, size) {
//   const chuncked = [];
//   for (const el of array) {
//     const lastChunck = chuncked[chuncked.length - 1];
//     if (!lastChunck || lastChunck.length === size) chuncked.push([el]);
//     else lastChunck.push(el);
//   }
//   return chuncked;
// }

module.exports = chunk;
