// graph dfs

function s(graph, root) {
  const set = new Set();
  helper(root);

  function helper(start) {
    console.log(start);
    for (let next of graph[start]) {
      if (!set.has(next)) {
        set.add(next);
        helper(next);
      }
    }
  }
}

// console.log(
//   s(
//     {
//       5: [8, 1, 12],
//       8: [5, 12, 14, 4],
//       12: [5, 8, 14],
//       14: [8, 12, 4],
//       4: [8, 14],
//       1: [5, 7],
//       7: [1, 16],
//       16: [7],
//     },
//     5
//   )
// );

function s2(graph, root, set = new Set()) {
  // time o(v + e)
  // space o(v)

  if (set.has(root)) return;
  console.log(root);
  set.add(root);
  for (let next of graph[root]) {
    s2(graph, next, set);
  }
}

console.log(
  s2(
    {
      5: [8, 1, 12],
      8: [5, 12, 14, 4],
      12: [5, 8, 14],
      14: [8, 12, 4],
      4: [8, 14],
      1: [5, 7],
      7: [1, 16],
      16: [7],
    },
    5
  )
);

// breadth first search

function s3(graph, root) {
  const out = [];
  const set = new Set();
  helper(root);
  return out;

  function helper(root) {
    const q = [root];
    while (q.length) {
      const v = q.shift();
      if (set.has(v)) continue;
      set.add(v);
      out.push(v);
      q.push(...graph[v]);
    }
  }
}

console.log(
  s3(
    {
      5: [8, 1, 12],
      8: [5, 12, 14, 4],
      12: [5, 8, 14],
      14: [8, 12, 4],
      4: [8, 14],
      1: [5, 7],
      7: [1, 16],
      16: [7],
    },
    5
  )
);
