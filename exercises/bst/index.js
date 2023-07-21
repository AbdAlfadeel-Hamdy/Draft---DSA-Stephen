// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    // Solution (1)
    // const newNode = new Node(value);
    // let currentNode = this;
    // if (value > currentNode.data) {
    //   if (!currentNode.right) return (currentNode.right = newNode);

    //   currentNode = currentNode.right;
    //   return currentNode.insert(value);
    // }
    // if (value < currentNode.data) {
    //   if (!currentNode.left) return (currentNode.left = newNode);

    //   currentNode = currentNode.left;
    //   return currentNode.insert(value);
    // }

    // Solution (2)
    if (value > this.data && this.right) return this.right.insert(value);
    if (value > this.data && !this.right) return (this.right = new Node(value));
    if (value < this.data && this.left) return this.left.insert(value);
    if (value < this.data && !this.left) return (this.left = new Node(value));
  }

  contains(data) {
    if (this.data === data) return this;
    if (data > this.data && this.right) return this.right.contains(data);
    if (data > this.data && !this.right) return null;
    if (data < this.data && this.left) return this.left.contains(data);
    if (data < this.data && !this.left) return null;
  }
}

module.exports = Node;
