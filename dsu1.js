(function (edges) {
  class DSU {
    constructor(n) {
      this.root = Array(n + 1)
        .fill(0)
        .map((_, idx) => idx);
    }

    find(a) {
      // o(n) time
      while (this.root[a] !== a) {
        a = this.root[a];
      }
      return a;
    }

    union(a, b) {
      const rootA = this.find(a);
      const rootB = this.find(b);
      if (rootA === rootB) return;
      this.root[a] = rootB;
    }
  }
  const graph = {};
  for (let e of edges) {
    const [a, b] = e;
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
  }
  const n = Object.keys(graph).length;
  const dsu = new DSU(n);
  for (let e of edges) {
    const [a, b] = e;
    dsu.union(a, b);
  }
  console.log({ graph, dsu });
})([
  [8, 7],
  [7, 6],
  [6, 5],
  [5, 4],
  [4, 3],
  [3, 2],
  [2, 1],
]);

// Owl Arena is hosting a fight competition and many owls decided to take part in it.

// Strength of an owl is the number associated with that owl.

// Rules of the competition are:
// An owl wins if its strength is greater than that of another.
// An owl can ask his friend to fight that match for him.
//   Note : If A and B are friends, and B and C are friends, then A and C are also friends.

//     Input:
// First line contains the number of owls participating N and the number of connections M.
// M lines follow.
// Each line contains two integers u and v denoting that they are friends.
// Next line contains Q, the number of queries.
// Q lines follow.
// Each line contains two integers u and v.You need to tell who wins.
//   Output:
// In each query, output the number of the owl that will win the match.If the owls(u and v) are in the same friend circle, output.

//   Explanation
// 1, 2 and 7 are friends. 3 and 4 are friends. 5, 6 and 7 have no friends.now,
//   First query: 1 and 2 : since both belong to the same friend circle, answer is a TIE.
//     Second: 5 and 6: since there is no friend of 5 and no friend of 6 and 6 has higher strength. 6 will win.
//       Third: 3 and 7: 3 has a friend 4 who has more strength than 3 and 7 has no friends whose strength is greater than his.so 4 vs 7. 7 will win.
//         Fourth: 1 and 5: 1 has a friend 7 who has more strength than 1 and 5 has no friends.so 5 vs 7. 7 will win.And since the fight was b / w 1 and 5. 1 wins the fight.

function sol(owls, edges, fights) {
  class DSU {
    constructor(n) {
      this.root = Array(n + 1)
        .fill(0)
        .map((_, i) => i);
      this.size = this.root.slice();
    }
    find(a) {
      if (this.root[a] !== a) {
        return this.find(this.root[a]);
      }
      return a;
    }
    union(a, b) {
      const rootA = this.find(a);
      const rootB = this.find(b);
      if (rootA === rootB) return false;
      this.root[b] = rootA;
      // higher hitting power = Math.max()
      this.size[b] = Math.max(this.size[a], this.size[b]);
      this.size[a] = this.size[b];
      return true;
    }
  }
  const dsu = new DSU(owls);
  for (let e of edges) {
    dsu.union(e[0], e[1]);
  }
  const res = [];
  for (let f of fights) {
    const [a, b] = f;
    if (dsu.root[a] === dsu.root[b]) {
      res.push("TIE");
    } else {
      res.push(dsu.size[a] > dsu.size[b] ? a : b);
    }
  }
  return res;
}

console.log("//");
console.log(
  sol(
    5,
    [
      [2, 4],
      [2, 1],
      [3, 5],
    ],
    [
      [1, 4],
      [3, 4],
    ]
  )
);
// TIE
// 3

console.log(
  sol(
    7,
    [
      [1, 2],
      [3, 4],
      [1, 7],
    ],
    [
      [1, 2],
      [5, 6],
      [3, 7],
      [1, 5],
    ]
  )
);
// TIE
// 6
// 7
// 1
