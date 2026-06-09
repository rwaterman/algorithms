export class NodeSLL<T> {
  public next: NodeSLL<T> | null = null;

  public constructor(public value: T) {}
}

export class NodeDLL<T> {
  public prev: NodeDLL<T> | null = null;
  public next: NodeDLL<T> | null = null;

  public constructor(public value: T) {}
}

export class NodeBT<T> {
  public left: NodeBT<T> | null = null;
  public right: NodeBT<T> | null = null;

  public constructor(public value: T) {}
}
