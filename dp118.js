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
    this.root = Array(n + 1)
      .fill(0)
      .map((_, i) => i);
    this.size = Array(n + 1).fill(1);
  }
  find(a) {
    if (this.root[a] !== a) {
      this.root[a] = this.find(this.root[a]);
    }
    return this.root[a];
  }
  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA === rootB) return false;
    if (this.size[rootA] > this.size[rootB]) {
      this.size[rootA] += this.size[rootB];
      this.root[rootB] = rootA;
    } else {
      this.size[rootB] += this.size[rootA];
      this.root[rootA] = rootB;
    }
    return true;
  }
}

function sol(edges) {
  // if a node has two parent nodes OR there is a cycle
  // remove an edge
  // 1) check if it has two parents/neighbors
  // 2) check if there is a cycle
  const n = edges.length;
  // count parents/neighbors of each node
  const parents = Array(n + 1).fill(0);
  let hasTwoParents = -1;
  for (let e of edges) {
    // graph is directed so [from, to]
    // trying to find node with two parents
    const [_, to] = e;
    parents[to]++;
    if (parents[to] === 2) {
      // found the node
      hasTwoParents = to;
      break;
    }
  }
  if (hasTwoParents === -1) return detectCycle(null);
  for (let i = n - 1; i >= 0; i--) {
    if (edges[i][1] === hasTwoParents) {
      if (!detectCycle(edges[i])) return edges[i];
    }
  }
  return [];

  function detectCycle(skipEdge) {
    const dsu = new DSU(n);
    for (let e of edges) {
      if (String(e) === String(skipEdge)) continue;
      if (!dsu.union(e[0], e[1])) return e;
    }
    // no cycle
    return null;
  }
}

console.log(
  sol([
    [1, 2],
    [1, 3],
    [2, 3],
  ]),
  [2, 3].toString()
);

console.log(
  sol([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 1],
    [1, 5],
  ]),
  [4, 1].toString()
);
