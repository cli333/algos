// 57. Insert Interval
// Medium

// 2723

// 238

// Add to List

// Share
// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
// Example 3:

// Input: intervals = [], newInterval = [5,7]
// Output: [[5,7]]
// Example 4:

// Input: intervals = [[1,5]], newInterval = [2,3]
// Output: [[1,5]]

function s(intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const res = [];
  for (let interval of intervals) {
    if (!res.length || (res.length && res[res.length - 1][1] < interval[0])) {
      res.push(interval);
    } else {
      const last = res.pop();
      res.push([last[0], Math.max(last[1], interval[1])]);
    }
  }
  return res;
}

console.log(
  s(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);

console.log(
  s(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
