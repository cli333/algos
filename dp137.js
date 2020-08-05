// Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

// Example 1:

// Input: [[1,1],[2,2],[3,3]]
// Output: 3
// Explanation:
// ^
// |
// |        o
// |     o
// |  o
// +------------->
// 0  1  2  3  4
// Example 2:

// Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4
// Explanation:
// ^
// |
// |  o
// |     o        o
// |        o
// |  o        o
// +------------------->
// 0  1  2  3  4  5  6

function sol(points) {
  const n = points.length;
  const set = new Set();
  let MAX = 1;

  for (let i = 0; i < n; i++) {
    if (!set.has(`${points[i][0]} - ${points[i][1]}`)) {
      const a = points[i];
      const map = {};
      let max = 1;

      for (let j = i + 1; j < n; j++) {
        // check if duplicate
        if (isSame(a, points[j])) {
          max++;
          continue;
        }

        const slope = getSlope(a, points[j]);
        map[slope] ? map[slope]++ : (map[slope] = 2);
        max = Math.max(max, map[slope]);
      }

      set.add(`${a[0]} - ${a[1]}`);
      MAX = Math.max(MAX, max);
    }
  }

  return MAX;

  function isSame(a, b) {
    return a[1] === b[1] && a[0] === b[0];
  }

  function getSlope(a, b) {
    if (a[0] === b[0]) return Infinity;
    if (a[1] === b[1]) return 0;
    return (a[0] - b[0]) / (a[1] - b[1]);
  }
}

console.log(
  sol([
    [1, 1],
    [2, 2],
    [3, 3],
  ]),
  3
);
console.log(
  sol([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ]),
  4
);
