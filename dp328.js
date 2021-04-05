// time complexity examples
/* 
    for (let i=1; i < n; i *= 2) {
        stmt;
    }
    goes on like this:
    1 * 2 = 2
    2 * 2 = 2^2
    2^2 * 2 = 2^3
    ...
    ...
    2^k times

    assume i >= n
    i = 2^k
    2^k >= n
    k = log2(n)

    ~~~~~

    for (let i=1; i < n; i *= 2) {
        stmt;
    }
    i= 1 * 2 * 2 * 2 * .... = n
        2^k = n
        k = log2(n)
        o(log2(n))

    ~~~~~~

    for (let i=1; i < n; i++) {
        stmt;
    }
    i = 1 + 1 + 1 + 1 .... = n
        k = n
        o(n)


    ~~~~~~

    for (let i=n; i >= 1; i /= 2) {
        stmt;
    }
    n/2 => n/2^2 => n/2^3 ... = 1
        n/2^k = 1
        2^k = n
        k = log2(n)


    ~~~~~~

    for (let i=0; i * i < n; i++) {
        stmt
    }
    i * i < n
    i^2 = n
    i = root(n)

    ~~~~~~
    let p = 0
    for (let i=1; i < n; i *= 2) {
        p++                             => p = log2(n)
    }
    for (let i=1; i < p; i *= 2) {
        stmt;                           => i = log2(p)
    }

                                        ====> log2(log2(n))

    ~~~~~~~

    for (let i=0; i < n; i++)            => o(n)
    for (let i=0; i < n; i+=2)           => n/2 = o(n)
    for (let i=0; i < n; i+=3)           => n/3 = o(n)
    for (let i=0; i < n; i*=2)           => o(log2(n))
    for (let i=0; i < n; i*=3)           => o(log3(n))
    for (let i=0; i < n; i/=2)           => o(log2(n))

*/

// divide and conquer

// min and max
function s(arr) {
  let t1 = 0;
  const { min, max } = helper(arr);
  //   console.log(arr.length);
  return { min, max, t1 };

  function helper(arr) {
    t1++;
    if (arr.length === 1) return { min: arr[0], max: arr[0] };
    const m = Math.floor(arr.length / 2);
    const left = helper(arr.slice(0, m));
    const right = helper(arr.slice(m));
    const min = Math.min(left.min, right.min);
    const max = Math.max(left.max, right.max);
    return { min, max };
  }
}

console.log(s([1]));
console.log(s([1, 2]));
console.log(s([1, 2, 3]));
console.log(s([1, 2, 3, 0]));
console.log(s([1, 2, 3, 0, -1]));
console.log(s([1, 2, 3, 0, -1, 5]));
console.log(s([1, 2, 3, 0, -1, 5, -100]));
console.log(s([1, 2, 3, 0, -1, 5, -100, 20]));
console.log(s([1, 2, 3, 0, -1, 5, -100, 20, 60]));

// max subarray
function s2(arr) {
  //   let cur = arr[0];
  //   let max = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (cur < 0) {
  //       cur = 0;
  //     }
  //     cur += arr[i];
  //     max = Math.max(max, cur);
  //   }
  //   return max;

  return helper(0, arr.length - 1);

  function helper(l, r) {
    // divide and conquer
    // find max on left
    // find max on right
    // find max crossing from left to right, find max from mid to l (<-), find max from mid to r (->)
    // return max(maxLeft, maxRight, maxCrossing = maxLeft + maxRight)
    /* 
        if p === r return a[p]                  base case
        q = (p+r)/2                             divide time, theta(1)
        l = maxSubarray(p, q)                   T(n/2)
        r = maxSubarray(q, r)                   T(n/2)
        c = maxCrossing(p, q, r)                theta(n)
        return max(l, r, c)                     constant

        => 2T(n/2) + theta(n)
        same as merge sort, nlogn
    */
    if (l === r) return arr[l];
    const m = Math.floor((l + r) / 2);
    const leftMax = helper(l, m);
    const rightMax = helper(m + 1, r);
    const crossMax = crossing(l, m, r);
    return Math.max(leftMax, rightMax, crossMax);
  }

  function crossing(l, m, r) {
    if (l === r) return arr[l];
    let leftMax = 0;
    let leftCur = 0;
    for (let i = m; i >= l; i--) {
      leftCur += arr[i];
      leftMax = Math.max(leftMax, leftCur);
    }
    let rightMax = 0;
    let rightCur = 0;
    for (let i = m + 1; i <= r; i++) {
      rightCur += arr[i];
      rightMax = Math.max(rightMax, rightCur);
    }
    return leftMax + rightMax;
  }
}

console.log(s2([-1, 3, 4, -5, 9, -2]));
console.log(s2([-2, -5, 6, -2, -3, 1, 5, -6]));

function s3(arr) {
  return helper(0, arr.length - 1);

  function helper(l, r) {
    if (l === r) return { sum: arr[l], leftIdx: l, rightIdx: r };
    const m = Math.floor((l + r) / 2);
    const left = helper(l, m);
    const right = helper(m + 1, r);
    const cross = crossing(l, m, r);
    if (cross.sum > left.sum && cross.sum > right.sum) {
      return {
        sum: cross.sum,
        leftIdx: cross.leftIdx,
        rightIdx: cross.rightIdx,
      };
    } else if (left.sum > cross.sum && left.sum > right.sum) {
      return {
        sum: left.sum,
        leftIdx: left.leftIdx,
        rightIdx: left.rightIdx,
      };
    } else {
      return {
        sum: right.sum,
        leftIdx: right.leftIdx,
        rightIdx: right.rightIdx,
      };
    }
  }

  function crossing(l, m, r) {
    if (l === r) return { sum: arr[l], leftIdx: l, rightIdx: r };
    let leftMax = 0;
    let leftCur = 0;
    let leftIdx;
    for (let i = m; i >= l; i--) {
      leftCur += arr[i];
      if (leftCur > leftMax) {
        leftMax = leftCur;
        leftIdx = i;
      }
    }
    let rightMax = 0;
    let rightCur = 0;
    let rightIdx;
    for (let i = m + 1; i <= r; i++) {
      rightCur += arr[i];
      if (rightCur > rightMax) {
        rightMax = rightCur;
        rightIdx = i;
      }
    }
    return { sum: leftMax + rightMax, leftIdx, rightIdx };
  }
}

console.log(s3([-1, 3, 4, -5, 9, -2]));
console.log(s3([-2, -5, 6, -2, -3, 1, 5, -6]));
