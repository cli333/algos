const { Node } = require('./index');

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

// 1-2-3-4 => 2-1-4-3

// swap nodes, do not modify values
// swap every two adjacent nodes and return its head

const swap = head => {
	let temp = new Node(0);
	temp.next = head;
	let current = temp;

	while (current.next && current.next.next) {
		let firstNode = current.next;
		let secondNode = current.next.next;
		firstNode.next = secondNode.next;
		current.next = secondNode;
		current.next.next = firstNode;
		current = current.next.next;
	}

	return temp.next;
};
