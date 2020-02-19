// find the leftmost value in the BOTTOM row in a binary tree

const { Node } = require('./index');

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = new Node('left');

// 1
// 2 3
// 4 5 6

const findLeft = root => {
	// use a queue
	// bfs, but traverse from right to left
	let lastVal = root.val;
	let q = [root];

	while (q.length) {
		let node = q.shift();

		lastVal = node.val;
		if (node.right) q.push(node.right);
		if (node.left) q.push(node.left);
	}

	return lastVal;
};

console.log(findLeft(a));
