// check if valid palindrome
// can delete ONE character
// will only contain a-z lowercase

const valid = string => {
  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] !== string[end]) {
      if (
        string[start + 1] !== string[end] &&
        string[start] !== string[end - 1]
      )
        return false;
    }
    start++;
    end--;
  }

  return true;
};

console.log(valid("racecarz")); // true
