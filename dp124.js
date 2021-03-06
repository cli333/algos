// The demons had captured the princess(P) and imprisoned her in the bottom - right corner of a dungeon.The dungeon consists of M x N rooms laid out in a 2D grid.Our valiant knight(K) was initially positioned in the top - left room and must fight his way through the dungeon to rescue the princess.

// The knight has an initial health point represented by a positive integer.If at any point his health point drops to 0 or below, he dies immediately.

// Some of the rooms are guarded by demons, so the knight loses health(negative integers) upon entering these rooms; other rooms are either empty(0's) or contain magic orbs that increase the knight's health(positive integers).

// In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

// Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.

// For example, given the dungeon below, the initial health of the knight must be at least 7 if he follows the optimal path RIGHT -> RIGHT -> DOWN -> DOWN.

//    - 2(K)    - 3	    3
//      - 5     - 10	   1
//      10	     30   - 5(P)

function sol(dungeon, knight, princess) {
  // can only go right or down
  let i = 0;
  while (true) {
    i++;
    if (trav(i, knight)) return i;
  }

  function trav(health, position) {
    const [a, b] = position;
    health += dungeon[a][b];
    if (!health || health <= 0 || !dungeon[a] || !dungeon[a][b]) return false;
    if (a === princess[0] && b === princess[1]) return true;
    return trav(health, [a + 1, b]) || trav(health, [a, b + 1]);
  }
}

function sol2(dungeon, knight, princess) {
  // dynamic programming
  // start at princess cell, start at health = 1
  // and work back to knight's cell
  const m = dungeon.length;
  const n = dungeon[0].length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    const row = [];
    for (let j = 0; j <= n; j++) {
      row.push(Infinity);
    }
    dp.push(row);
  }
  // fill left and right
  dp[m][n - 1] = 1;
  dp[m - 1][n] = 1;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let minHp = Math.min(dp[i + 1][j], dp[i][j + 1]);
      minHp -= dungeon[i][j];
      if (minHp < 1) {
        // gains health in room, is a positive number
        // min health needed in this room is 1
        dp[i][j] = 1;
      } else {
        // lose health in room, negative number
        dp[i][j] = minHp;
      }
    }
  }

  console.log(dp);

  return dp[knight[0]][knight[1]];
}

console.log(
  sol(
    [
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5],
    ],
    [0, 0],
    [2, 2]
  ),
  7
); // RIGHT-> RIGHT -> DOWN -> DOWN.

console.log(
  sol2(
    [
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5],
    ],
    [0, 0],
    [2, 2]
  ),
  7
);

function s(dungeon) {
  // start top left
  // only go right and bottom
  // end at bottom right
  // find health needed to reach end
  const rows = dungeon.length;
  const cols = dungeon[0].length;

  let health = 0;
  while (true) {
    health++;
    if (helper(health, 0, 0)) return health;
  }

  function helper(health, r, c) {
    health += dungeon[r][c];
    if (!health || health <= 0) return false;
    if (r === rows - 1 && c === cols - 1) return true;
    if (r === rows - 1) return helper(health, r, c + 1);
    if (c === cols - 1) return helper(health, r + 1, c);
    return helper(r + 1, c) || helper(health, r, c + 1);
  }
}

function s2(dungeon) {
  const dp = [];
  const rows = dungeon.length;
  const cols = dungeon[0].length;
  for (let i = 0; i <= rows; i++) {
    const row = [];
    for (let j = 0; j <= cols; j++) {
      row.push(Infinity);
    }
    dp.push(row);
  }
  dp[rows][cols - 1] = 1;
  dp[rows - 1][cols] = 1;
  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {
      let minHp = Math.min(dp[r + 1][c], dp[r][c + 1]);
      minHp -= dungeon[r][c];
      if (minHp < 1) {
        dp[r][c] = 1;
      } else {
        dp[r][c] = minHp;
      }
    }
  }
  return dp[0][0];
}

console.log(
  s([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ]),
  7
);

console.log(
  s2([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ]),
  7
);
