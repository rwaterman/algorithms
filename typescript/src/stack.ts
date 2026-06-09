import { NodeSLL } from './node.js';

export class Stack<T> {
  private top: NodeSLL<T> | null = null;
  public size = 0;

  public push(value: T): void {
    if (!this.top) {
      this.top = new NodeSLL(value);
    } else {
      const top = new NodeSLL(value);
      top.next = this.top;
      this.top = top;
    }

    this.size++;
  }

  public pop(): T | null {
    if (!this.top) {
      return null;
    }

    const value = this.top.value;
    this.top = this.top.next;
    this.size--;

    return value;
  }

  public toArray(): T[] {
    let current = this.top;
    const arr = Array<T>(this.size);
    let counter = this.size - 1;

    while (current) {
      arr[counter--] = current.value;
      current = current.next;
    }

    return arr;
  }
}
