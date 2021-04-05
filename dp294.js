// 174. Dungeon Game
// Hard

// 2225

// 47

// Add to List

// Share
// The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of m x n rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight his way through dungeon to rescue the princess.

// The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

// Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers).

// To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

// Return the knight's minimum initial health so that he can rescue the princess.

// Note that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

// Example 1:

// Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
// Output: 7
// Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-> RIGHT -> DOWN -> DOWN.

function s(dungeon) {
  for (let i = 1; i < Infinity; i++) {
    if (helper(i, 0, 0)) return i;
  }

  function helper(health, row, col) {
    health += dungeon[row][col];
    if (health <= 0 || !dungeon[row] || !dungeon[row][col]) return false;
    if (row === dungeon.length - 1 && col === dungeon[0].length - 1)
      return true;
    return helper(health, row + 1, col) || helper(health, row, col + 1);
  }
}

function s2(dungeon) {
  const r = dungeon.length - 1;
  const c = dungeon[0].length - 1;
  const dp = [];
  for (let i = 0; i <= r; i++) {
    dp.push(Array(c));
  }
  dp[r][c] = dungeon[r][c] > 0 ? 1 : 1 - dungeon[r][c];
  for (let i = r - 1; i >= 0; i--) {
    // prev calculated cell - current cell
    // if calculated val is negative, the current cell must be positive
    // so min health needed will be 1
    // if current is negative, the helath needed will be prev cell - curr cell
    dp[i][c] = Math.max(dp[i + 1][c] - dungeon[i][c], 1);
  }
  for (let i = c - 1; i >= 0; i--) {
    dp[r][i] = Math.max(dp[r][i + 1] - dungeon[r][i], 1);
  }
  for (let i = r - 1; i >= 0; i--) {
    for (let j = c - 1; j >= 0; j--) {
      const min = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];
      dp[i][j] = Math.max(1, min);
    }
  }

  return dp;
}

// console.log(
//   s([
//     [-2, -3, 3],
//     [-5, -10, 1],
//     [10, 30, -5],
//   ])
// );
console.log(
  s2([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ])
);
