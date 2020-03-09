// given a string containing digits from 2-9 inclusive
// return all possible letter combos that the number could represent

// check telephone buttons

const combos = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};

const allCombos = string => {
  if (string.length < 2) {
    return combos[string];
  }

  let out = [];

  for (let char of combos[string[0]]) {
    let rest = string.slice(1);
    let innerPerm = allCombos(rest);

    for (let i of innerPerm) {
      out.push(char + i);
    }
  }

  return out;
};

console.log(allCombos("23"));
