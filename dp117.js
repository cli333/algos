// Given an array of meeting time intervals consisting of start and end times[[s1, e1], [s2, e2],...](si < ei), find the minimum number of conference rooms required.

//   Example 1:
// Input: [[0, 30], [5, 10], [15, 20]]
// Output: 2

// Example 2:
// Input: [[7, 10], [2, 4]]
// Output: 1

function sol(intervals) {
  // sort by start times
  intervals.sort(([s1], [s2]) => (s1 < s2 ? -1 : 1));
  const q = [intervals.shift()];
  let max = 1;
  while (intervals.length) {
    const newMeet = intervals.shift();
    const [s2, e2] = newMeet;
    const firstmeet = q.shift();
    const [s1, e1] = firstmeet;
    if (e1 > s2) q.push(firstmeet);
    q.push(newMeet);
    console.log(q);
    max = Math.max(max, q.length);
    // sort by ending time
    q.sort((a, b) => (a[1] < b[1] ? -1 : 1));
  }
  return max;
}

console.log(
  sol([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
  String(2)
);
console.log(
  sol([
    [7, 10],
    [2, 4],
  ]),
  String(1)
);
console.log(
  sol([
    [0, 30],
    [1, 2],
    [5, 6],
    [5, 7],
  ]),
  String(3)
);
