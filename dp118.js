// In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.

// The given input is a directed graph that started as a rooted tree with N nodes (with distinct values 1, 2, ..., N), with one additional directed edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

// The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] that represents a directed edge connecting nodes u and v, where u is a parent of child v.

// Return an edge that can be removed so that the resulting graph is a rooted tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.

// Example 1:
// Input: [[1,2], [1,3], [2,3]]
// Output: [2,3]
// Explanation: The given directed graph will be like this:
//   1
//  / \
// v   v
// 2-->3
// Example 2:
// Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
// Output: [4,1]
// Explanation: The given directed graph will be like this:
// 5 <- 1 -> 2
//      ^    |
//      |    v
//      4 <- 3

class DSU {
  constructor(n) {
    this.size = Array(n + 1).fill(1);
    this.root = Array(n + 1)
      .fill(1)
      .map((_, idx) => idx);
  }

  find(x) {
    if (this.root[x] !== x) {
      this.root[x] = this.find(this.root[x]);
    }
    return this.root[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return false;
    if (this.size[rootX] < this.size[rootY]) {
      this.size[rootY] += this.size[rootX];
      this.root[rootX] = rootY;
    } else {
      this.size[rootX] += this.size[rootY];
      this.root[rootY] = rootX;
    }
    return true;
  }
}

function sol(edges) {
  // if a node has two parent nodes OR there is a cycle
  // remove an edge

  findRedundantConnection();

  function detectCycle(n, skipEdge) {
    const dsu = new DSU(n);
    for (let e of edges) {
      if (String(e) === String(skipEdge)) continue;
      // if can't union this edge return the edge
      if (!dsu.union(e[0], e[1])) return e;
    }
    return null;
  }

  function findRedundantConnection() {
    const n = edges.length;
    const inDegrees = Array(n + 1).fill(0);
    let hasTwoInDegrees = -1;
    for (let e of edges) {
      inDegrees[e[1]]++;
      if (inDegrees[e[1]] === 2) {
        hasTwoInDegrees = e[1];
        break;
      }
    }
    console.log({ inDegrees, hasTwoInDegrees });
    if (hasTwoInDegrees === -1) return detectCycle(n, null);
    for (let i = n - 1; i >= 0; i--) {
      if (edges[i][1] === hasTwoInDegrees) {
        if (detectCycle(n, edges[i]) === null) return edges[i];
      }
    }

    return "nothing";
  }
}

console.log(
  sol([
    [1, 2],
    [1, 3],
    [2, 3],
  ]),
  [2, 3]
);
console.log(
  sol([
    [1, 2],
    [1, 3],
    [2, 3],
  ]),
  [4, 1]
);
console.log(
  sol([
    [2, 1],
    [3, 1],
    [4, 2],
    [1, 4],
  ]),
  [2, 1]
);
