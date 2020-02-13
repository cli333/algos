const stair = n => {
	for (let i = 0; i < n; i++) {
		let step = '';
		for (let j = 0; j < n; j++) {
			step += j <= i ? 'x' : ' ';
		}
		console.log(step);
	}
};

// stair(3);

const stair2 = (n, row = 0, col = 0, step = '') => {
	if (row === n) return;
	if (step.length === n) {
		console.log(step);
		return stair2(n, row + 1);
	}
	step += col <= row ? 'x' : ' ';
	return stair2(n, row, col + 1, step);
};

stair2(5);
