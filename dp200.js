// trie structure

class TNode {
  constructor(endOfWord = false) {
    this.children = {};
    this.endOfWord = endOfWord;
  }
}

const t = new TNode();

function insert(str, root, i) {
  if (i === str.length) {
    root.endOfWord = true;
    return;
  }
  const char = str[i];
  let node = root.children[char];
  if (!node) {
    node = new TNode();
    root.children[char] = node;
  }
  insert(str, node, i + 1);
}

insert("abc", t, 0);
insert("abgl", t, 0);
insert("cdf", t, 0);
insert("abcd", t, 0);
insert("lmn", t, 0);
// console.log(t.children);
// console.log(t.children["a"].children["b"].children["c"]);
// console.log(t.children["a"].children["b"].children["g"]);

// whole word search
function search(str, root, i) {
  if (i === str.length) return root.endOfWord;
  const char = str[i];
  const node = root.children[char];
  if (!node) {
    return false;
  }
  return search(str, node, i + 1);
}

console.log(search("ab", t, 0), "ab");
console.log(search("lo", t, 0), "lo");
console.log(search("lmn", t, 0), "lmn");
console.log(search("abc", t, 0), "abc");
console.log(search("cdf", t, 0), "cdf");
console.log(search("ghi", t, 0), "ghi");
