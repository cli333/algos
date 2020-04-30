// Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.
// Example 1:
// Input: ["23:59","00:00"]
// Output: 1
// Note:
// The number of time points in the given list is at least 2 and won't exceed 20000.
// The input time is legal and ranges from 00:00 to 23:59.

const solve = (times) => {
  // array of times seen
  const timesSeen = [];

  for (let time of times) {
    let [hours, minutes] = time.split(":");
    if (timesSeen[+hours * +minutes]) continue;
    timesSeen[+hours * 60 + +minutes] = true;
  }

  let firstTime = null;
  let prevTime = null;
  let minDiff = 1440;

  // 1440 is the max = hours * 60 + minutes
  for (let i = 0; i < 1440; i++) {
    if (timesSeen[i] && !firstTime) {
      firstTime = i;
      prevTime = i;
    } else {
      minDiff = Math.min(minDiff, Math.min(i - prevTime, 1440 - i + prevTime));
      prevTime = i;
    }
  }

  minDiff = Math.min(minDiff, 1440 - prevTime + firstTime);

  console.log({ firstTime, prevTime });

  return minDiff;
};

console.log(solve(["23:59", "00:00", "17:00", "01:00"]));
