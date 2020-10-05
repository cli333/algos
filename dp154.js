// given k lists of sorted integers, find smallest range that includes one number from each list

function sol() {
  const lists = [...arguments];
  let min = Infinity;
  let max = 0;
  let range = Infinity;

  const currentNumbers = [];
  const indexes = [];
  for (let list of lists) {
    currentNumbers.push(list[0]);
    indexes.push(0);
  }

  while (true) {
    min = Math.min(...currentNumbers);
    max = Math.max(...currentNumbers);
    range = Math.min(range, max - min);

    const minIdx = currentNumbers.indexOf(min);
    // move the min forward
    indexes[minIdx]++;
    // break, if cannot move min forward
    if (!lists[minIdx][indexes[minIdx]]) break;
    // else reset current numbers
    currentNumbers[minIdx] = lists[minIdx][indexes[minIdx]];
  }

  return { max, min, range };
}

console.log(sol([4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]), [
  20,
  24,
]);
