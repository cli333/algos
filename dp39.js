// A group of friends went on holiday and sometimes lent each other money.For example, Alice paid for Bill's lunch for 10.ThenlaterChrisgaveAlice5 for a taxi ride. We can model each transaction as a tuple (x, y, z) which means person x gave person y $z. Assuming Alice, Bill, and Chris are person 0, 1, and 2 respectively (0, 1, 2 are the person's ID), the transactions can be represented as [[0, 1, 10], [2, 0, 5]].

// Given a list of transactions between a group of people, return the minimum number of transactions required to settle the debt.

//   Note:

// A transaction will be given as a tuple(x, y, z).Note that x ≠ y and z > 0.
// Person's IDs may not be linear, e.g. we could have the persons 0, 1, 2 or we could also have the persons 0, 2, 6.

// Example 1:

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
  const map = {};
  // add up all transactions
  for (let t of transactions) {
    const [giver, receiver, amount] = t;
    if (giver in map) {
      map[giver] -= amount;
    } else {
      map[giver] = -amount;
    }

    if (receiver in map) {
      map[receiver] += amount;
    } else {
      map[receiver] = amount;
    }
  }

  const list = [];
  for (let val of Object.values(map)) {
    if (val !== 0) {
      list.push(val);
    }
  }

  return dfs(0, list);

  function dfs(k, list) {
    if (k === list.length) return 0;
    const cur = list[k];
    if (cur === 0) {
      return dfs(k + 1, list);
    }
    let min = Infinity;
    for (let i = k + 1; i < list.length; i++) {
      let next = list[i];
      // if one number is positive and and other negative
      if (cur * next < 0) {
        // set the next number to sum of (cur + next)
        list[i] = cur + next;
        min = Math.min(min, 1 + dfs(k + 1, list));
        // unset the next number
        list[i] = next;

        // if (cur + next === 0) break;
      }
    }
    return min;
  }
}

console.log(
  sol([
    [0, 1, 10],
    [2, 0, 5],
  ])
); // 2 transactions
console.log(
  sol([
    [0, 1, 10],
    [1, 0, 1],
    [1, 2, 5],
    [2, 0, 5],
  ])
); // 1
console.log(
  sol([
    [0, 2, 1],
    [1, 2, 10],
    [0, 2, 1],
    [1, 2, 10],
    [0, 2, 1],
    [1, 2, 10],
  ])
);
