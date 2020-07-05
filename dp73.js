// Consider a directed graph, with nodes labelled 0, 1, ..., n-1.  In this graph, each edge is either red or blue, and there could be self-edges or parallel edges.

// Each [i, j] in red_edges denotes a red directed edge from node i to node j.  Similarly, each [i, j] in blue_edges denotes a blue directed edge from node i to node j.

// Return an array answer of length n, where each answer[X] is the length of the shortest path from node 0 to node X such that the edge colors alternate along the path (or -1 if such a path doesn't exist).

// Example 1:

// Input: n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
// Output: [0,1,-1]
// Example 2:

// Input: n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]
// Output: [0,1,-1]
// Example 3:

// Input: n = 3, red_edges = [[1,0]], blue_edges = [[2,1]]
// Output: [0,-1,-1]
// Example 4:

// Input: n = 3, red_edges = [[0,1]], blue_edges = [[1,2]]
// Output: [0,1,2]

function sol(n, red, blue) {
  // create adjacency matrix
  // has red edge = 1
  // blue edge = -1
  // has both = 0
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(null);
    }
    matrix.push(row);
  }

  for (let r of red) {
    const [src, dst] = r;
    matrix[src][dst] = 1;
  }

  for (let b of blue) {
    const [src, dst] = b;
    if (matrix[src][dst] === 1) {
      matrix[src][dst]--;
    } else {
      matrix[src][dst] = -1;
    }
  }

  const q = [];
  // tuple
  // [node, 'type of edge*'], *red or blue
  // red = 1
  // blue = -1
  // push a blue and red edge, because don't know
  q.push([0, 1]);
  q.push([0, -1]);
  const res = Array(n).fill(Infinity);
  res[0] = 0;
  // mark visited edges
  const visited = {};
  let len = 0;

  while (q.length) {
    let size = q.length;
    len++;
    for (let i = 0; i < size; i++) {
      const [node, color] = q.shift();
      const oppositeColor = -color;

      for (let j = 1; j < n; j++) {
        if (matrix[node][j] === oppositeColor || matrix[node][j] === 0) {
          if (!visited[`node:${j} color:${oppositeColor}`]) {
            visited[`node:${j} color:${oppositeColor}`] = true;
            q.push([j, oppositeColor]);
            res[j] = Math.min(res[j], len);
          } else {
            continue;
          }
        }
      }
    }
  }

  for (let i = 0; i < res.length; i++) {
    if (res[i] === Infinity) res[i] = -1;
  }

  return res;
}

console.log(
  sol(
    3,
    [
      [0, 1],
      [1, 2],
    ],
    []
  )
); // [0,1,-1]
console.log(sol(3, [[0, 1]], [[2, 1]])); // [0,1,-1]
console.log(sol(3, [[0, 1]], [[1, 2]])); // [0,1,2]
