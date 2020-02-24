const { Node } = require("./index");

// find max width of a binary tree
// null nodes are counted

const a = new Node(10);
const b = new Node(3);
const c = new Node(12);
const d = new Node(2);
const e = new Node(5);
const f = new Node(2);

// a.left = b;
// a.right = c;
// c.right = d;
// c.left = null;
// b.left = f;

a.left = b;
b.right = c;
c.left = f;
c.right = d;
d.left = e;

// The 3 concepts needed to understand this solution:

// 1) Each child's index , i.e. position of that left/right child in the entire row of a binary tree, is going to be 2n (for left) or 2n+1
// (for right) where n is the parent's position or index.It starts from the root with position 0, and it's left being 0, right being 1 , and
// so on... looks something like this:

// 2) Each right child of a parent gives that row's maximum breadth. So if you see the root 1 at row number 2, it has two child index: at
// position 2 and 3 on the row below it. The right node being at 3, which means that if nothing exists on this child's row from this point forward,
//  then the maximum breadth you can get is 0 to 3, i.e. 4. My point being, each right node is an indication of the maximum breadth of that row -
//  provided this was the last seen node in that row and nothing exists in this row from this node forward.

// 3) To keep track of the child node's index is not enough, we also need to know the depth. For that, introducing an array of zeroes as a placeholder -
// size of this array represents the maximum depth seen till now. So the first time, at the topmost root index, we have seen a maximum depth of just 1 --
// with the min[] array initialized as just one zero. With each further depths, you would notice that the first time our dfs function realizes that the
// depth has changed, size of min will be equal to depth. Just add another zero here, to make sure that for all other left/right node calls ON THE SAME
// ROW, this min represents max number of depth seen till now and keeps it as one more, so that the if(depth==min.length) condition is never satisfied
// again for that same row. Now the moment you go to next row, first left most node would realize this, increase the depth so that this change in row
// is acknowledged.

function width(root) {
  let mins = [0];
  let width = 0;
  dfs(root, 0, 0);
  return width;

  function dfs(root, depth, position) {
    console.log(mins);
    if (!root) return;
    if (depth === mins.length) {
      mins[depth] = position;
    }
    // subtract the rightmost from the leftmost position
    const differenceBetweenRightAndLeftPositions = position - mins[depth];
    width = Math.max(width, differenceBetweenRightAndLeftPositions + 1);
    dfs(root.left, depth + 1, position * 2);
    dfs(root.right, depth + 1, position * 2 + 1);
  }
}

console.log(width(a));
