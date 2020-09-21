// serialize and deserialize a bst
// serialize: turn bst to an array
// deserialize: produce bst from array

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(7);
const b = new Node(2);
a.left = b;
const c = new Node(5);
a.right = c;
const d = new Node(1);
b.left = d;
const e = new Node(3);
c.left = e;
const f = new Node(8);
c.right = f;

function serialize(root) {
  // post order traversal
  const arr = [];
  helper(root);
  return arr;

  function helper(root) {
    if (!root) {
      arr.push(null);
      return;
    }
    arr.push(root.val);
    helper(root.left);
    helper(root.right);
  }
}

function deserialize(arr) {
  let index = 0;
  return helper(arr);

  function helper(arr) {
    if (!arr[index] || index >= arr.length) {
      index++;
      return null;
    }
    const root = new Node(arr[index]);
    index++;
    root.left = helper(arr);
    root.right = helper(arr);
    return root;
  }
}

function flat(root) {
  return {
    val: root.val,
    left: root.left ? flat(root.left) : null,
    right: root.right ? flat(root.right) : null,
  };
}

console.log(serialize(a));
console.log(flat(deserialize(serialize(a))));
