// 653. Two Sum IV - Input is a BST
// Easy

// 1922

// 149

// Add to List

// Share
// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

function s(root, k) {
  //   const set = new Set();
  //   return helper(root);

  //   function helper(root) {
  //     if (!root) return false;
  //     if (set.has(k - root.val)) return true;
  //     set.add(root.val);
  //     return helper(root.left) || helper(root.right);
  //   }

  // inorder traversal
  // binary search

  const inorder = [];
  dfs(root);
  let l = 0;
  let r = inorder.length - 1;
  while (l < r) {
    const sum = inorder[l] + inorder[r];
    if (sum === k) {
      return true;
    } else if (sum > k) {
      r--;
    } else {
      l++;
    }
  }
  return false;

  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    inorder.push(root.val);
    dfs(root.right);
  }
}
