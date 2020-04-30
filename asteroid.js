// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its
// direction(positive meaning right, negative meaning left).Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions.If two asteroids meet, the smaller
// one will explode.If both are the same size, both will explode.Two asteroids moving in the same direction will never meet.

//   Example 1:
// Input:
// asteroids = [5, 10, -5]
// Output: [5, 10]
// Explanation:
// The 10 and - 5 collide resulting in 10.  The 5 and 10 never collide.
//   Example 2:
// Input:
// asteroids = [8, -8]
// Output: []
// Explanation:
// The 8 and - 8 collide exploding each other.

const solve = (asteroids) => {
  const stack = [];
  // if asteroid is positive push onto stack
  // if negative, handle

  for (let i = 0; i < asteroids.length; i++) {
    if (!stack.length || asteroids[i] > 0) {
      // when stack empty, can push positive or negative
      // or the asteroid is positive, can push
      stack.push(asteroids[i]);
    } else {
      while (true) {
        let peek = stack[stack.length - 1];
        // if last is negative
        if (peek < 0) {
          stack.push(asteroids[i]);
          break;
        } else if (peek === -asteroids[i]) {
          // same asteroid size, but opposite direction
          // blow up the last asteroid
          stack.pop();
          break;
        } else if (peek > -asteroids[i]) {
          // skip the incoming asteroid
          break;
        } else {
          // peek is less than the incoming asteroid
          // keep blowing them up
          stack.pop();
          if (!stack.length) {
            // stack is empty,
            // because the incoming asteroid is bigger than everything else in the stack
            stack.push(asteroids[i]);
            break;
          }
        }
      }
    }
  }
  return stack;
};

console.log(solve([5, 10, -5])); // 5, 10
console.log(solve([8, -8])); // []
console.log(solve([-8, 8])); // -8, 8
console.log(solve([8, 7, 5, 4, 2, 1, -18]));
