// Question 1

// Given an array of meeting time intervals consisting of start and end times[[s1, e1], [s2, e2],...](si < ei), determine if a person could attend all meetings.

// For example,

//   Given[[0, 30], [5, 10], [15, 20]],
// return false.

//   Solution

// The idea is pretty simple: first we sort the intervals in the ascending order of start; then we check for the overlapping of each pair of neighboring intervals.If they do, then return false; after we finish all the checks and have not returned false, just return true.

// Sorting takes O(nlogn) time and the overlapping checks take O(n) time, so this idea is O(nlogn) time in total.

function solve(intervals) {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  for (let i = 1; i < intervals.length; i++) {
    if (isOverlap(intervals[i - 1], intervals[i])) return false;
  }
  return true;

  function isOverlap(int1, int2) {
    let [start1, end1] = int1;
    let [start2, end2] = int2;
    return end1 > start2;
  }
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
