const pyr = n => {
	let base = 2 * n - 1;
	let mid = Math.floor(base / 2);
	for (let i = 0; i < n; i++) {
		let level = '';
		for (let j = 0; j < base; j++) {
			if (j >= mid - i && j <= mid + i) {
				level += 'x';
			} else {
				level += '.';
			}
		}
		console.log(level);
	}
};

// pyr(5);

const pyr2 = (n, row = 0, col = 0, level = '') => {
	let base = 2 * n - 1;
	let mid = Math.floor(base / 2);

	if (row === n) return;
	if (level.length === base) {
		console.log(level);
		return pyr2(n, row + 1);
	}

	level += col >= mid - row && col <= mid + row ? 'x' : '.';
	return pyr2(n, row, col + 1, level);
};

pyr2(5);
