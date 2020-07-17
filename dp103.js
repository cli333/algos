// A strobogrammatic number is a number that looks the same when rotated 180 degrees(looked at upside down).
// Find all strobogrammatic numbers that are of length = n.
// For example, Given n = 2, return ["11", "69", "88", "96"].

function sol(n) {
  const map = {
    "0": "0",
    "1": "1",
    "6": "9",
    "8": "8",
    "9": "6",
  };
  const res = [];
  helper(Array(n), 0, n - 1);
  return res;

  function helper(curList, lo, hi) {
    if (lo > hi) {
      if (curList[0] != 0) res.push(curList.join(""));
      return;
    }

    for (let c in map) {
      if (lo === hi && c !== map[c]) continue;
      curList[lo] = c;
      curList[hi] = map[c];
      helper(curList, lo + 1, hi - 1);
      curList[lo] = null;
      curList[hi] = null;
    }
  }
}

console.log(sol(3), sol(4));
