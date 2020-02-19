const { Node } = require('./index');

// partition a list, such that all nodes less than x
// come before nodes greater than or equal to x
// preserver original relative order

const a = new Node(1);
const b = new Node(4);
const c = new Node(3);
const d = new Node(2);
const e = new Node(5);
const f = new Node(2);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function print(head, out = []) {
	if (!head) return out;
	out.push(head.val);
	return print(head.next, out);
}

const part = (head, x) => {
	// create two lists
	// less
	let less = new Node('less');
	let lessHead = less;
	let greater = new Node('greater');
	let greaterHead = greater;

	while (head) {
		if (head.val < x) {
			// can also set next to head without creating a new node
			less.next = new Node(head.val);
			less = less.next;
		} else {
			greater.next = new Node(head.val);
			greater = greater.next;
		}
		head = head.next;
	}

	greaterHead = greaterHead.next;
	less.next = greaterHead;
	return lessHead.next;
};

console.log(print(part(a, 3)));
