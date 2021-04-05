// There are n houses in a village. We want to supply water for all the houses by building wells and laying pipes.

// For each house i, we can either build a well inside it directly with cost wells[i], or pipe in water from another well to it. The costs to lay pipes between houses are given by the array pipes, where each pipes[i] = [house1, house2, cost] represents the cost to connect house1 and house2 together using a pipe. Connections are bidirectional.

// Find the minimum total cost to supply water to all houses.

// Example 1:
// Leetcode: Optimize Water Distribution in a Village

// Input: n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]
// Output: 3
// Explanation:
// The image shows the costs of connecting houses using pipes.
// The best strategy is to build a well in the first house with cost 1 and connect the other houses to it with cost 2 so the total cost

class DSU {
  constructor(n) {
    this.root = Array(n + 1)
      .fill(0)
      .map((_, i) => i);
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
    this.root[rootB] = rootA;
    return true;
  }
}

function s(
  n = 3,
  wells = [1, 2, 2],
  pipes = [
    [1, 2, 1],
    [2, 3, 1],
  ]
) {
  // [cost, from, to]
  const q = [];
  for (let i = 0; i < wells.length; i++) {
    // set destination of well to 0
    q.push([wells[i], i + 1, 0]);
  }
  for (let [from, to, cost] of pipes) {
    q.push([cost, from, to]);
  }
  q.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  let minCost = 0;
  const res = [];
  const dsu = new DSU(n);
  while (q.length) {
    const [cost, from, to] = q.shift();
    if (dsu.union(from, to)) {
      minCost += cost;
      if (!to) {
        res.push(`well in house ${from} that costs ${cost}`);
      } else {
        res.push(`pipe from house ${from} to house ${to} that costs ${cost}`);
      }
    }
  }
  return { minCost, res };
}

console.log(s());
