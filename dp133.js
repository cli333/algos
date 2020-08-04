// There are n houses in a village.We want to supply water for all the houses by building wells and laying pipes.

// For each house i, we can either build a well inside it directly with cost wells[i], or pipe in water from another well to it.The costs to lay pipes between houses are given by the array pipes, where each pipes[i] = [house1, house2, cost] represents the cost to connect house1 and house2 together using a pipe.Connections are bidirectional.

// Find the minimum total cost to supply water to all houses.

//   Example 1:

// Input: n = 3, wells = [1, 2, 2], pipes = [[1, 2, 1], [2, 3, 1]]
// Output: 3
// Explanation:
// The image shows the costs of connecting houses using pipes.
// The best strategy is to build a well in the first house with cost 1 and connect the other houses to it with cost 2 so the total cost is 3.

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

function sol(
  n = 3,
  wells = [1, 2, 2],
  pipes = [
    [1, 2, 1],
    [2, 3, 1],
  ]
) {
  // n houses
  // wells, cost to build a well in house[i]
  // pipes, [house1, house2, cost]
  //
  // sort edges by weight
  // connect nodes, if no cycle, union them and add the cost
  const dsu = new DSU(n);
  const q = [];
  for (let i = 0; i < wells.length; i++) {
    // [from, to, cost]
    // 0 means it's a well
    q.push([0, i + 1, wells[i]]);
  }
  for (let p of pipes) {
    q.push(p);
  }
  q.sort((a, b) => (a[2] < b[2] ? -1 : 1));

  let res = 0;
  while (q.length) {
    const [a, b, cost] = q.shift();
    if (dsu.union(a, b)) res += cost;
  }
  return res;
}

console.log(sol(), 3);
