// Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map, compute the volume of water it is able to trap after raining.

//   Example:

// Given the following 3x6 height map:
// [
//   [1, 4, 3, 1, 3, 2],
//   [3, 2, 1, 3, 2, 4],
//   [2, 3, 3, 2, 3, 1]
// ]

// Return 4.

class Cell {
  constructor(r, c, h) {
    this.row = r;
    this.col = c;
    this.height = h;
  }
}

function sol(heightMap) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const m = heightMap.length;
  const n = heightMap[0].length;
  const q = [];
  const visited = JSON.parse(JSON.stringify(heightMap));
  for (let row of visited) {
    row.fill(false);
  }

  for (let i = 0; i < m; i++) {
    visited[i][0] = true;
    visited[i][n - 1] = true;
    q.push(new Cell(i, 0, heightMap[i][0]));
    q.push(new Cell(i, n - 1, heightMap[i][n - 1]));
  }

  for (let i = 0; i < n; i++) {
    visited[0][i] = true;
    visited[m - 1][i] = true;
    q.push(new Cell(0, i, heightMap[0][i]));
    q.push(new Cell(m - 1, i, heightMap[m - 1][i]));
  }

  q.sort((a, b) => (a.height < b.height ? -1 : 1));

  let res = 0;
  while (q.length) {
    const { row, col, height } = q.shift();
    for (let d of directions) {
      const r = d[0] + row;
      const c = d[1] + col;
      if (r > 0 && r < m - 1 && c > 0 && c < n - 1 && !visited[r][c]) {
        visited[r][c] = true;
        res += Math.max(0, height - heightMap[r][c]);
        q.push(new Cell(r, c, Math.max(height, heightMap[r][c])));
      }
    }
    q.sort((a, b) => (a.height < b.height ? -1 : 1));
  }

  return res;
}

console.log(
  sol([
    [1, 4, 3, 1, 3, 2],
    [3, 2, 1, 3, 2, 4],
    [2, 3, 3, 2, 3, 1],
  ])
);
