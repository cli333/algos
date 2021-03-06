// A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).

// Buildings Skyline Contour
// The geometric information of each building is represented by a triplet of integers[Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height.It is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

// For instance, the dimensions of all buildings in Figure A are recorded as: [[2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8]].

// The output is a list of "key points"(red dots in Figure B) in the format of[[x1, y1], [x2, y2], [x3, y3], ... ]that uniquely defines a skyline.A key point is the left endpoint of a horizontal line segment.Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height.Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

// For instance, the skyline in Figure B should be represented as: [[2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0]].

function sol(buildings) {
  // [left index, right index, height]
  const map = {};
  for (let b of buildings) {
    const [left, right] = b;
    map[left] = b;
    map[right] = b;
    // map[left] ? map[left].push(b) : (map[left] = b);
    // map[right] ? map[right].push(b) : (map[right] = b);
  }

  let q = [];

  const res = [];

  for (let a in map) {
    const buildings = map[a];
    for (let b of buildings) {
      if (b[0] === a) {
        q.push(b);
      } else {
        let removeIdx = q.indexOf(b);
        if (removeIdx >= 0) {
          q = q.slice(0, removeIdx).concat(q.slice(removeIdx + 1));
        }
      }
    }

    if (!q.length) {
      const tmp = [a, 0];

      res.push(tmp);
    } else {
      const maxHeight = Math.max(...Object.entries(map).map((b) => b[2]));
      if (res.length === 0 || res[res.length - 1][1] !== maxHeight) {
        const tmp = [a, maxHeight];
        res.push(tmp);
      }
    }
    q.sort((a, b) => (a[2] < b[2] ? -1 : 1));
  }

  return res;
}

console.log(
  sol([
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8],
  ]),
  [
    [2, 10],
    [3, 15],
    [7, 12],
    [12, 0],
    [15, 10],
    [20, 8],
    [24, 0],
  ]
);
