// 208. Implement Trie (Prefix Tree)
// Medium

// 4357

// 70

// Add to List

// Share
// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

class Trie {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
  insert(word) {
    let cur = this;
    for (let c of word.split("")) {
      if (!cur.children[c]) {
        cur.children[c] = new Trie();
      }
      cur = cur.children[c];
    }
    cur.isEnd = true;
  }
  search(word) {
    let cur = this;
    for (let c of word.split("")) {
      if (!cur.children[c]) return false;
      cur = cur.children[c];
    }
    return cur.isEnd;
  }
  startsWith(prefix) {
    let cur = this;
    for (let c of prefix.split("")) {
      cur = cur.children[c];
      if (!cur) return false;
    }
    return true;
  }
}

const a = new Trie();
console.log(a);
a.insert("apple");
console.log(a);
console.log(a.search("apple"));
console.log(a.search("app"));
console.log(a.startsWith("app"));
