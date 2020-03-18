const { Node } = require("./index");

// find the next greater node of each node in a ll, if none return 0
// return an array

const a = new Node(2);
const b = new Node(7);
const c = new Node(4);
const d = new Node(3);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const nextGreater = head => {
  const nodeVals = [];

  while (head) {
    nodeVals.push(head.val);
    head = head.next;
  }

  const stack = []; // stack of indexes
  const out = [...Array(nodeVals.length)].fill(0); // output, default to zero
  for (let i = 0; i < nodeVals.length; i++) {
    while (stack.length && nodeVals[i] > nodeVals[stack[stack.length - 1]]) {
      // WHILE stack is empty
      // current index of nodeval greater than all previous
      // so pop indices and set to the current nodeval
      out[stack.pop()] = nodeVals[i];
    }
    // current index of nodeval less than previous vals
    // push to stack
    stack.push(i);
  }

  return out;
};

console.log(nextGreater(a)); // 2,7,4,3,5 => [7, 0, 5, 5, 0]
