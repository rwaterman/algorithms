const { NodeSLL, NodeBT } = require('./node');
const { Stack } = require('./stack');
const { Queue } = require('./queue');

class TreeBS {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let root = this.root;

    if (!root) {
      this.root = new NodeBT(value);
      return true;
    }

    while (root) {
      if (root.value === value) {
        return false;
      }

      if (value < root.value) {
        if (root.left) {
          root = root.left;
        } else {
          root.left = new NodeBT(value);
          return true;
        }
      } else {
        if (root.right) {
          root = root.right;
        } else {
          root.right = new NodeBT(value);
          return true;
        }
      }
    }
  }

  find(value) {
    let root = this.root;

    while (root) {
      if (root.value === value) {
        return true;
      }

      if (root.value < value) {
        root = root.left;
      } else if (root.value > value) {
        root = root.right;
      } else {
        throw new Error('Unable to compare root value');
      }
    }

    return false;
  }

  visitBFS() {
    let root = this.root;

    if (!root) {
      return null;
    }

    const queue  = new Queue();
    queue.enqueue(root);
    const visited = new Stack();

    while (queue.size) {
      root = queue.dequeue();

      if (!root) {
        break;
      }

      visited.push(root.value);

      if (root.left) {
        queue.enqueue(root.left)
      }

      if (root.right) {
        queue.enqueue(root.right);
      }
    }

    return visited.toArray();
  }

  visitDFSPreOrder() {
    const visited = new Stack();
    const traverse = (root) => {
      visited.push(root.value);

      if (root.left) {
        traverse(root.left);
      }

      if (root.right) {
        traverse(root.right);
      }

    }

    traverse(this.root);
    return visited.toArray();
  }
