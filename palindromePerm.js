// check if a string is a permutation of a palindrome

// 'tactcoa' => 'tacocat'

const perm = string => {
  if (string.length < 2) {
    return [string];
  }

  let out = [];

  for (let i = 0; i < string.length; i++) {
    let firstChar = string[i];
    let rest = string.slice(0, i) + string.slice(i + 1);
    let innerPerm = perm(rest);

    for (let p of innerPerm) {
      out.push(firstChar + p);
    }
  }

  return out;
};

const isPal = string => {
  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] !== string[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const solve = string => {
  for (let p of perm(string)) {
    if (isPal(p)) return { p, result: true };
  }

  return false;
};

console.log(solve("tactcoa"));
