// 138. Copy List with Random Pointer
// Medium

// 4786

// 799

// Add to List

// Share
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

// Example 1:

// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

class Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

const a = new Node(7);
const b = new Node(13);
const c = new Node(11);
const d = new Node(10);
const e = new Node(1);
a.next = b;
a.random = null;
b.next = c;
b.random = a;
c.next = d;
c.random = e;
d.next = e;
d.random = c;
e.random = a;

function s(head) {
  const map = {};
  return helper(head);

  function helper(node) {
    if (!node) return node;
    if (map[node.val]) return map[node.val];
    map[node.val] = new Node(node.val);
    map[node.val].next = helper(node.next);
    map[node.val].random = helper(node.random);
    return map[node.val];
  }
}

function s2(head) {
  if (!head) return null;
  const map = {};
  let node = head;
  while (node) {
    map[node.val] = new Node(node.val);
    node = node.next;
  }
  node = head;
  while (node) {
    map[node.val].next = node.next ? map[node.next.val] : null;
    map[node.val].random = node.random ? map[node.random.val] : null;
    node = node.next;
  }
  return map[head.val];
}

function print(head) {
  const out = [];
  while (head) {
    out.push([head.val, head.random ? head.random.val : null]);
    head = head.next;
  }
  return out;
}

console.log(print(a));
console.log(print(s2(a)));
