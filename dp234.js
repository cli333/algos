// 113. Path Sum II
// Medium

// 2530

// 85

// Add to List

// Share
// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

// A leaf is a node with no children.

// Example 1:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]

class N {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new N(
  5,
  new N(4, new N(11, new N(7), new N(2))),
  new N(8, new N(13, new N(4, new N(5), new N(1))))
);

function s(root, target) {
  const res = [];
  helper(root, target, []);
  return res;

  function helper(root, target, cur) {
    if (!root) return;
    if (!root.left && !root.right && root.val === target) {
      res.push([...cur, root.val]);
      return;
    }

    cur.push(root.val);
    helper(root.left, target - root.val, cur);
    helper(root.right, target - root.val, cur);
    cur.pop();
  }
}

console.log(s(a, 22));
