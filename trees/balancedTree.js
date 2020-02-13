const { Node } = require("./index.js");

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// create a balanced tree from a sorted array

const balance = (arr, start = 0, end = arr.length - 1) => {
  if (start > end) return;
  let mid = Math.floor((start + end) / 2);
  let node = new Node(arr[mid]);
  node.left = balance(arr, start, mid - 1);
  node.right = balance(arr, mid + 1, end);
  return node;
};

console.log(balance(arr));
