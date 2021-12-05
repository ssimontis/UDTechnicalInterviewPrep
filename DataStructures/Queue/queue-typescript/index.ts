// For a bigger challenge, try implementing this using your
// linked list implementation instead of an array.

export class Queue<T> {
  private storage: T[] = [];

  get length() {
    return this.storage.length;
  }

  public enqueue(value: T) {
    // Implement this!
  }

  public dequeue(): T {
    // Implement this!
  }
}