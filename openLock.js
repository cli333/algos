/*
You have a lock in front of you with 4 circular wheels.Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'.The wheels can 
rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'.Each move consists of turning one wheel one slot.

The lock initially starts at '0000', a string representing the state of the 4 wheels.
You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.
Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or - 1 if it is impossible.

Example 1:
Input: deadends = ["0201", "0101", "0102", "1212", "2002"], target = "0202"
Output: 6
Explanation:
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".

Example 2:
Input: deadends = ["8888"], target = "0009"
Output: 1
Explanation:
We can turn the last wheel in reverse to move from "0000" -> "0009".

Example 3:
Input: deadends = ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], target = "8888"
Output: -1
Explanation:
We can't reach the target without getting stuck.

*/

// bfs solution?
// start at 0000, push to queue
// queue.shift() = combo
// for each digit in combo, increment and decrement it
// 0000 => 1000, 9000
// push to queue, check if each

const openLock = (deadends, target) => {
  const dead_ends = deadends.reduce((a, b) => {
    a[b] = true;
    return a;
  }, {});
  // start at '0000'
  const visited = { "0000": true };
  const queue = ["0000"];

  let moves = 0;

  while (queue.length) {
    let size = queue.length;

    while (size > 0) {
      // 'pop' off
      let lock_position = queue.shift();
      // if it's a dead end, continue
      if (dead_ends[lock_position]) {
        size--;
        continue;
      }
      // found target, return moves
      if (lock_position === target) {
        return moves;
      }
      let combo = lock_position;
      for (let i = 0; i < 4; i++) {
        const current_position = combo[i];
        // for each position increment and decrement
        // push the 'combo' to the queue
        //
        // increment the lock
        let s1 =
          combo.substring(0, i) +
          (current_position === "9"
            ? "0"
            : String(Number(current_position) + 1)) +
          combo.substring(i + 1);
        // decrement the lock
        let s2 =
          combo.substring(0, i) +
          (current_position === "0"
            ? "9"
            : String(Number(current_position) - 1)) +
          combo.substring(i + 1);
        // if, not visited and not a dead end
        //  push to queue, mark visisted
        if (!visited[s1] && !dead_ends[s1]) {
          queue.push(s1);
          visited[s1] = true;
        }
        if (!visited[s2] && !dead_ends[s2]) {
          queue.push(s2);
          visited[s2] = true;
        }
      }
      size--;
    }
    // whenever inner loop is run, increment the moves
    moves++;
  }
  return -1;
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202")); // 6
console.log(openLock(["8888"], "0009")); // 1
console.log(
  openLock(
    ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"],
    "8888"
  )
); // -1

const open2 = (deadends, target) => {
  let dead = deadends.reduce((a, b) => {
    a[b] = true;
    return a;
  }, {});
  const q = ["0000"];
  const visited = { "0000": true };
  let moves = 0;

  while (q.length) {
    let size = q.length;
    while (size > 0) {
      let currentCombo = q.shift();
      if (dead[currentCombo]) {
        size--;
        continue;
      }
      if (currentCombo === target) {
        return moves;
      }
      for (let i = 0; i < 4; i++) {
        let s1 =
          currentCombo.substring(0, i) +
          (currentCombo[i] === "9"
            ? "0"
            : String(Number(currentCombo[i]) + 1)) +
          currentCombo.substring(i + 1);
        let s2 =
          currentCombo.substring(0, i) +
          (currentCombo[i] === "0"
            ? "9"
            : String(Number(currentCombo[i]) - 1)) +
          currentCombo.substring(i + 1);
        if (!visited[s1] && !dead[s1]) {
          q.push(s1);
          visited[s1] = true;
        }
        if (!visited[s2] && !dead[s2]) {
          q.push(s2);
          visited[s2] = true;
        }
      }
      size--;
    }
    moves++;
  }

  return -1;
};

console.log(open2(["0201", "0101", "0102", "1212", "2002"], "0202")); // 6
