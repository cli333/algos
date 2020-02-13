// iterative approach

// push root to stack
// set root to root.left
//

const inOrder = root => {
  let stack = [];

  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    if (stack.length < 1) break;

    root = stack.pop();
    console.log(root.val);
    root = root.right;
  }
};
