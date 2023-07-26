// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (node.left) {
    if (node.data > node.left.data) return validate(node.left, null, node);
    return false;
  }
  if (node.right) {
    if (
      node.data < node.right.data &&
      node.right.data > min &&
      node.right.data < max
    )
      return validate(node.right, node.right, node);
    return false;
  }

  return true;
}

module.exports = validate;
