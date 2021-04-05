// reverse vowels in a string
// apple => eppla
// friend => freind

function s(word) {
  word = word.split("");
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    while (start < end && !isVowel(word[start])) {
      start++;
    }
    while (start < end && !isVowel(word[end])) {
      end--;
    }

    [word[start], word[end]] = [word[end], word[start]];
    start++;
    end--;
  }
  return word.join("");

  function isVowel(char) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    )
      return true;
    return false;
  }
}

console.log(s("apple"));
console.log(s("friend"));
console.log(s("ricecar"));
console.log(s("abcdefghijklmnopqrstuvwxyz"));
