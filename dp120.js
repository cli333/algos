// In this problem, a tree is an undirected graph that is connected and has no cycles.

// The given input is a graph that started as a tree with N nodes(with distinct values 1, 2, ..., N), with one additional edge added.The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

// The resulting graph is given as a 2D - array of edges.Each element of edges is a pair[u, v] with u < v, that represents an undirected edge connecting nodes u and v.

// Return an edge that can be removed so that the resulting graph is a tree of N nodes.If there are multiple answers, return the answer that occurs last in the given 2D - array.The answer edge[u, v] should be in the same format, with u < v.

//   Example 1:
// Input: [[1, 2], [1, 3], [2, 3]]
// Output: [2, 3]
// Explanation: The given undirected graph will be like this:
//    1
//   / \
// 2 - 3
// Example 2:
// Input: [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
// Output: [1, 4]
// Explanation: The given undirected graph will be like this:
// 5 - 1 - 2
//      |   |
//      4 - 3

function sol(edges) {
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
      const A = this.find(a);
      const B = this.find(b);
      if (A === B) return false;
      if (this.size[A] > this.size[B]) {
        this.size[A] += this.size[B];
        this.root[B] = A;
      } else {
        this.size[B] += this.size[A];
        this.root[A] = B;
      }
      return true;
    }
  }
  const n = edges.length;
  const dsu = new DSU(n);
  for (let e of edges) {
    if (!dsu.union(e[0], e[1])) return e;
  }
  return [];
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
    [1, 4],
    [1, 5],
  ]),
  [1, 4].toString()
);
