// A group of friends went on holiday and sometimes lent each other money.For example, Alice paid for Bill's lunch for $10. Then later Chris gave Alice $5 for a taxi ride. We can model each transaction as a tuple (x, y, z) which means person x gave person y $z. Assuming Alice, Bill, and Chris are person 0, 1, and 2 respectively (0, 1, 2 are the person's ID), the transactions can be represented as [[0, 1, 10], [2, 0, 5]].

// Given a list of transactions between a group of people, return the minimum number of transactions required to settle the debt.

//   Note:

// A transaction will be given as a tuple(x, y, z).Note that x ≠ y and z > 0. Person's IDs may not be linear, e.g. we could have the persons 0, 1, 2 or we could also have the persons 0, 2, 6. Example 1:

// Input:
// [[0, 1, 10], [2, 0, 5]]

// Output:
// 2

// Explanation:
// Person #0 gave person #1 $10.
// Person #2 gave person #0 $5.

// Two transactions are needed.One way to settle the debt is person #1 pays person #0 and #2 $5 each.
//   Example 2:

// Input:
// [[0, 1, 10], [1, 0, 1], [1, 2, 5], [2, 0, 5]]

// Output:
// 1

// Explanation:
// Person #0 gave person #1 $10.
// Person #1 gave person #0 $1.
// Person #1 gave person #2 $5.
// Person #2 gave person #0 $5.

//   Therefore, person #1 only need to give person #0 $4, and all debt is settled.

function sol(transactions) {
  // [person1, person2, amount], person1 gave person2 an amount
  const amounts = [];
  for (let t of transactions) {
    const [from, to, amount] = t;
    amounts[from] ? (amounts[from] -= amount) : (amounts[from] = -amount);
    amounts[to] ? (amounts[to] += amount) : (amounts[to] = amount);
  }

  return helper(0, amounts);

  function helper(k, amounts) {
    if (k === amounts.length) return 0;
    const cur = amounts[k];

    // skip this person
    if (cur === 0) return helper(k + 1, amounts);

    let min = Infinity;
    for (let i = k + 1; i < amounts.length; i++) {
      let temp = amounts[i];
      if (cur * temp < 0) {
        amounts[i] = cur + temp;
        min = Math.min(min, 1 + helper(k + 1, amounts));
        amounts[i] = temp;

        if (cur + temp === 0) break;
      }
    }
    return min;
  }
}

console.log(
  sol([
    [0, 1, 10],
    [2, 0, 5],
  ]),
  2
);

// Person #0 gave person #1 $10.
// Person #2 gave person #0 $5.

// Two transactions are needed.One way to settle the debt is person #1 pays person #0 and #2 $5 each.

console.log(
  sol([
    [0, 1, 10],
    [1, 0, 1],
    [1, 2, 5],
    [2, 0, 5],
  ]),
  1
);
