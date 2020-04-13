// Assume you are an awesome parent and want to give your children some cookies.But, you should give each child at most one cookie. Each child i has a
// greed factor gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj.If sj >= gi, we can assign
// the cookie j to the child i, and the child i will be content.Your goal is to maximize the number of your content children and output the maximum number.

//   Note:
// You may assume the greed factor is always positive.
// You cannot assign more than one cookie to one child.

//   Example 1:
// Input: [1, 2, 3], [1, 1]

// Output: 1

// Explanation: You have 3 children and 2 cookies.The greed factors of 3 children are 1, 2, 3.
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.

const assign = (children, cookies) => {
  // sort both arrays
  // loop through both, two pointers
  // if child greed greater than current cookies
  // increment cookie pointer

  // sorting is n * logN = total time complexity

  children.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);

  let child = 0;
  let cookie = 0;

  while (child < children.length && cookie < cookies.length) {
    if (children[child] <= cookies[cookie]) {
      child++;
      cookie++;
    }

    if (children[child] > cookies[cookie]) {
      cookie++;
    }
  }

  return child;
};

console.log(assign([1, 2, 3], [1, 1])); // 1
console.log(assign([1, 2], [3, 2, 1])); // 2
