type Comparable = number | string;

export class MaxBinaryHeap<T extends Comparable = number> {
  public values: T[] = [];

  public insert(value: T): void {
    this.values.push(value);

    let index = this.values.length - 1; // root
    const element = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.values[parentIndex];

      if (element <= parentValue) {
        break;
      }

      this.values[parentIndex] = element;
      this.values[index] = parentValue;
      index = parentIndex;
    }
  }

  public toArray(): T[] {
    return this.values;
  }
}
