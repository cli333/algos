// Given a node from a Circular Linked List which is sorted in ascending order, write a function to insert a value insertVal into the list such that it remains a sorted circular list.The given node can be a reference to any single node in the list, and may not be necessarily the smallest value in the circular list.

// If there are multiple suitable places for insertion, you may choose any place to insert the new value.After the insertion, the circular list should remain sorted.

// If the list is empty(i.e., given node is null), you should create a new single circular list and return the reference to that single node.Otherwise, you should return the original given node.

//   Example 1:

// Input: head = [3, 4, 1], insertVal = 2
// Output: [3, 4, 1, 2]
// Explanation: In the figure above, there is a sorted circular list of three elements.You are given a reference to the node with value 3, and we need to insert 2 into the list.The new node should be inserted between node 1 and node 3. After the insertion, the list should look like this, and we should still return node 3.

// Example 2:

// Input: head = [], insertVal = 1
// Output: [1]
// Explanation: The list is empty(given head is null).We create a new single circular list and return the reference to that single node.
//   Example 3:

// Input: head = [1], insertVal = 0
// Output: [1, 0]

const { Node } = require("./linkedLists/index");
const a = new Node(3);
const b = new Node(4);
const c = new Node(1);
a.next = b;
b.next = c;
c.next = a;

const d = new Node(1);

function sol(head, insertVal) {
  const node = new Node(insertVal);

  if (!head) {
    node.next = node;
    return node;
  }

  // find max node
  let max = head;
  while (max.next !== head && max.next.val > max.val) {
    max = max.next;
  }

  let min = max.next;
  let cur = min;

  if (insertVal >= max.val || insertVal <= min.val) {
    node.next = min;
    max.next = node;
  } else {
    while (cur.next.val < insertVal) {
      cur = cur.next;
    }
    let temp = cur.next;
    cur.next = node;
    node.next = temp;
  }

  return head;
}

console.log(sol(a, 2).next, sol(a, 2).next.next, sol(a, 2).next.next);
