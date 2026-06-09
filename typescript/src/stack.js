const { NodeSLL } = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    if (!this.top) {
      this.top = new NodeSLL(value);
    } else {
      const top = new NodeSLL(value);
      top.next = this.top;
      this.top = top;
    }

    this.size++;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    const value = this.top.value;
    this.top = this.top.next;
    this.size--;

    return value;
  }

  toArray() {
    let current = this.top;
    const arr = Array(this.size);
    let counter = this.size - 1;

    while (current) {
      arr[counter--] = current.value;
      current = current.next;
    }

    return arr;
  }
}

module.exports = {
  Stack
}
