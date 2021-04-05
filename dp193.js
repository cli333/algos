// knapsack problem
// find the max value without exceeding maxWeight
// can only take one of each item

function s(values, weights, maxWeight) {
  // time o(2^n)
  // space o(n)
  let res = 0;
  helper(0);
  return res;

  function helper(idx, curValue = 0, curWeight = maxWeight) {
    if (idx === values.length) {
      res = Math.max(res, curValue);
      return;
    }

    for (let i = idx; i < values.length; i++) {
      if (weights[i] <= curWeight) {
        curValue += values[i];
        curWeight -= weights[i];
        helper(i + 1, curValue, curWeight);
        curValue -= values[i];
        curWeight += weights[i];
      }
    }
  }
}

console.log(s([20, 15, 25, 10], [6, 5, 10, 3], 10));

// function s2(values, weights, maxWeight) {
//   let res = 0;
//   const out = [];
//   helper(0);
//   return out;

//   function helper(idx, curValue = 0, curWeight = maxWeight, items = []) {
//     if (idx === values.length) {
//       res = Math.max(res, curValue);
//       out.push(items.slice());
//       return;
//     }

//     for (let i = idx; i < values.length; i++) {
//       if (weights[i] <= curWeight) {
//         curWeight -= weights[i];
//         curValue += values[i];
//         items.push({ val: values[i], wt: weights[i] });
//         helper(i + 1, curValue, curWeight, items);
//         curWeight += weights[i];
//         curValue -= values[i];
//         items.pop();
//       }
//     }
//   }
// }

// console.log(s2([20, 15, 10, 25], [6, 5, 3, 10], 10));

function s3(values, weights, maxWeight, i = 0) {
  if (i === values.length) return 0;
  if (weights[i] > maxWeight) {
    return s3(values, weights, maxWeight, i + 1);
  }
  return Math.max(
    values[i] + s3(values, weights, maxWeight - weights[i], i + 1),
    s3(values, weights, maxWeight, i + 1)
  );
}

console.log(s3([20, 15, 25, 10], [6, 5, 10, 3], 10));

// with memo

function s4(values, weights, maxWeight, i = 0, memo = {}) {
  // key is the changing values
  const key = `${maxWeight} ${i}`;
  if (memo[key]) return memo[key];
  if (i === values.length) return 0;
  if (weights[i] > maxWeight) {
    let res = s4(values, weights, maxWeight, i + 1, memo);
    memo[key] = res;
    return res;
  }
  let res = Math.max(
    values[i] + s4(values, weights, maxWeight - weights[i], i + 1, memo),
    s4(values, weights, maxWeight, i + 1, memo)
  );
  memo[key] = res;
  return res;
}

console.log(s4([20, 15, 25, 10], [6, 5, 10, 3], 10));
