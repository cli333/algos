// given an array, nums, of integers where n > 1,
// return an array, output
// such taht outpu[i] is equal to the product of all of the elemnts of nums
// except nums[i]

// [1,2,3,4]
// output [24,12,8,6]

// solve in o(n) time and WITHOUT division

const solve = nums => {
	// product of everything to left of index * product of everything to right of index
	let output = [];
	let leftProducts = [...Array(nums.length)].fill(1);
	let rightProducts = [...Array(nums.length)].fill(1);

	// find left of each index
	for (let i = 1; i < nums.length; i++) {
		leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
	}
	// find right of each index
	for (let i = nums.length - 2; i >= 0; i--) {
		rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
	}
	// multiply the two aras
	for (let i = 0; i < nums.length; i++) {
		output[i] = leftProducts[i] * rightProducts[i];
	}
	console.log(leftProducts, rightProducts);
	return output;
};

console.log(solve([1, 2, 3, 4]));
