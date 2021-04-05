// deep clone a graph

class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function s(root) {
  const map = {};
  return helper(root);

  function helper(root) {
    if (!root) return root;
    map[root.val] = new Node(node.val);
    map[root.val].neighbors = root.neighbors.map(helper);
    return map[root.val];
  }
}
