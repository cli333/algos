// Given a collection of intervals, merge all overlapping intervals.

//   Example 1:

// Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].
//   Example 2:

// Input: [[1, 4], [4, 5]]
// Output: [[1, 5]]
// Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.

const solve = (intervals) => {
  if (intervals.length <= 1) return intervals;

  // sort the intervals
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  const out = [];

  // while intervals.length
  // if second int is included in the first int
  // splice the second int
  // else
  // shift the first int

  // #1

  while (intervals.length > 0) {
    while (intervals[1] && intervals[0][1] >= intervals[1][0]) {
      intervals[0][1] = intervals[1][1];
      intervals.splice(1, 1);
    }
    out.push(intervals.shift());
  }

  return out;
};

console.log(
  solve([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  solve([
    [1, 4],
    [4, 5],
  ])
);
