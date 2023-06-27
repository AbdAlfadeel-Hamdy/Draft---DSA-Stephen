// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }
  add(value) {
    this.firstStack.push(value);
  }
  peek() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }
    const removedItem = this.secondStack.peek();
    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }
    return removedItem;
  }
  remove() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }
    const removedItem = this.secondStack.pop();
    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }
    return removedItem;
  }
}

module.exports = Queue;
