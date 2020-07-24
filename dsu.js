// disjoint sets
// parent: a node that identifies a set

class DSU {
  constructor(n) {
    // initialize each to point to itself
    this.parent = Array(n + 1)
      .fill(0)
      .map((_, idx) => idx);
    // parent is an array where the index is the node and the value is the parent
    //     1   2   3   4   5        nodes
    // [   3,  2,  2,  5,  2  ]     parents
    // 1's parent is 3
    // 2's parent is 2, it's the root
    // 3's parent is 2
    // 4's parent is 5
    // 5's parent is 2
  }

  // find(n) {
  //   if (this.parent[n] !== n) {
  //     this.parent[n] = this.find(this.parent[n])
  //   }
  //   return this.parent[n]
  // }

  // find the set n belongs to, return the parent
  find(n) {
    while (this.parent[n] !== n) {
      n = this.parent[n];
    }
    return n;
  }

  // merge two sets into a single set
  union(a, b) {
    const parentA = this.find(a);
    const parentB = this.find(b);
    if (parentA === parentB) {
      // belong to the same set, cannot merge, return
      console.log(`failed union a:${a}, b:${b}`);
      return;
    } else {
      // change parent[a] to point to b
      this.parent[b] = parentA;
    }
  }
}

function sol(edges) {
  class DSU1 {
    constructor(n) {
      this.root = Array(n + 1)
        .fill(0)
        .map((_, idx) => idx);
      // size = number of children
      this.size = Array(n + 1).fill(1);
    }
    find(a) {
      while (this.root[a] !== a) {
        a = this.root[a];
      }
      return this.root[a];
    }
    union(a, b) {
      const rootA = this.find(a);
      const rootB = this.find(b);
      if (rootA === rootB) return;
      this.root[b] = rootA;
      this.size[rootA]++;
    }
  }
  // edge = [5, 4], 5 is friend of 4
  // if you separated them into two groups
  // how many ways can you choose a group leader: 2 * 3 = 6
  // group1: 1,2,3
  // group2: 4,5
  // can choose 1 or 2 or 3 for group1 => 3 possibilities
  // can choose 4 or 5 for group2 => 2
  // 3 * 2 = 6
  const graph = {};
  for (let e of edges) {
    const [a, b] = e;
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
  }
  const n = Object.keys(graph).length;
  const dsu = new DSU1(n);
  for (let e of edges) {
    const [a, b] = e;
    dsu.union(a, b);
  }
  console.log(dsu);
  let res = 1;
  for (let s of dsu.size) {
    res *= s;
  }
  return res;
}

console.log(
  sol([
    [5, 4],
    [1, 2],
    [2, 3],
    [1, 3],
    [4, 5],
  ]),
  6
);
