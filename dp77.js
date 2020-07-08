// Given the edges of a directed graph, and two nodes source and destination of this graph, determine whether or not all paths starting from source eventually end at destination, that is:

// At least one path exists from the source node to the destination node
// If a path exists from the source node to a node with no outgoing edges, then that node is equal to destination.
// The number of possible paths from source to destination is a finite number.
// Return true if and only if all roads from source lead to destination.

//   Example 1:

// Input: n = 3, edges = [[0, 1], [0, 2]], source = 0, destination = 2
// Output: false
// Explanation: It is possible to reach and get stuck on both node 1 and node 2.
// Example 2:

// Input: n = 4, edges = [[0, 1], [0, 3], [1, 2], [2, 1]], source = 0, destination = 3
// Output: false
// Explanation: We have two possibilities: to end at node 3, or to loop over node 1 and node 2 indefinitely.

// Input: n = 4, edges = [[0, 1], [0, 2], [1, 3], [2, 3]], source = 0, destination = 3
// Output: true

function sol(n, edges, src, dst) {
  // make adjacency list
  const list = [];

  for (let e of edges) {
    const [from, to] = e;
    list[from] = list[from] ? [...list[from], to] : [to];
    // list[to] = list[to] ? [...list[to], from] : [from];
  }

  return helper(src, dst, list, Array(n).fill(false));

  function helper(s, d, graph, visited) {
    if (!graph[s] || !graph.length) {
      return s === d;
    }

    visited[s] = true;
    for (let next of graph[s]) {
      if (visited[next]) return false;
      if (!visited[next] && !helper(next, d, graph, visited)) return false;
    }
    return true;
  }
}

console.log(
  sol(
    3,
    [
      [0, 1],
      [0, 2],
    ],
    0,
    2
  )
);
console.log(
  sol(
    4,
    [
      [0, 1],
      [0, 3],
      [1, 2],
      [2, 1],
    ],
    0,
    3
  )
);
console.log(
  sol(
    4,
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
    ],
    0,
    3
  )
);
