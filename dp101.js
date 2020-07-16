// On a 2D plane, we place stones at some integer coordinate points.Each coordinate point may have at most one stone.

//   Now, a move consists of removing a stone that shares a column or row with another stone on the grid.

// What is the largest possible number of moves we can make ?

//   Example 1:

// Input: stones = [[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]
// Output: 5
// Example 2:

// Input: stones = [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]]
// Output: 3
// Example 3:

// Input: stones = [[0, 0]]
// Output: 0

class DSU {
  // disjointed sets
  constructor(N) {
    this.size = Array(N);
    this.root = Array(N);
    this.count = N;
    for (let i = 0; i < N; i++) {
      this.root[i] = i;
    }
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
    if (rootX === rootY) return;

    if (this.size[rootX] <= this.size[rootY]) {
      this.root[rootX] = rootY;
      this.size[rootY]++;
    } else {
      this.root[rootY] = rootX;
      this.size[rootX]++;
    }
    this.count--;
  }
}

function sol(stones) {
  const N = stones.length;
  const dsu = new DSU(N);

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
        dsu.union(i, j);
      }
    }
  }

  return N - dsu.count;
}

console.log(
  sol([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
    [2, 2],
  ])
);
console.log(
  sol([
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 2],
  ])
);
console.log(sol([[0, 0]]));
