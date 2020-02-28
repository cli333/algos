// create a spiral matrix
// m x n dimensions

const spiral = (m, n) => {
  const array = [...Array(m)].map(row => new Array(n).fill(0));

  let leftColumn = 0;
  let rightColumn = n - 1;
  let topRow = 0;
  let bottomRow = m - 1;
  let count = 1;

  while (leftColumn <= rightColumn && topRow <= bottomRow) {
    for (let i = leftColumn; i <= rightColumn; i++) {
      array[topRow][i] = count;
      count++;
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      array[i][rightColumn] = count;
      count++;
    }
    rightColumn--;

    for (let i = rightColumn; i >= leftColumn; i--) {
      array[bottomRow][i] = count;
      count++;
    }
    bottomRow--;

    for (let i = bottomRow; i >= topRow; i--) {
      array[i][leftColumn] = count;
      count++;
    }
    leftColumn++;
  }

  return array;
};

console.log(spiral(4, 5));
