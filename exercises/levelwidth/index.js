// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // Solution (1)
  // if (!root) return [];
  // const result = [1];
  // const arr = [[root]];
  // while (arr.length) {
  //   const removedNode = arr.pop();
  //   const newEl = [];
  //   removedNode.forEach((el) => {
  //     for (let i = 0; i < el.children.length; i++) {
  //       newEl.push(el.children[i]);
  //     }
  //   });
  //   if (!newEl.length) return result;
  //   result.push(newEl.length);
  //   arr.push(newEl);
  // }
  // return result;
  // Solution (2)
  if (!root) return [];
  const result = [0];
  const arr = [root, 'S'];
  while (arr.length > 1) {
    const removedNode = arr.shift();
    if (removedNode === 'S') {
      result.push(0);
      arr.push('S');
    } else {
      result[result.length - 1]++;
      arr.push(...removedNode.children);
    }
  }
  return result;
}

module.exports = levelWidth;
