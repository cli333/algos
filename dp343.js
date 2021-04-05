// 211. Design Add and Search Words Data Structure
// Medium

// 2848

// 122

// Add to List

// Share
// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True

class WordDictionary {
  constructor() {
    this.children = {};
    this.end = false;
  }
  addWord(word) {
    let cur = this;
    for (let c of word.split("")) {
      if (!cur.children[c]) {
        cur.children[c] = new WordDictionary();
      }
      cur = cur.children[c];
    }
    cur.end = true;
  }
  search(word, cur = this) {
    // . matches any char
    for (let i = 0; i < word.length; i++) {
      if (word[i] === ".") {
        for (let child in cur.children) {
          if (this.search(word.substring(i + 1), cur.children[child]))
            return true;
        }
        return false;
      } else if (!cur.children[word[i]]) {
        return false;
      } else {
        cur = cur.children[word[i]];
      }
    }
    return cur.end;
  }
}

const a = new WordDictionary();
console.log(a.addWord("bad"));
console.log(a.addWord("dad"));
console.log(a.addWord("mad"));
console.log(a.search("pad")); // return False
console.log(a.search("bad")); // return True
console.log(a.search(".ad")); // return True
console.log(a.search("b..")); // return True
