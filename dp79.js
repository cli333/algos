// search in rotated sorted array
// find indices of target

// no dups
function sol(nums, target) {
  const n = nums.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) return mid;
    // left part is sorted
    // target = 3
    if (nums[start] <= nums[mid]) {
      //
      //  [ 5,  6,  7,  0,  1,  2,  3,  4]
      //    ^               ^           ^
      //    start           mid         end

      // target is greater than max of the left part
      // OR target is less than the min of the left part
      if (target > nums[mid] || target < nums[start]) {
        // move to the right
        start = mid + 1;
      } else {
        // move to the left
        end = mid - 1;
      }
    } else {
      // right part is sorted
      if (target < nums[mid] || target > nums[end]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
}

console.log(3, sol([5, 6, 7, 0, 1, 2, 3, 4], 3));
console.log(6, sol([5, 6, 7, 0, 1, 2, 3, 4], 6));

// with dups

function sol2(nums, target) {
  const n = nums.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) return mid;
    if (nums[start] < nums[mid] || nums[mid] > nums[end]) {
      if (target > nums[mid] || target < nums[start]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else if (nums[mid] < nums[end] || nums[start] > nums[mid]) {
      if (target < nums[mid] || target > nums[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // all values the same
      // move the end pointer
      end--;
    }
  }

  return -1;
}

console.log(3, sol2([5, 6, 7, 0, 0, 1, 2, 3, 4], 3));
console.log(6, sol2([5, 6, 7, 0, 1, 2, 2, 3, 4], 6));

// find the min

function sol3(nums) {
  const n = nums.length;
  // if not rotated, or nums has length 1
  if (nums[0] < nums[n - 1] || n === 1) return nums[0];

  let start = 0;
  let end = n - 1;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (mid > 0 && nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    if (nums[start] < nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.log(sol3([5, 6, 7, 0, 1, 2, 3, 4]));
console.log(sol3([5, 6, 2, 3, 4]));
console.log(sol3([2, 3, 4, 5, 1]));

// find min, with dups

function sol4(nums) {
  const n = nums.length;
  let start = 0;
  let end = n - 1;

  if (nums[0] < nums[n - 1]) return nums[0];

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[end] < nums[mid]) {
      start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      end--;
    }
  }

  return nums[start];
}

console.log(sol4([5, 6, 7, 7, 0, 1, 1, 2, 3, 4]));
console.log(sol4([5, 6, 6, 2, 3, 4, 4]));
console.log(sol4([2, 3, 3, 4, 4, 5, 1]));
