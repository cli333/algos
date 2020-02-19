// find the number of islands
// an array of 1 and 0
// one island is all the 1s that are connected to each vertically and horizontally

// use breadth first search
// 3 islands

const map = [
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 1]
];

// loop through the array
// if the element equals '1'
// increment the count
// convert all 1s connected to that 1 to 0
// (mutates the original array)
// continue looping

const callBFS = (grid, i, j) => {
  // boundary checks
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] !== 1
  )
    return;

  grid[i][j] = 0;
  callBFS(grid, i + 1, j); // check up
  callBFS(grid, i - 1, j); // check down
  callBFS(grid, i, j + 1); // check left
  callBFS(grid, i, j - 1); // check right
};

const islands = grid => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count++;
        callBFS(grid, i, j);
      }
    }
  }
  return count;
};

console.log(islands(map));
