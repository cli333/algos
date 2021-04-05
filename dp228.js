// 108. Convert Sorted Array to Binary Search Tree
// Easy

// 3449

// 259

// Add to List

// Share
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function s(nums) {
  return helper(0, nums.length - 1);

  function helper(start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const root = new Node(nums[mid]);
    root.left = helper(start, mid - 1);
    root.right = helper(mid + 1, end);
    return root;
  }
}

console.log(s([-10, -3, 0, 5, 9]));
