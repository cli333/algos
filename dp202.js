// word ladder
// find shortest transformation

// TRIED USING SETS, DOESNT MATTER!!!
// DFS SOLUTION

function s(beginWord, endWord, wordList) {
  // for each word find one letter transformations
  // find shortest traversal

  /* 
    time:
    create graph, o(length of wordlist * length of wordlist * length of word), o(n2m)
    traverse, o(nm)
    => simplify, o(mn2)
    space:
    create graph, o(mn2)
    stack height, o(n)
  */

  const graph = makeGraph();
  let out = Infinity;
  let list;

  // change back to arrays
  for (let word in graph) {
    graph[word] = [...graph[word]];
  }

  traverse(beginWord);

  function traverse(word, set = new Set(), res = 0, curList = [beginWord]) {
    if (word === endWord) {
      if (res < out) {
        out = res;
        list = curList.slice();
      }
      return;
    }
    for (let nextWord of graph[word]) {
      if (!set.has(nextWord)) {
        set.add(nextWord);
        curList.push(nextWord);
        traverse(nextWord, set, res + 1, curList);
        curList.pop();
        set.delete(nextWord);
      }
    }
  }

  return { out, list };

  function makeGraph() {
    const out = {};
    for (let word of wordList) {
      if (compare(beginWord, word)) {
        out[beginWord]
          ? out[beginWord].add(word)
          : (out[beginWord] = new Set([word]));
        out[word]
          ? out[word].add(beginWord)
          : (out[word] = new Set([beginWord]));
      }
    }
    for (let word of wordList) {
      for (let nextWord of wordList) {
        if (word !== nextWord && compare(word, nextWord)) {
          out[word]
            ? out[word].add(nextWord)
            : (out[word] = new Set([nextWord]));
          out[nextWord]
            ? out[nextWord].add(word)
            : (out[nextWord] = new Set([word]));
        }
      }
    }
    return out;
  }

  function compare(w1, w2) {
    let diffs = 0;
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== w2[i]) diffs++;
    }
    if (diffs <= 1) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(s("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));

// Using forms!!
// BFS SOLUTION

function s2(beginWord, endWord, wordList) {
  /* 
  make forms hashmap
  '*ot': [ 'hot', 'dot', 'lot' ],
  'h*t': [ 'hot' ],
  'ho*': [ 'hot' ],
  'd*t': [ 'dot' ],
  'do*': [ 'dot', 'dog' ],
  '*og': [ 'dog', 'log', 'cog' ],
  'd*g': [ 'dog' ],
  'l*t': [ 'lot' ],
  'lo*': [ 'lot', 'log' ],
  'l*g': [ 'log' ],
  'c*g': [ 'cog' ],
  'co*': [ 'cog' ]
  */

  // time, o(nm2), o(length of wordlist * length of word * length of word)
  // word of m length, will appear in m forms (3 letter word will appear 3 times in the graph)
  // will be at most nm entries in graph
  // BETTER THAN ABOVE if length of wordlist is greater than the length of the word (ASSUMING ALL SAME LENGTH)

  // space, o(nm2)
  const graph = makeGraph();
  console.log(graph);

  function makeGraph() {
    const out = {};
    for (let i = 0; i < beginWord.length; i++) {
      const form = `${beginWord.substring(0, i)}*${beginWord.substring(i + 1)}`;
      out[form] ? out[form].push(beginWord) : (out[form] = [beginWord]);
    }
    for (let word of wordList) {
      for (let i = 0; i < word.length; i++) {
        const form = `${word.substring(0, i)}*${word.substring(i + 1)}`;
        out[form] ? out[form].push(word) : (out[form] = [word]);
      }
    }
    return out;
  }

  const set = new Set();
  set.add(beginWord);
  const q = [[beginWord, 0]];
  while (q.length) {
    console.log(q);
    const [word, level] = q.shift();
    if (word === endWord) return level;
    for (let i = 0; i < word.length; i++) {
      const form = `${word.substring(0, i)}*${word.substring(i + 1)}`;
      for (let nextWord of graph[form]) {
        if (!set.has(nextWord)) {
          set.add(nextWord);
          q.push([nextWord, level + 1]);
        }
      }
    }
  }
}

console.log(s2("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
