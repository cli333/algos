// 247. Strobogrammatic Number II
// A strobogrammatic number is a number that looks the same when rotated 180 degrees(looked at upside down).
// Find all strobogrammatic numbers that are of length = n.
// For example,
//   Given n = 2, return ["11", "69", "88", "96"].

function sol(n) {
  const dict = {
    "0": "0",
    "1": "1",
    "6": "9",
    "9": "6",
    "8": "8",
  };

  const res = [];
  helper([], 0, n - 1);
  return res;

  function helper(list, start, end) {
    if (start > end) {
      if (list[0] !== "0") {
        res.push(list.join(""));
      }
      return;
    }

    for (let char in dict) {
      // if have reached middle char and the current char is not 0,1 or 8, skip this char
      if (start === end && dict[char] !== char) continue;
      list[start] = char;
      list[end] = dict[char];
      helper(list, start + 1, end - 1);
    }
  }
}

console.log(sol(2));
console.log(sol(3));
