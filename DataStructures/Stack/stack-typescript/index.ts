export class Stack<T> {
  private storage: T[] = [];

  get length() {
    return this.storage.length;
  }

  public push(value: T) {
    // Implement this!
  }

  public pop(): T {
    // Implement this!
  }
}