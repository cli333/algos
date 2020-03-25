// at a lemonade stand each cost $5
// customers are in a queue, and order one at a time, specified by bills
// each customer will buy with 5, 10, or 20 bill
// must provide exact change to each customer
// return true if can provide every customer with change at time of purchase

// [5,5,5,10,20] => true
// [5,5,10] => true

const change = bills => {
  let fives = 0;
  let tens = 0;

  for (let bill of bills) {
    if (bill === 5) {
      fives++;
    } else if (bill === 10) {
      tens++;
      fives--;
    } else if (tens > 0) {
      tens--;
      fives--;
    } else {
      fives -= 3;
    }

    if (fives < 0) return false;
  }

  return true;
};

console.log(change([5, 5, 5, 10, 20])); // true
console.log(change([5, 5, 10])); // true
console.log(change([5, 20, 5])); // false
