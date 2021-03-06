// topological sort of directed graph
// order edges such that u -> v, u is ordered before v

function sol(edges) {
  const graph = {};
  buildGraph();
  const set = new Set();
  const stack = [];
  for (let vertex in graph) {
    if (!set.has(vertex)) {
      helper(vertex);
    }
  }
  return stack;

  function helper(vertex) {
    // go as deep as possible into the graph
    // return to parent
    // push to stack
    // and so on
    set.add(vertex);
    for (let next of graph[vertex]) {
      if (!set.has(next)) {
        helper(next);
      }
    }
    stack.push(vertex);
  }

  function buildGraph() {
    for (let edge of edges) {
      const [from, to] = edge;
      graph[from] ? graph[from].push(to) : (graph[from] = [to]);
      graph[to] ? null : (graph[to] = []);
    }
  }
}

console.log(
  sol([
    ["a", "b"],
    ["b", "c"],
    ["b", "e"],
    ["c", "d"],
    ["d", "f"],
    ["e", "f"],
    ["f", "g"],
  ])
);

function sol2(edges) {
  const graph = {};
  buildGraph();
  const set = new Set();
  const stack = [];
  for (let edge in graph) {
    if (!set.has(edge)) {
      helper(edge);
    }
  }
  return stack;

  function helper(edge) {
    set.add(edge);
    for (let child of graph[edge]) {
      if (!set.has(child)) {
        helper(child);
      }
    }
    stack.push(edge);
  }

  function buildGraph() {
    for (let e of edges) {
      const [from, to] = e;
      graph[from] ? graph[from].push(to) : (graph[from] = [to]);
      graph[to] ? null : (graph[to] = []);
    }
  }
}

console.log(
  sol2([
    ["a", "b"],
    ["b", "c"],
    ["b", "e"],
    ["c", "d"],
    ["d", "f"],
    ["e", "f"],
    ["f", "g"],
  ])
);
