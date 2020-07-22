// Given a collection of intervals, merge all overlapping intervals.

//   Example 1:

// Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].
//   Example 2:

// Input: [[1, 4], [4, 5]]
// Output: [[1, 5]]
// Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.

function sol(intervals) {
  intervals.sort(([startA], [startB]) => (startA < startB ? -1 : 1));
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, newEnd] = intervals[i];
    const [_, oldEnd] = res[res.length - 1];
    if (start <= oldEnd) {
      res[res.length - 1][1] = newEnd;
    } else {
      res.push(intervals[i]);
    }
  }

  return res;
}

console.log(
  sol([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
  [
    [1, 6],
    [8, 10],
    [15, 18],
  ]
);

console.log(
  sol([
    [1, 4],
    [4, 5],
  ]),
  [[1, 5]]
);
