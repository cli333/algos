// Given a binary tree where every node has a unique value, and a target key k, find the closest leaf node to target k in the tree.
// A node is called a leaf if it has no children.
// In the following examples, the input tree is represented in flattened form row by row. The actual roottree given will be a TreeNode object.

// root = [1,2,3,4,null,null,null,5,null,6], k = 2
// Diagram of binary tree:
//              1
//             / \
//            2   3
//           /
//          4
//         /
//        5
//       /
//      6

// Output: 3
// Explanation: The leaf node with value 3 (and not the leaf node with value 6) is closest to the node with value 2.
// Note:
// root represents a binary tree with at least 1 node and at most 1000 nodes.
// Every node has a unique node.val in range [1, 1000].
// There exists some node in the given binary tree for which node.val == k.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(
  1,
  new Node(2, new Node(4, new Node(5, new Node(6)))),
  new Node(3)
);

function s(root, k) {
  /* 
    use dfs to construct graph
    and find start node, o(n)

    use bfs to search graph from start node
    to any leaf node o(n)

    each node has three edges, left, right, parent
    time o(n)
    space o(n)

  */
  const graph = {};
  // traverse and id the target
  let target;
  dfs(root, null, k);
  // add to q and seen
  const q = [target];
  const seen = new Set();
  seen.add(target);
  // bfs, spreading out from the target
  // if find a node with no neighbors(left, right)
  // have found the closest leaf
  while (q.length) {
    let len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      seen.add(node);
      if (!node.left && !node.right) {
        return node.val;
      }
      for (let neighbors of graph[node]) {
        if (!seen.has(neighbors)) {
          q.push(neighbors);
        }
      }
    }
  }

  function dfs(root, parent, k) {
    if (!root) return;
    if (parent) {
      graph[root] ? graph[root].push(parent) : (graph[root] = [parent]);
      graph[parent] ? graph[parent].push(root) : (graph[parent] = [root]);
    }
    if (root.val === k) {
      target = root;
    }
    dfs(root.left, root, k);
    dfs(root.right, root, k);
  }
}

console.log(s(a, 2), 3);
