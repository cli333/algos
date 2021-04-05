// clone graph
function s(root) {
  const map = {};
  map[root.val] = new Node(root.val);
  map[root.val].neighbors = root.neighbors.map(s);
  return map[root.val];
}
