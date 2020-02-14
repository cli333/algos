// find max substring
// time: o(m*n), space: o(n)

const max = (string1, string2) => {
	let matrix = [...Array(string1.length + 1)].map(row => Array(string2.length + 1).fill(0));

	let coords = {
		length: 0,
		xY: [],
	};

	for (let i = 1; i <= string1.length; i++) {
		for (let j = 1; j <= string2.length; j++) {
			if (string1[i - 1] === string2[j - 1]) {
				matrix[i][j] = matrix[i - 1][j - 1] + 1;
				coords.length++;
				coords.xY = [i, j];
			}
		}
	}

	let string = '';
	let x = coords.xY[0];
	while (coords.length) {
		string = string1[x - 1] + string;
		coords.length--;
		x--;
	}

	return string;
};

console.log(max('abhe', 'helo'));
