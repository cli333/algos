// word search II
// with trie

class Trie {
  constructor() {
    this.children = {};
    // the whole word from root ----> now
    this.word = "";
    // number of words that end here
    this.ends = 0;
  }
  insert(word) {
    let cur = this;
    for (let c of word.split("")) {
      if (!cur.children[c]) {
        cur.children[c] = new Trie();
        cur.children[c].word = cur.word + c;
      }
      cur = cur.children[c];
    }
    cur.ends++;
  }
}

// const a = new Trie();
// a.insert("abbacus");
// console.log(a);
// console.log(a.children["a"].children["b"].children["b"]);

function s(board, words) {
  const trie = new Trie();
  words.forEach((word) => trie.insert(word));

  const res = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      helper(i, j, trie);
    }
  }
  return res;

  function helper(i, j, cur) {
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[i].length ||
      board[i][j] === "$" ||
      !cur.children[board[i][j]]
    )
      return;

    cur = cur.children[board[i][j]];
    if (cur.ends > 0) {
      // 1 or more words ends here
      res.push(cur.word);
      // optional, decrement so won't add this word again, the problem only wants unique solutions
      cur.ends--;
    }
    const temp = board[i][j];
    board[i][j] = "$";
    helper(i + 1, j, cur);
    helper(i - 1, j, cur);
    helper(i, j + 1, cur);
    helper(i, j - 1, cur);
    board[i][j] = temp;
  }
}

console.log(
  s(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  ),
  ["oath", "eat"]
);
