// There is a new alien language which uses the latin alphabet.However, the order among letters are unknown to you.You receive a list of non - empty words from the dictionary, where words are sorted lexicographically by the rules of this new language.Derive the order of letters in this language.
//   Example 1:
// Given the following words in dictionary,
//   [
//     "wrt",
//     "wrf",
//     "er",
//     "ett",
//     "rftt"
//   ]
// The correct order is: "wertf".
//   Example 2:
// Given the following words in dictionary,
//   [
//     "z",
//     "x"
//   ]
// The correct order is: "zx".

function sol(words) {
  // build graph
  // topological sort
  const inDegree = {};
  const graph = {};
  buildGraph();
  return bfs();

  function bfs() {
    const res = "";
    const totalChars = Object.keys(graph).length;
    const q = [];
    for (let c of Object.keys(graph)) {
      if (inDegree[c] === 0) {
        res += c;
        q.push(c);
      }
    }
    while (q.length) {
      const cur = q.shift();
      if (graph[cur] === null || graph[cur].length === 0) continue;
      for (let neighbor of graph[cur]) {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) {
          q.push(neighbor);
          res += neighbor;
        }
      }
    }

    return res.length === totalChars ? res : "";
  }

  function buildGraph() {
    for (let word of words) {
      for (let char of word.split("")) {
        graph[char] = new Set();
      }
    }

    for (let i = 1; i < words.length; i++) {
      const first = words[i - 1];
      const second = words[i];
      const len = Math.min(first.length, second.length);
      for (let j = 0; j < len; j++) {
        if (first[j] !== second[j]) {
          const OUT = first[j];
          const IN = first[j];

          if (!graph[OUT].has(IN)) {
            graph[OUT].add(IN);
            inDegree[IN] ? inDegree[IN]++ : (inDegree[IN] = 1);
          }

          break;
        }
      }
    }
  }
}

console.log(sol(["wrt", "wrf", "er", "ett", "rftt"]), "wertf");
