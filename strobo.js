// A strobogrammatic number is a number that looks the same when rotated 180 degrees(looked at upside down).

// Write a function to determine if a number is strobogrammatic.The number is represented as a string.

// For example, the numbers "69", "88", and "818" are all strobogrammatic.

function solve(s) {
  const map = {
    "0": "0",
    "1": "1",
    "6": "9",
    "8": "8",
    "9": "6",
  };

  let a = 0;
  let b = s.length - 1;

  while (a < b) {
    const charA = s[a];
    const charB = s[b];

    if (map[charA] !== charB) return false;

    a++;
    b--;
  }

  return true;
}

console.log(solve("69"));
console.log(solve("818"));
