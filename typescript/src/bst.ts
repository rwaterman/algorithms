import { NodeBT } from './node.js';
import { Queue } from './queue.js';
import { Stack } from './stack.js';

type Comparable = number | string;

export class TreeBS<T extends Comparable = number> {
  private root: NodeBT<T> | null = null;

  public insert(value: T): boolean {
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

    throw new Error('Binary search tree insert reached an invalid state');
  }

  public find(value: T): boolean {
    let root = this.root;

    while (root) {
      if (root.value === value) {
        return true;
      }

      if (root.value < value) {
        root = root.right;
      } else if (root.value > value) {
        root = root.left;
      } else {
        throw new Error('Unable to compare root value');
      }
    }

    return false;
  }

  public visitBFS(): T[] | null {
    let root = this.root;

    if (!root) {
      return null;
    }

    const queue = new Queue<NodeBT<T>>();
    queue.enqueue(root);
    const visited = new Stack<T>();

    while (queue.size) {
      root = queue.dequeue();

      if (!root) {
        break;
      }

      visited.push(root.value);

      if (root.left) {
        queue.enqueue(root.left);
      }

      if (root.right) {
        queue.enqueue(root.right);
      }
    }

    return visited.toArray();
  }

  public visitDFSPreOrder(): T[] | null {
    const visited = new Stack<T>();
    const traverse = (root: NodeBT<T>): void => {
      visited.push(root.value);

      if (root.left) {
        traverse(root.left);
      }

      if (root.right) {
        traverse(root.right);
      }

    };

    if (!this.root) {
      return null;
    }

    traverse(this.root);
    return visited.toArray();
  }
}
