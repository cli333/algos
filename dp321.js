// 56. Merge Intervals
// Medium

// 6870

// 370

// Add to List

// Share
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

function s(intervals) {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const res = [];
  for (let interval of intervals) {
    console.log(res);
    if (!res.length) {
      res.push(interval);
    } else if (res[res.length - 1][1] < interval[0]) {
      res.push(interval);
    } else {
      const last = res.pop();
      res.push([last[0], Math.max(last[1], interval[1])]);
    }
  }
  return res;
}

console.log(
  s([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  s([
    [1, 4],
    [2, 3],
  ])
);
