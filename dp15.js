// Maximum Sum Increasing Subsequence | DP - 14
// Given an array of n positive integers.Write a program to find the sum of maximum sum subsequence of the given array such that the integers in the subsequence are sorted in increasing order.For example, if input is { 1, 101, 2, 3, 100, 4, 5 }, then output should be 106(1 + 2 + 3 + 100), if the input array is { 3, 4, 5, 10 }, then output should be 22(3 + 4 + 5 + 10) and if the input array is { 10, 5, 4, 3 }, then output should be 10

function sol(n) {
  // const dp = new Array(n.length).fill(1);
  const sums = n.slice();

  for (let i = 1; i < n.length; i++) {
    let temp = sums[i];
    for (let j = 0; j < i; j++) {
      if (n[j] < n[i]) {
        sums[i] = Math.max(sums[j] + temp, temp);
      }
    }
  }

  return Math.max(...sums);
  // return dp;
}

console.log(sol([1, 101, 2, 3, 100, 4, 5])); // 1,2,3,100 = 106
console.log(sol([3, 4, 5, 10])); // 3,4,5,10 = 22
console.log(sol([10, 5, 4, 3])); // 10
