// 93. Restore IP Addresses
// Medium

// 1625

// 545

// Add to List

// Share
// Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. You can return them in any order.

// A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and cannot have leading zeros. For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

// Example 1:

// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]
// Example 2:

// Input: s = "0000"
// Output: ["0.0.0.0"]
// Example 3:

// Input: s = "1111"
// Output: ["1.1.1.1"]
// Example 4:

// Input: s = "010010"
// Output: ["0.10.0.10","0.100.1.0"]

function s(s) {
  // valid num between 0 and 255

  const res = [];
  helper(0, []);
  return res;

  function helper(i, list) {
    if (list.length === 4 && i === s.length) {
      res.push(list.join("."));
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (j !== i && s[i] === "0") return;

      const num = Number(s.substring(i, j + 1));
      if (num > 255) return;
      list.push(num);
      helper(j + 1, list);
      list.pop();
    }
  }
}

console.log(s("25525511135"));
console.log(s("0000"));
console.log(s("010010"));
