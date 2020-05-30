// There are a row of n houses, each house can be painted with one of the three colors: red, blue or green.The cost of painting each house with a certain color is different.You have to paint all the houses such that no two adjacent houses have the same color.

// The cost of painting each house with a certain color is represented by a n x 3 cost matrix.For example, costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 with color green, and so on...Find the minimum cost to paint all houses.

function solve(costs) {
  let n = costs.length;
  if (!n) return 0;
  for (let row = 0; row < costs.length; row++) {
    for (let col = 0; col < costs[row].length; col++) {
      costs[i][j] += Math.min(
        costs[row - 1][(col + 1) % 3],
        costs[row - 1][(col + 2) % 3]
      );
    }
  }
  return Math.min(costs[n - 1][0], Math.min(costs[n - 1][1], costs[n - 1][2]));
}
