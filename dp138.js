// An undirected, connected tree with N nodes labelled 0...N - 1 and N - 1 edges are given.

// The ith edge connects nodes edges[i][0] and edges[i][1] together.

// Return a list ans, where ans[i] is the sum of the distances between node i and all other nodes.

//   Example 1:

// Input: N = 6, edges = [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]
// Output: [8, 12, 6, 10, 10, 10]
// Explanation:
// Here is a diagram of the given tree:
//    0
//   / \
// 1   2
//    /|\
//   3 4 5
// We can see that dist(0, 1) + dist(0, 2) + dist(0, 3) + dist(0, 4) + dist(0, 5)
// equals 1 + 1 + 2 + 2 + 2 = 8.  Hence, answer[0] = 8, and so on.

function sol(
  N = 6,
  edges = [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ]
) {
  const res = [];
  const list = [];
  for (let e of edges) {
    const [from, to] = e;
    list[from] ? list[from].push(to) : (list[from] = [to]);
    list[to] ? list[to].push(from) : (list[to] = [from]);
  }
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let k = 0; k < N; k++) {
      if (k !== i) {
        sum += dist(i, k);
      }
    }
    res[i] = sum;
  }
  return res;

  function dist(start, destination, visited = new Set()) {
    visited.add(start);
    if (start === destination) return 0;
    if (!list[start]) return Infinity;
    let d = Infinity;
    for (let next of list[start]) {
      if (!visited.has(next)) {
        d = Math.min(d, 1 + dist(next, destination, visited));
      }
    }
    return d;
  }
}

console.log(sol(), [8, 12, 6, 10, 10, 10]);

function sol2(
  N = 6,
  edges = [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ]
) {
  const graph = Array(N);
  const dist = Array(N).fill(0);
  // count arr is the number of nodes in tree[index]
  const count = Array(N).fill(0);

  for (let e of edges) {
    const [from, to] = e;
    graph[from] ? graph[from].push(to) : (graph[from] = [to]);
    graph[to] ? graph[to].push(from) : (graph[to] = [from]);
  }
  // fill count
  // find distance of each subtree to root
  postOrder(0, null);
  // fill dist
  preOrder(0, null);

  return dist;

  function postOrder(root, prev) {
    for (let next of graph[root]) {
      if (next === prev) continue;
      postOrder(next, root);
      // distance from root to all nodes in next = distance to next + number of nodes in the tree[next]
      dist[root] += dist[next] + count[next];
      count[root] += count[next];
    }
    // count itself
    count[root]++;
  }

  function preOrder(root, prev) {
    for (let next of graph[root]) {
      if (next === prev) continue;
      // subtract the # of nodes under next OR count[next]
      dist[next] = dist[root] + N - count[next] - count[next];
      preOrder(next, root);
    }
  }
}

console.log(sol2(), [8, 12, 6, 10, 10, 10]);
