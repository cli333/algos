// Given a set of N people(numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

// Each person may dislike some other people, and they should not go into the same group.

//   Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

// Return true if and only if it is possible to split everyone into two groups in this way.

//   Example 1:

// Input: N = 4, dislikes = [[1, 2], [1, 3], [2, 4]]
// Output: true
// Explanation: group1[1, 4], group2[2, 3]
// Example 2:

// Input: N = 3, dislikes = [[1, 2], [1, 3], [2, 3]]
// Output: false
// Example 3:

// Input: N = 5, dislikes = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]
// Output: false

console.log(
  sol(4, [
    [1, 2],
    [1, 3],
    [2, 4],
  ])
);
console.log(
  sol(3, [
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);

function sol(N, dislikes) {
  const list = {};

  for (let d of dislikes) {
    const [person1, person2] = d;
    if (!list[person1]) {
      list[person1] = [person2];
    } else {
      list[person1].push(person2);
    }

    if (!list[person2]) {
      list[person2] = [person1];
    } else {
      list[person2].push(person1);
    }
  }

  // arr of people
  // 'colored' into 2 groups of 1 or -1
  const colors = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    if (colors[i] === 0 && !dfs(1, i)) {
      return false;
    }
  }

  return true;

  function dfs(color, curPerson) {
    if (colors[curPerson] !== 0) {
      // if current person has a color and is assigned the color we want to color it
      return colors[curPerson] === color;
    }

    // assign the color
    colors[curPerson] = color;
    // current person has no dislikes
    if (!list[curPerson]) return true;
    for (let nextPerson of list[curPerson]) {
      // for each person the curPerson dislikes, color his dislikes the opposite color or -color
      if (dfs(-color, nextPerson)) return false;
    }

    return true;
  }
}
