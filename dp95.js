// Given a non - negative integer, you could swap two digits at most once to get the maximum valued number.Return the maximum valued number you could get.

//   Example 1:
// Input: 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.
// Example 2:
// Input: 9973
// Output: 9973
// Explanation: No swap.

function sol(num) {
  const numChars = String(num).split("");
  const lastIndex = Array(10);

  for (let i = 0; i < numChars.length; i++) {
    lastIndex[Number(numChars[i])] = i;
  }

  for (let i = 0; i < numChars.length; i++) {
    for (let d = 9; d > Number(numChars[i]); d--) {
      if (lastIndex[d] > i) {
        swap(lastIndex[d], i);
        return Number(numChars.join(""));
      }
    }
  }

  return num;

  function swap(i, j) {
    const tmp = numChars[i];
    numChars[i] = numChars[j];
    numChars[j] = tmp;
  }
}

console.log(sol(2736));
console.log(sol(9973));
