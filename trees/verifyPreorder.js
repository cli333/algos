// Question

// You have an array of preorder traversal of Binary Search Tree(BST).Your program should verify whether it is a correct sequence or not.

// Solution 2

// simulate the traversal, keeping a stack of nodes(just their values) of which we're still in the left subtree. If the next number is smaller
// than the last stack value, then we're still in the left subtree of all stack nodes, so just push the new one onto the stack.But before that,
// pop all smaller ancestor values, as we must now be in their right subtrees(or even further, in the right subtree of an ancestor).Also, use
// the popped values as a lower bound, since being in their right subtree means we must never come across a smaller number anymore.

// function solve(preorder) {
//   let len = preorder.length;
//   return helper(preorder, 0, len - 1, 0, Infinity);

//   function helper(preorder, start, end, lb, ub) {
//     if (start >= end) return true;
//     let curNode = preorder[start];
//     let s = start;
//     while (s <= end && preorder[s] <= curNode) {
//       if (preorder[s] < lb || preorder[s] > ub) return false;
//       s++;
//     }
//     return (
//       helper(preorder, start + 1, s - 1, lb, curNode - 1) &&
//       helper(preorder, s, end, curNode + 1, ub)
//     );
//   }
// }

function solve(preorder) {
  // lower bound
  let low = 0;
  let stack = [];
  for (let p of preorder) {
    if (p < low) {
      return false;
    }
    while (stack.length && p > stack[stack.length - 1]) {
      low = stack[stack.length - 1];
      stack.pop();
    }
    stack.push(p);
  }
  return true;
}

console.log(solve([1, 2, 3, 4, 5]));
