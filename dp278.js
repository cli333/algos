// 654. Maximum Binary Tree
// Medium

// 2365

// 268

// Add to List

// Share
// You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

// Create a root node whose value is the maximum value in nums.
// Recursively build the left subtree on the subarray prefix to the left of the maximum value.
// Recursively build the right subtree on the subarray suffix to the right of the maximum value.
// Return the maximum binary tree built from nums.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function s(nums) {
  // stack solution
  const stack = [];
  for (let num of nums) {
    const node = new Node(num);
    while (stack.length && stack[stack.length - 1].val < node.val) {
      node.left = stack[stack.length - 1];
      stack.pop();
    }
    if (stack.length) {
      stack[stack.length - 1].right = node;
    }
    stack.push(node);
  }
  while (stack.length > 1) {
    stack.pop();
  }
  return stack[stack.length - 1];

  //   return helper(0, nums.length);

  //   function helper(lo, hi) {
  //     if (lo === hi) return null;
  //     const idx = max(lo, hi);
  //     const root = new Node(nums[idx]);
  //     root.left = helper(lo, idx);
  //     root.right = helper(idx + 1, hi);
  //     return root;

  //     function max(lo, hi) {
  //       let idx = lo;
  //       let max = nums[lo];
  //       for (let i = lo; i < hi; i++) {
  //         if (nums[i] > max) {
  //           max = nums[i];
  //           idx = i;
  //         }
  //       }
  //       return idx;
  //     }
  //   }
}

console.log(s([3, 2, 1, 6, 0, 5]));
