// Given an array of meeting time intervals consisting of start and end times[[s1, e1], [s2, e2],...](si < ei), find the minimum number of conference rooms required.

// For example, Given[[0, 30], [5, 10], [15, 20]], return 2.

// [[7,10],[2,4]], 1

function solve(intervals) {
  if (!intervals.length) return 0;

  // sort intervals by start times

  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  let rooms = 0;
  let q = [];
  const [_, end] = intervals[0];
  // add earliest meeting's end time to q
  q.push(end);

  for (let i = 1; i < intervals.length; i++) {
    // if q[0]'s end time < next meeting's start time, remove q[0]
    while (q.length && q[0] < intervals[i][0]) {
      q.shift();
    }

    // push the next meeting's end time onto the q
    q.push(intervals[i][1]);
    // sort the q again by earliest end time
    q.sort((a, b) => (a < b ? -1 : 1));
    // max = maxinum of simultaneous meetings or number of items on the queue
    rooms = Math.max(rooms, q.length);
  }

  return rooms;
}

function solve2(intervals) {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const q = [intervals[0][1]];
  let rooms = 0;

  for (let i = 1; i < intervals.length; i++) {
    while (q.length && q[0] < intervals[i][0]) {
      q.shift();
    }
    q.push(intervals[i][1]);
    q.sort((a, b) => (a < b ? -1 : 1));
    rooms = Math.max(rooms, q.length);
  }

  return rooms;
}

console.log(
  solve2([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
); // 2
console.log(
  solve2([
    [7, 10],
    [2, 4],
  ])
); // 1
console.log(
  solve([
    [0, 30],
    [20, 50],
    [25, 40],
  ])
);
