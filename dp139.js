// In a 1 million by 1 million grid, the coordinates of each grid square are(x, y) with 0 <= x, y < 10 ^ 6.

// We start at the source square and want to reach the target square.Each move, we can walk to a 4 - directionally adjacent square in the grid that isn't in the given list of blocked squares.

// Return true if and only if it is possible to reach the target square through a sequence of moves.

//   Example 1:

// Input: blocked = [[0, 1], [1, 0]], source = [0, 0], target = [0, 2]
// Output: false
// Explanation:
// The target square is inaccessible starting from the source square, because we can't walk outside the grid.
// Example 2:

// Input: blocked = [], source = [0, 0], target = [999999, 999999]
// Output: true
// Explanation:
// Because there are no blocked cells, it's possible to reach the target square.

function sol(
  blocked = [
    [0, 1],
    [1, 0],
  ],
  source = [0, 0],
  target = [0, 2]
) {
  // mark visited positions
  // once manhattan distance between source and current is greather than 200 return true (AT MOST 200 blocked positions!)
  // check source -> target AND target -> source
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const block = new Set();
  for (let b of blocked) {
    const [x, y] = b;
    block.add(`${x}-${y}`);
  }

  return dfs(source, target) && dfs(target, source);

  function dfs(cur, target, visited = new Set()) {
    if (cur[0] === target[0] && cur[1] === target[1]) return true;
    if (Math.abs(source[0] - cur[0]) + Math.abs(source[1] - cur[1]) > 200) {
      return true;
    }

    visited.add(`${cur[0]}-${cur[1]}`);
    const [x1, y1] = cur;
    for (let d of directions) {
      const [x2, y2] = d;
      let r = x1 + x2;
      let c = y1 + y2;
      const str = `${r}-${c}`;
      if (
        r >= 0 &&
        r < 1000000 &&
        c >= 0 &&
        c < 1000000 &&
        !block.has(str) &&
        !visited.has(str)
      ) {
        if (dfs([r, c], target, visited)) return true;
      }
    }
    return false;
  }
}

console.log(sol(), false);
console.log(sol([], [0, 0], [999999, 999999]), true);
