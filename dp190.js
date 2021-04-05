/* 
given an arr of intervals an new interval
insert the interval and merge if necessary
arr is non-overlapping and sorted by starting time
*/

function s(intervals, newInterval) {
  const out = [];
  let i = 0;
  // move through ints until reach
  // while ending point of old int is less than starting point of new int
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    out.push(intervals[i]);
    i++;
  }
  // merge ints
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  // push the merged int
  out.push(newInterval);
  // push the rest
  while (i < intervals.length) {
    out.push(intervals[i]);
    i++;
  }

  return out;
}

console.log(
  s(
    [
      [1, 3],
      [4, 7],
      [8, 10],
      [12, 15],
      [16, 17],
      [18, 20],
      [21, 25],
      [28, 29],
    ],
    [9, 18]
  )
);
