// Given a sorted integer array that does not contain any duplicates, return a summary of the number ranges it contains.

//   Example

// For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be composeRanges(nums) = ["-1->2", "6->7", "9"].
//   Hints

// push()
// Input / Output

// [execution time limit]5 seconds(ts)

// [input] array.integer nums A sorted array of unique integers.

// Guaranteed constraints:

// 0 ≤ nums.length ≤ 15, (231 - 1) ≤ nums[i]≤ 231 - 1.

// [output] array.string

function solve(nums) {
  // nums.sort((a, b) => (a < b ? -1 : 1));
  // const out = [];
  // let i = 0;

  // while (i < nums.length) {
  //   let str = `${nums[i]}`;
  //   let bool = false;
  //   while (nums[i] === nums[i + 1] - 1) {
  //     bool = true;
  //     i++;
  //   }
  //   str += bool ? `->${nums[i]}` : "";
  //   out.push(str);
  //   i++;
  // }
  // return out;

  const out = [{ start: nums[0], end: nums[0] }];

  for (let i = 1; i < nums.length; i++) {
    if (out[out.length - 1].end === nums[i] - 1) {
      out[out.length - 1].end = nums[i];
    } else {
      out.push({ start: nums[i], end: nums[i] });
    }
  }

  return out.map(({ start, end }) =>
    start === end ? `${start}` : `${start}->${end}`
  );
}

console.log(solve([-1, 0, 1, 2, 6, 7, 9])); //  ["-1->2", "6->7", "9"]
