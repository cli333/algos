// separate evens and odds in a linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(4);
const d = new Node(3);
const e = new Node(6);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

// input: 1,2,4,3,6
// output: 2,4,6,1,3

function sol(cur) {
  let oddHead = null;
  let evenHead = null;
  let lastEven = null;
  let lastOdd = null;

  while (cur) {
    if (cur.val % 2 === 0) {
      if (!evenHead) {
        evenHead = lastEven = cur;
      } else {
        lastEven.next = cur;
        lastEven = lastEven.next;
      }
    } else {
      if (!oddHead) {
        oddHead = lastOdd = cur;
      } else {
        lastOdd.next = cur;
        lastOdd = lastOdd.next;
      }
    }
    cur = cur.next;
  }

  //   if (evenHead) {
  //     cur = evenHead;
  //   }

  //   if (!lastEven) {
  //     lastEven.next = oddHead;
  //   }

  //   if (lastOdd) {
  //     lastOdd.next = null;
  //   }

  lastOdd.next = null;
  lastEven.next = oddHead;
  return evenHead;
}

function flat(head) {
  const out = [];
  while (head) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

console.log(flat(a));
console.log(flat(sol(a)));
