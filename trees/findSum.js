const { Node } = require('./index');

const a = new Node(10);
const b = new Node(3);
const c = new Node(12);
const d = new Node(2);
const e = new Node(5);
const f = new Node(2);

a.left = b;
a.right = c;
b.left = f;
b.right = e;

// find a path in tree with a given sum

let res = 0;
let stack = [];

const sum = (root, target) => {
	// push root to stack
	// add to sum
	// if sum = target return stack
	//
	// inorder traverse, root.left, root.right
	//
	// if escape traverse block {}
	// sum -= stack.pop()

	if (!root) return;
	res += root.val;
	stack.push(root.val);
	console.log(stack, target, res);
	if (res === target) return stack;

	sum(root.left, target);
	sum(root.right, target);

	res -= stack.pop();
};

// find path sum

const hasPathSum = (root, sum) => {
	const nodes = [];
	const sums = [];

	nodes.push(root);
	sums.push(sum - root.val);

	while (nodes.length) {
		console.log(sums);
		let currentNode = nodes.pop();
		let currentSum = sums.pop();
		console.log(sums, currentSum);

		// only finds if path ends in leaf nodes
		if (!currentNode.left && !currentNode.right && currentSum === 0) {
			return true;
		}

		if (currentNode.left) {
			nodes.push(currentNode.left);
			sums.push(currentSum - currentNode.left.val);
		}

		if (currentNode.right) {
			nodes.push(currentNode.right);
			sums.push(currentSum - currentNode.right.val);
		}
	}

	return false;
};

console.log(hasPathSum(a, 15));
