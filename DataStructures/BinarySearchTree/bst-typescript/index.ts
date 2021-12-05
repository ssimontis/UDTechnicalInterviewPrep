export class BinarySerchTree {
  // This class could be generic, but we are using a number for simplicity.
  // Make it generic with a comparison function for a greater challenge.

  public left?: BinarySerchTree;
  public right?: BinarySerchTree;

  constructor(public value: number) {

  }

  public insert(value: number) {
    // Implement this!
  }

  public contains(value: number): boolean {
    // Implement this!
  }

  public breadthFirstTraversal(): number[] {
    // Implement this!
  }

  public depthFirstTraversal(): number[] {
    // Implement this!
  }

}