// flipping matrix

// Problem Description:
// You are given a square matrix of size n x n (where n is an even number). The goal is to maximize the sum of the top-left n/2 x n/2 quadrant of the matrix by flipping rows and columns optimally.
// You can flip rows and columns, but after flipping, you must find the maximum possible value for the top-left quadrant and sum these values.

const flippingMatrix = (matrix) => {
	// i want to create a variable to store the half length of the matriz .
	// create a variable maxSum;
	// loop over the marrix row with the half .
	// then loop over the column by the half also .

	let maxSum = 0;
	let half = matrix.length / 2;
	let full = matrix.length - 1;

	for (let i = 0; i < half; i++) {
		for (let j = 0; j < half; j++) {
			// we also need to create the 4 varaible where each side will be available .
			let l1 = matrix[i][j];
			let l2 = matrix[full - i][j];
			let l3 = matrix[i][full - j];
			let l4 = matrix[full - i][full - j];
			console.log(maxSum);
			console.group(l1, l2, l3, l4);
			maxSum += Math.max(l1, l2, l3, l4);
		}
	}
	return maxSum;
};

let arr = [
	[112, 42, 83, 119],
	[56, 125, 56, 49],
	[15, 78, 101, 43],
	[62, 98, 114, 108],
];

console.log(flippingMatrix(arr));
