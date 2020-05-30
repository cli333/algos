// Given a string s, return all the palindromic permutations(without duplicates) of it.Return an empty list if no palindromic permutation could be form.

// For example:

// Given s = "aabb", return ["abba", "baab"].

// Given s = "abc", return [].

//   Hint:

// If a palindromic permutation exists, we just need to generate the first half of the string.To generate all distinct permutations of a(half of) string, use a similar approach from: Permutations II or Next

function solve(str) {
  const map = {};
  const out = [];

  // check if can create palindrome
  let count = 0;
  for (let c of [...str]) {
    map[c] = map[c] + 1 || 1;
  }
  for (let c in map) {
    count += map[c] % 2;
  }
  if (!str.length || count > 1) return out;

  // find odd count char and add to center of temp string
  // should only be one
  let tmp = "";
  for (let c in map) {
    if (map[c] % 2 === 1) {
      tmp += c;
      break;
    }
  }

  // generate all perms using the tmp string
  helper(tmp, map, str.length);
  return out;

  function helper(tmp, map, n) {
    if (tmp.length === n) {
      out.push(tmp);
      return;
    }

    for (let c in map) {
      // >= 2, to ignore odd count characters
      // maybe delete from the map object?
      if (map[c] >= 2) {
        // simulate adding the char to the current string
        map[c] -= 2;
        // continue recursing with those characters added
        helper(c + tmp + c, map, n);
        // backtrack adding those characters back in
        map[c] += 2;
      }
    }
  }
}

console.log(solve("aabbd"));
console.log(solve("code"));
