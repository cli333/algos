const { Node } = require("./index");

// find the number of BSTs possible for a given n

const num = n => {
  // array of results
  // 0 index set to 1 for convenience
  // 1 val = 1 possible BST
  // 2 vals = 2 possible BST
  // 3 vals = 3 possible 'roots' + 2 possible BSTs

  const val = [1, 1, 2];

  for (let i = 2; i <= n; i++) {
    val[i] = 0;
    for (let j = 0; j < i; j++) {
      val[i] += val[j] * val[i - j - 1];
    }
  }

  return val[n];
};

console.log(num(4));

// find all trees

const generateTrees = n => {
  if (!n) return [];
  // use memoization
  let cache = {};

  function genTree(start, end) {
    if (start > end) return [null];
    let key = `${start} ${end}`;
    if (cache[key]) return cache[key];

    const result = [];

    // when picking root
    // left subtree will contain all values from start to root-1
    // right subtree will contain all values from root+1 to end
    // eg if root = 1
    // there will be no left subtree, will be all right
    // eg if root = 2
    // left subtree will only contain 1
    // right subtree will have everthing else

    // use nested to loops to generate all possible subtrees for left, right
    for (let root = start; root <= end; root++) {
      for (let left of genTree(start, root - 1)) {
        for (let right of genTree(root + 1, end)) {
          const newTree = new Node(root);
          newTree.left = left;
          newTree.right = right;
          result.push(newTree);
        }
      }
    }
    cache[key] = result;
    return result;
  }

  return genTree(1, n);
};

console.log(generateTrees(3));
