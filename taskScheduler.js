// Given a char array representing tasks CPU need to do.It contains capital letters A to Z where different letters represent
// different tasks.Tasks could be done without original order.Each task could be done in one interval.For each interval, CPU could finish one task or just be idle.

//   However, there is a non - negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

// You need to return the least number of intervals the CPU will take to finish all the given tasks.

//   Example:

// Input: tasks = ["A", "A", "A", "B", "B", "B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.

const solve = (tasks, n) => {
  // frequency map
  const map = tasks.reduce((a, b) => ({ ...a, [b]: a[b] + 1 || 1 }), {});

  // sort task from least frequent -> most frequent
  const arr = Object.values(map).sort((a, b) => (a < b ? -1 : 1));
  // find most frequent task
  // subtract one because dont' need to wait for any  additional tasks
  // eg. a-b-idle-a-b-idle-a-b, (only 5 non 'a' tasks, not 6)
  const max = arr[arr.length - 1] - 1;
  let idleSlots = max * n;

  // loop backwards from the second to last task
  for (let i = arr.length - 2; i >= 0; i--) {
    // fill up idle slots with tasks
    // loop through tasks and subtract values from the idle slots
    idleSlots -= Math.min(arr[i], max);
  }

  // if leftover idle slots add that to the number of tasks else return just the number of tasks
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};

console.log(solve(["A", "A", "A", "B", "B", "B"], 2));
console.log(solve(["A", "A", "A", "B", "B", "B", "C"], 2));
console.log(solve(["A", "A", "A", "B", "B", "B", "C", "C", "C"], 2));
