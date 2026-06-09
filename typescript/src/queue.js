const { NodeSLL } = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(value) {
    if (!this.front) {
      this.front = this.back = new NodeSLL(value);
    }  else {
      this.back.next = new NodeSLL(value);
      this.back = this.back.next;
    }

    this.size++;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }

    const value = this.front.value;
    this.front = this.front.next;

    if (!this.front) {
      this.back = null;
    }

    this.size--;

    return value;
  }

  toArray() {
    let current = this.front;
    let arr = [];

    while (current) {
      arr.push(current.value);

      current = current.next;
    }

    return arr;
  }
}

module.exports = {
  Queue,
}

