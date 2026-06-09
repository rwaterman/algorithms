class NodeSLL {
  constructor(value) {
   this.value = value;
   this.next = null;
  }
}

class NodeDLL {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class NodeBT {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  NodeSLL,
  NodeDLL,
  NodeBT
}
