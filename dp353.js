// 337. House Robber III
// Medium

// 3902

// 66

// Add to List

// Share
// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

// Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

// Example 1:

// Input: root = [3,2,3,null,3,null,1]
// Output: 7
// Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
// Example 2:

// Input: root = [3,4,5,1,3,null,1]
// Output: 9
// Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(
  3,
  new Node(2, null, new Node(3)),
  new Node(3, null, new Node(1))
);

function s(root) {
  // [withRoot, withoutRoot]
  return Math.max(...helper(root));

  function helper(root) {
    if (!root) return [0, 0];
    const [wL, woL] = helper(root.left);
    const [wR, woR] = helper(root.right);
    return [
      root.val + woL + woR,
      // maxLeft + maxRight
      // since left and right are not connected, EXCEPT by root which is one node away
      // we find the max of left subtree + max of right subtree
      // all combos of with left, withoutLeft vs with Right , withouthRight
      // max(withLeft, witouhtLeft) + max(withRIght, withouthRight)
      Math.max(Math.max(wL, woL) + Math.max(wR, woR)),
    ];
  }
}

console.log(s(a));
