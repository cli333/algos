// longest increasing subsequence

function s(arr) {
  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    res = Math.max(res, helper(i));
  }
  return res;

  function helper(idx) {
    if (idx >= arr.length) {
      return 0;
    }
    let len = 1;
    for (let i = idx; i < arr.length; i++) {
      if (arr[idx] < arr[i]) {
        len = Math.max(len, 1 + helper(i));
      }
    }
    return len;
  }
}

console.log(s([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]));

function s2(arr) {
  const n = arr.length;
  const dp = Array(n).fill(1);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(s2([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]));

function s3(arr) {
  // o(nlogn)
  const n = arr.length;
  const subsequence = [arr[0]];
  const res = {};

  res[1] = subsequence.slice();

  for (let i = 1; i < n; i++) {
    /* 
    1: [ 0 ]                    => 0
      [ 0, 8 ]
    2: [ 0, 4 ]                 => 4
      [ 0, 4, 12 ]
      [ 0, 2, 12 ]
      [ 0, 2, 10 ]
    3: [ 0, 2, 6 ]              => 6
      [ 0, 2, 6, 14 ]
      [ 0, 1, 6, 14 ]
      [ 0, 1, 6, 9 ]
    4: [ 0, 1, 5, 9 ]           => 9
      [ 0, 1, 5, 9, 13 ]
      [ 0, 1, 3, 9, 13 ]
      [ 0, 1, 3, 9, 11 ]
    5: [ 0, 1, 3, 7, 11 ]       => 11
    6: [ 0, 1, 3, 7, 11, 15 ]   => 15

    0 -> 4 -> 6 -> 9 -> 11 -> 15

    Min(last digit of each sequence of a certain length) = the actual sequence

    if, cur number greater than last number in the subsequence, push
    else, find index of next greatest number and replace

    won't return actual subsequence but will return the correct length
    */
    if (arr[i] <= subsequence[0]) {
      subsequence[0] = arr[i];
    } else if (arr[i] > subsequence[subsequence.length - 1]) {
      subsequence.push(arr[i]);
    } else {
      subsequence[binarySearch(arr[i])] = arr[i];
    }

    // just to generate the actual subsequence
    // UNECESSARY
    const key = subsequence.length;
    if (key in res) {
      const lastLast = res[key][res[key].length - 1];
      const curLast = subsequence[subsequence.length - 1];
      if (curLast < lastLast) {
        res[key] = subsequence.slice();
      }
    } else {
      res[key] = subsequence.slice();
    }
  }

  return { length: subsequence.length, res };

  function binarySearch(num) {
    let left = 0;
    let right = subsequence.length - 1;
    while (left < right - 1) {
      const mid = Math.floor((left + right) / 2);
      if (num === subsequence[mid]) {
        return mid;
      } else if (num < subsequence[mid]) {
        right = mid;
      } else {
        left = mid;
      }
    }
    return right;
  }
}

console.log(s3([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]));
