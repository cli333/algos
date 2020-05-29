// Question 2

// Given an array of meeting time intervals consisting of start and end times[[s1, e1], [s2, e2],...](si < ei), find the minimum number of conference rooms required.

// For example,

//   Given[[0, 30], [5, 10], [15, 20]],
// return 2.

// Solution

// The idea is to group those non - overlapping meetings in the same room and then count how many rooms we need.

function solve(intervals) {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const q = [intervals[0][1]];
  let maxRooms = 0;

  for (let i = 1; i < intervals.length; i++) {
    let lastEnd = q[0];
    let [nextStart, nextEnd] = intervals[i];
    while (q.length && lastEnd < nextStart) {
      q.shift();
    }
    q.push(nextEnd);
    q.sort((a, b) => (a < b ? -1 : 1));
    maxRooms = Math.max(maxRooms, q.length);
  }

  return maxRooms;
}

console.log(
  solve([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
console.log(
  solve([
    [0, 3],
    [5, 10],
    [15, 20],
  ])
);
console.log(
  solve([
    [0, 30],
    [20, 50],
    [25, 40],
  ])
);
