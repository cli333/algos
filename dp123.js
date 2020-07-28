// There are n servers numbered from 0 to n - 1 connected by undirected server - to - server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b.Any server can reach any other server directly or indirectly through the network.

// A critical connection is a connection that, if removed, will make some server unable to reach some other server.

// Return all critical connections in the network in any order.

//   Example 1:

// Input: n = 4, connections = [[0, 1], [1, 2], [2, 0], [1, 3]]
// Output: [[1, 3]]
// Explanation: [[3, 1]] is also accepted.

function sol(n, connections) {
  // brute force
  //o (v + e)(e)
  const graph = {};
  for (let c of connections) {
    const [a, b] = c;
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
  }

  const visited = Array(n).fill(false);
  const res = [];
  for (let c of connections) {
    remove(c);
    traverse(0);
    if (!visited.every((v) => v === true)) {
      res.push(c);
    }
    visited.fill(false);
    const [a, b] = c;
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
  }

  return res;

  function remove(c) {
    const [a, b] = c;
    graph[a] = graph[a].filter((n) => n !== b);
    graph[b] = graph[b].filter((n) => n !== a);
  }

  function traverse(node) {
    if (!graph[node].length) return;
    for (let n of graph[node]) {
      if (!visited[n]) {
        visited[n] = true;
        traverse(n);
      }
    }
  }
}

function sol2(n, connections) {
  // tarjan's algo
  // o(v + e)
  // cycle => no critical connections
  // gap in low value => critical connection
  const res = [];
  const graph = {};
  buildGraph();
  const parents = Array(n).fill(-1);
  const discovered = Array(n).fill(-1);
  const low = Array(n).fill(-1);
  let time = 0;
  for (let i = 0; i < n; i++) {
    if (discovered[i] === -1) {
      dfs(i);
    }
  }
  console.log({ parents, discovered, low });
  return res;

  function buildGraph() {
    for (let c of connections) {
      const [a, b] = c;
      graph[a] ? graph[a].push(b) : (graph[a] = [b]);
      graph[b] ? graph[b].push(a) : (graph[b] = [a]);
    }
  }

  function dfs(u) {
    if (discovered[u] !== -1) return;
    low[u] = time;
    discovered[u] = time;
    time++;
    for (let v of graph[u]) {
      if (discovered[v] === -1) {
        parents[v] = u;
        dfs(v);
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > discovered[u]) {
          res.push([u, v]);
        }
      } else if (parents[u] !== v) {
        low[u] = Math.min(low[u], discovered[v]);
      }
    }
  }
}

console.log(
  sol(4, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ]),
  [[1, 3]]
);
console.log(
  sol(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ]),
  []
);
console.log(
  sol(5, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
    [2, 3],
    [2, 4],
  ]),
  [[2, 4]]
);
console.log(
  sol(3, [
    [0, 1],
    [1, 2],
  ]),
  [
    [0, 1],
    [1, 2],
  ]
);
console.log("//");
console.log(
  sol2(4, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ]),
  [[1, 3]]
);
console.log(
  sol2(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ]),
  []
);
console.log(
  sol2(5, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
    [2, 3],
    [2, 4],
  ]),
  [[2, 4]]
);
console.log(
  sol2(3, [
    [0, 1],
    [1, 2],
  ]),
  [
    [0, 1],
    [1, 2],
  ]
);
