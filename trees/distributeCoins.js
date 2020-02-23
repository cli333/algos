// given the root of tree
// each node in the tree has node.val of N coins
// in one move one may choose two adjacent nodes and move coin from node to node, (parent to child, or child to parent)
// return the number of moves needed to give all nodes exactly one coin
const { Node } = require("./index");

const a = new Node(6);
const b = new Node(0);
const c = new Node(0);
const d = new Node(0);
const e = new Node(0);
const f = new Node(0);

// math thing
// the absolute value of all the nodes - 1 = the number of moves

a.left = b;
a.right = c;
c.right = d;
b.left = f;
b.right = e;

const dis = root => {
  let moves = 0(function giveCoins(root) {
    if (!root) return 0;
    let left = giveCoins(root.left);
    let right = giveCoins(root.right);
    moves += Math.abs(left) + Math.abs(right);
    return root.val + left + right - 1;
  })(root);

  return moves;
};
