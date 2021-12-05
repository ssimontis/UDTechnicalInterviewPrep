export class Graph {
  private vertices: Map<number, Set<number>> = new Map<number, Set<number>>();

  public addVertex(identifier: number) {
    // Implement this!
  }

  public addEdge(vertex1: number, vertex2: number) {
    // Implement this!
    // Ensure you handle the edge case where a vertex does not already exist.
  }

  public getNeighbors(targetVertex: number): Set<number> {
    // Implement this!
  }

  // Returns an array vs set because order is important
  public breadthFirstTraversal(originVertex: number): number[] {
    // Implement this!
  }

  // Returns an array vs set because order is important
  public depthFirstTraversal(originVertex: number): number[] {
    // Implement this!
    // Challenge: Use recursion to implement this!
  }

  public breadthFirstSearch(originVertex: number, value: number): number[] {
    // Implement this!
  }

  public depthFirstSearch(originVertex: number, value: number): number[] {
    // Implement this!
  }
}