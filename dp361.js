// [LeetCode] 305. Number of Islands II 岛屿的数量之二

// A 2d grid map of m rows and n columns is initially filled with water. We may perform an addLand operation which turns the water at position (row, col) into a land. Given a list of positions to operate, count the number of islands after each addLand operation. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example:

// Input: m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]
// Output: [1,1,2,3]
// Explanation:

// Initially, the 2d grid grid is filled with water. (Assume 0 represents water and 1 represents land).

// 0 0 0
// 0 0 0
// 0 0 0
// Operation 1: addLand(0, 0) turns the water at grid[0][0] into a land.

// 1 0 0
// 0 0 0   Number of islands = 1
// 0 0 0
// Operation 2: addLand(0, 1) turns the water at grid[0][1] into a land.

// 1 1 0
// 0 0 0   Number of islands = 1
// 0 0 0
// Operation 3: addLand(1, 2) turns the water at grid[1][2] into a land.

// 1 1 0
// 0 0 1   Number of islands = 2
// 0 0 0
// Operation 4: addLand(2, 1) turns the water at grid[2][1] into a land.

// 1 1 0
// 0 0 1   Number of islands = 3
// 0 1 0
// Follow up:

// Can you do it in time complexity O(k log mn), where k is the length of the positions?

class UnionFind {
  constructor() {
    this.root = {};
    this.size = {};
    this.count = 0;
  }

  contains(key) {
    return this.root[key] ? true : false;
  }

  insert(key) {
    if (this.contains(key)) return;
    this.root[key] = key;
    this.size[key] = 1;
    this.count++;
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
    if (rootA === rootB) return;
    const [small, big] = [rootA, rootB].sort((a, b) =>
      this.size[a] < this.size[b] ? -1 : 1
    );
    this.root[small] = big;
    this.size[big] += this.size[small];
    this.count--;
  }
}

function s(m, n, positions) {
  // if two separate islands are connected by a addLand operation, the total islands have to be decremented!!! ====> becomes one island
  // use DSU/union find
  // time, o(positions), linear
  const numberIslands = [];
  const uf = new UnionFind();
  for (let [r, c] of positions) {
    uf.insert([r, c]);
    for (let [rr, cc] of [
      [r + 1, c],
      [r - 1, c],
      [r, c + 1],
      [r, c - 1],
    ]) {
      if (!uf.contains([rr, cc])) continue;
      // union all four directions, if they are land
      uf.union([r, c], [rr, cc]);
    }
    numberIslands.push(uf.count);
  }
  console.log(uf);
  return numberIslands;
}

console.log(
  s(3, 3, [
    [0, 0],
    [0, 1],
    [1, 2],
    [2, 1],
  ])
);
