export class ListNode<T> {
  constructor(
    public value: T, 
    public previous?: ListNode<T>, 
    public next?: ListNode<T>) {

  }
}

export class DoublyLinkedList<T> {
  public head?: ListNode<T>;
  public tail?: ListNode<T>;

  constructor(value: T) {
    const node = new ListNode<T>(value);

    this.head = node;
    this.tail = node;
  }

  // Adds a new value as the head of the list
  public prepend(value: T) {
    // Implement this!
  }

  // Adds a new value to the end of the list
  public append(value: T) {
    // Implement this!
  }

  // Removes the value at the head of the list and returns the value.
  public removeHead(): T {
    // Implement this!
  }

  // Removes the last element of the list and returns the value.
  public removeLastElement(): T {
    // Implement this!
  }

  // Finds the first node with a matching value and establish it as the new
  // list head. Value should be removed from its current position.
  public moveToFront(value: T) {
    // Implement this!
  }

  // Finds the first node with a matching value and move it to the end of the list.
  // Value should be removed from its current position.
  public moveToEnd(value: T) {
    // Implement this!
  }

  // Deletes the first node containing the matching value and returns it,
  // assuming the value exists.
  public deleteNode(value: T): T | undefined {

  }

  public printList() {
    let currentElement = this.head;
    console.log('----');

    while (currentElement) {
      console.log(currentElement.value);

      currentElement = currentElement.next;
    }

    console.log('****');
  }

}