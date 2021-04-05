class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node("a");
const b = new Node("b", a);
const c = new Node("c", b);

function sol(head) {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

function flat(head, list = []) {
  if (!head) return list;
  list.push(head.val);
  return flat(head.next, list);
}

console.log(flat(c));
console.log(flat(sol(c)));
