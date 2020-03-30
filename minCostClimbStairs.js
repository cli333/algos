// on a staircase, the i-th step has some negative cost cost[i]
// once you pay the cost, you can either climb one or two steps,
// find the min cost to reach the top of the floor, can start from either step 0, or step 1

// cost = [10, 15, 20]
// output = 15
// cheapest is start on cost[1], pay cost and go to top

// cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// output = 6
// cheapest is start on cost[0], and only step on 1s, skipping cost[3]

// basically, can take the step in front or skip the step
// sum up the steps taken

// 1st solution: modify the array, no extra space
// loop through, starting at second index
// the current step += Math.min(current-1, current-2)
// find the min of the last two elements in the cost array

// 2nd: dp, constant space
// loop from end

const minCost = cost => {
  // for (let i = 2; i < cost.length; i++) {
  //   cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  // }
  // return Math.min(cost[cost.length - 1], cost[cost.length - 2]);

  let step1 = 0;
  let step2 = 0;
  for (let i = cost.length - 1; i >= 0; i--) {
    let currentStep = cost[i] + Math.min(step1, step2);
    step1 = step2;
    step2 = currentStep;
  }

  return Math.min(step1, step2);
};

console.log(minCost([10, 15, 20])); // 15
console.log(minCost([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
