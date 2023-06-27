// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    if (!this.head) return 0;
    let currentNode = this.head;
    let size = 0;
    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) return (this.head = null);
    let currentNode = this.head;
    while (currentNode) {
      if (!currentNode.next.next) {
        return (currentNode.next = null);
      }
      currentNode = currentNode.next;
    }
  }
  insertLast(data) {
    if (!this.head) return (this.head = new Node(data));
    // Solution (1)
    // let currentNode = this.head;
    // while (currentNode.next) {
    //   currentNode = currentNode.next;
    // }
    // currentNode.next = new Node(data);

    // OR Solution (2)
    this.getLast().next = new Node(data);
  }
  getAt(index) {
    // if (index >= this.size()) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (!currentNode) return null;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  removeAt(index) {
    if (!this.head) return null;
    if (index === 0) return (this.head = this.head.next);
    let currentNode = this.head.next;
    let prevNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (!currentNode) return null;
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (!currentNode) return null;
    prevNode.next = currentNode.next;
  }
  insertAt(data, index) {
    if (!this.head) return (this.head = new Node(data));
    if (index === 0) return (this.head = new Node(data, this.head));
    const prevNode = this.getAt(index - 1) || this.getLast();
    prevNode.next = new Node(data, prevNode.next);
  }
  forEach(fn) {
    if (!this.head) return;
    let currentNode = this.head;
    for (let i = 0; i < this.size(); i++) {
      fn(currentNode, i);
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);

list.forEach((node) => {
  node.data += 10;
});
list.getAt(0); // Returns node with data '11

module.exports = { Node, LinkedList };
