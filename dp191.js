// given an array of intervals, merge them

function s(intervals) {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const out = [];
  for (let interval of intervals) {
    if (!out.length) {
      out.push(interval);
      continue;
    }
    const lastInterval = out[out.length - 1];
    if (lastInterval[1] >= interval[0]) {
      lastInterval[1] = Math.max(lastInterval[1], interval[1]);
      continue;
    }
    out.push(interval);
  }
  return out;
}

console.log(
  s([
    [1, 4],
    [5, 8],
    [7, 10],
    [9, 13],
    [14, 16],
    [16, 20],
    [17, 19],
  ])
);

function s2(intervals) {
  intervals.sort((a, b) => (a[0] < b[0] ? 1 : 1));

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      // update the next interval
      intervals[i + 1][0] = Math.min(intervals[i + 1][0], intervals[i][0]);
      intervals[i + 1][1] = Math.max(intervals[i + 1][1], intervals[i][1]);
      // set the prev interval to empty arr
      intervals[i] = [];
    }
  }

  // return non empty intervals
  return intervals.filter((interval) => interval.length);
}

console.log(
  s2([
    [1, 4],
    [5, 8],
    [7, 10],
    [9, 13],
    [14, 16],
    [16, 20],
    [17, 19],
  ])
);
