import { describe, expect, it } from 'vitest';

import {
  MaxBinaryHeap,
  NodeBT,
  NodeDLL,
  NodeSLL,
  Queue,
  Stack,
  TreeBS,
} from '../src/index.js';

describe('linked nodes', () => {
  it('creates singly linked nodes', () => {
    const first = new NodeSLL('first');
    const second = new NodeSLL('second');

    first.next = second;

    expect(first.value).toBe('first');
    expect(first.next).toBe(second);
    expect(second.next).toBeNull();
  });

  it('creates doubly linked nodes', () => {
    const first = new NodeDLL(1);
    const second = new NodeDLL(2);

    first.next = second;
    second.prev = first;

    expect(first.prev).toBeNull();
    expect(first.next).toBe(second);
    expect(second.prev).toBe(first);
  });

  it('creates binary tree nodes', () => {
    const root = new NodeBT(10);
    root.left = new NodeBT(5);
    root.right = new NodeBT(15);

    expect(root.value).toBe(10);
    expect(root.left?.value).toBe(5);
    expect(root.right?.value).toBe(15);
  });
});

describe('Stack', () => {
  it('pushes and pops in LIFO order', () => {
    const stack = new Stack<number>();

    expect(stack.pop()).toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toBe(3);
    expect(stack.toArray()).toEqual([1, 2, 3]);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
    expect(stack.size).toBe(0);
  });
});

describe('Queue', () => {
  it('enqueues and dequeues in FIFO order', () => {
    const queue = new Queue<string>();

    expect(queue.dequeue()).toBeNull();

    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');

    expect(queue.size).toBe(3);
    expect(queue.toArray()).toEqual(['a', 'b', 'c']);
    expect(queue.dequeue()).toBe('a');
    expect(queue.dequeue()).toBe('b');
    expect(queue.dequeue()).toBe('c');
    expect(queue.dequeue()).toBeNull();
    expect(queue.size).toBe(0);

    queue.enqueue('d');
    expect(queue.toArray()).toEqual(['d']);
  });
});

describe('MaxBinaryHeap', () => {
  it('bubbles inserted values into max-heap order', () => {
    const heap = new MaxBinaryHeap<number>();

    for (const value of [41, 39, 33, 18, 27, 12, 55]) {
      heap.insert(value);
    }

    expect(heap.toArray()).toEqual([55, 39, 41, 18, 27, 12, 33]);
  });
});

describe('TreeBS', () => {
  it('inserts unique values and finds them by binary search', () => {
    const tree = new TreeBS<number>();

    expect(tree.visitBFS()).toBeNull();
    expect(tree.visitDFSPreOrder()).toBeNull();

    expect(tree.insert(10)).toBe(true);
    expect(tree.insert(5)).toBe(true);
    expect(tree.insert(15)).toBe(true);
    expect(tree.insert(3)).toBe(true);
    expect(tree.insert(7)).toBe(true);
    expect(tree.insert(12)).toBe(true);
    expect(tree.insert(18)).toBe(true);
    expect(tree.insert(7)).toBe(false);

    expect(tree.find(10)).toBe(true);
    expect(tree.find(3)).toBe(true);
    expect(tree.find(18)).toBe(true);
    expect(tree.find(6)).toBe(false);
  });

  it('visits nodes breadth-first and depth-first preorder', () => {
    const tree = new TreeBS<number>();

    for (const value of [10, 5, 15, 3, 7, 12, 18]) {
      tree.insert(value);
    }

    expect(tree.visitBFS()).toEqual([10, 5, 15, 3, 7, 12, 18]);
    expect(tree.visitDFSPreOrder()).toEqual([10, 5, 3, 7, 15, 12, 18]);
  });
});
