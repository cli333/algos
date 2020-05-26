// A frog is crossing a river.The river is divided into x units and at each unit there may or may not exist a stone.The frog can jump on a stone, but it must not jump into the water.

// Given a list of stones' positions (in units) in sorted ascending order, determine if the frog is able to cross the river by landing on the last stone. Initially, the frog is on the first stone and assume the first jump must be 1 unit.

// If the frog's last jump was k units, then its next jump must be either k - 1, k, or k + 1 units. Note that the frog can only jump in the forward direction.

// Note:

// The number of stones is ≥ 2 and is < 1, 100.
// Each stone's position will be a non-negative integer < 231.
// The first stone's position is always 0.
// Example 1:

// [0, 1, 3, 5, 6, 8, 12, 17]

// There are a total of 8 stones.
// The first stone at the 0th unit, second stone at the 1st unit,
//   third stone at the 3rd unit, and so on...
// The last stone at the 17th unit.

// Return true.The frog can jump to the last stone by jumping
// 1 unit to the 2nd stone,
// 2 units to the 3rd stone, then
// 2 units to the 4th stone,
// 3 units to the 6th stone,
// 4 units to the 7th stone,
// 5 units to the 8th stone.
//     Example 2:

// [0, 1, 2, 3, 4, 8, 9, 11]

// Return false.There is no way to jump to the last stone as
//   the gap between the 5th and 6th stone is too large.

function solve(stones) {
  const stoneMap = stones.reduce((acc, val) => ({ ...acc, [val]: true }), {});

  let lastStone = stones[stones.length - 1];
  // use two stacks for positions and jumps
  const positions = [];
  // current positoin
  positions.push(0);
  const jumps = [];
  // first jump is always 1
  jumps.push(1);

  while (positions.length) {
    const position = positions.pop();
    const jump = jumps.pop();
    // for 3 posibilities, k-1, k, k+1
    for (let i = jump - 1; i <= jump + 1; i++) {
      if (i < 1) continue;
      const nextPosition = position + i;
      if (nextPosition === lastStone) {
        return true;
      } else if (stoneMap[nextPosition]) {
        positions.push(nextPosition);
        jumps.push(i);
      }
    }
  }

  return false;
}

function solve2(stones) {
  const stonePositions = stones.reduce(
    (acc, val) => ({ ...acc, [val]: true }),
    {}
  );
  // first position/jump always 0/1
  const positions = [0];
  const jumps = [1];

  while (positions.length) {
    const lastPosition = positions.pop();
    const lastJump = jumps.pop();
    for (let i = lastJump - 1; i <= lastJump + 1; i++) {
      const nextPosition = lastPosition + i;
      if (i < 1) continue;
      if (nextPosition === stones[stones.length - 1]) {
        return true;
      } else if (nextPosition in stonePositions) {
        positions.push(nextPosition);
        jumps.push(i);
      }
    }
  }
  return false;
}

console.log(solve2([0, 1, 3, 5, 6, 8, 12, 17])); // true
console.log(solve2([0, 1, 2, 3, 4, 8, 9, 11])); // false
