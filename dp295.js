// 173. Binary Search Tree Iterator
// Medium

// 3529

// 313

// Add to List

// Share
// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

// BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
// boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
// int next() Moves the pointer to the right, then returns the number at the pointer.
// Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

// You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

// Example 1:

// Input
// ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
// Output
// [null, 3, 7, true, 9, true, 15, true, 20, false]

// Explanation
// BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
// bSTIterator.next();    // return 3
// bSTIterator.next();    // return 7
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 9
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 15
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 20
// bSTIterator.hasNext(); // return False

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(7, new Node(3), new Node(15, new Node(9), new Node(20)));

class bSTIterator {
  //   constructor(root) {
  //     this.inorder = [];
  //     this.index = 0;
  //     this.flatten(root);
  //   }
  //   flatten(root) {
  //     if (!root) return;
  //     this.flatten(root.left);
  //     this.inorder.push(root.val);
  //     this.flatten(root.right);
  //   }
  //   next() {
  //     return this.inorder[this.index++];
  //   }
  //   hasNext() {
  //     return this.index + 1 <= this.inorder.length;
  //   }

  constructor(root) {
    this.stack = [];
    this.leftmostInorder(root);
  }

  leftmostInorder(root) {
    // add all left els to a stack
    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }

  next() {
    // top most node is the smallest element
    const topmostNode = this.stack.pop();
    if (!topmostNode) return null;
    // if topmost has right child, call function on right child
    if (topmostNode.right) {
      this.leftmostInorder(topmostNode.right);
    }

    return topmostNode.val;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}

const bst = new bSTIterator(a);
console.log(bst.next());
console.log(bst.next());
console.log(bst.hasNext());
console.log(bst.next());
console.log(bst.next());
console.log(bst.hasNext());
