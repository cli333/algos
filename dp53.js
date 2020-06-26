// given a string s, return all possible letter combinations that that number could represent
// phone problem

function sol(s) {
  const map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  const res = [];
  helper(0, "");
  return res;

  function helper(idx, curString) {
    if (idx === s.length) {
      res.push(curString);
      return;
    }
    let num = s[idx];
    let candidates = map[num];
    for (let i = 0; i < candidates.length; i++) {
      helper(idx + 1, curString + candidates[i]);
    }
  }
}

console.log(sol("23"));
