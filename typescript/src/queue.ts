import { NodeSLL } from './node.js';

export class Queue<T> {
  private front: NodeSLL<T> | null = null;
  private back: NodeSLL<T> | null = null;
  public size = 0;

  public enqueue(value: T): void {
    const node = new NodeSLL(value);

    if (!this.front) {
      this.front = node;
      this.back = node;
    } else {
      if (!this.back) {
        throw new Error('Queue back pointer is missing while front is set');
      }

      this.back.next = node;
      this.back = node;
    }

    this.size++;
  }

  public dequeue(): T | null {
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

  public toArray(): T[] {
    let current = this.front;
    const arr: T[] = [];

    while (current) {
      arr.push(current.value);

      current = current.next;
    }

    return arr;
  }
}
