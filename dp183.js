// topological sort

function s(edges) {
  const graph = edges.reduce(
    (acc, [from, to]) => ({
      ...acc,
      [from]: acc[from] ? [...acc[from], to] : [to],
      [to]: acc[to] ? [...acc[to], from] : [from],
    }),
    {}
  );
  const stack = [];
  const visited = new Set();
  dfs("a");
  return stack;

  function dfs(vertex) {
    for (let next of graph[vertex]) {
      if (!visited.has(next)) {
        visited.add(next);
        dfs(next, visited);
      }
    }
    stack.push(vertex);
  }
}

console.log(
  s([
    ["a", "b"],
    ["a", "c"],
    ["b", "d"],
    ["c", "d"],
    ["d", "e"],
    ["d", "f"],
    ["f", "g"],
  ])
);
