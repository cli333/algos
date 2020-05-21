function solve(str) {
  // find first unique char

  const map = {};

  for (let char of str.split("")) {
    map[char] = map[char] + 1 || 1;
  }

  for (let char of str.split("")) {
    if (map[char] === 1) return char;
  }

  return null;
}

console.log(solve("aabcb"));
console.log(solve("xxyz"));
