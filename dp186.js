// longest consecutive sequence

function s(arr) {
  // o(n^3) time, => o(each element * scan left * scan right)

  const n = arr.length;
  let maxLength = 1;
  for (let num in arr) {
    let left = num;
    // find decreasing sequences
    while (arr.includes(left - 1)) {
      left--;
    }
    let right = num;
    // find increasing sequences
    while (arr.includes(right + 1)) {
      right++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(s([14, 1, 8, 4, 0, 13, 6, 9, 2, 7]));

function s2(arr) {
  // nlogn time, depends on sorting method?
  arr.sort((a, b) => (a < b ? -1 : 1));
  let maxLength = 1;
  let curLen = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      curLen++;
    } else if (arr[i] === arr[i - 1]) {
      // if dups, can still find the successor
      continue;
    } else {
      // reset
      curLen = 1;
    }
    maxLength = Math.max(maxLength, curLen);
  }
  return maxLength;
}

console.log(s2([14, 1, 8, 4, 0, 13, 6, 9, 2, 7]));
console.log(s2([-1, 1, 2, 3, 5]));
