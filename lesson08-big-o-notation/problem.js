// Write a function that takes in a positive integer n and returns the sum of all consecutive numbers from 1 to n. Think carefully about time complexity for this problem. How would you do it in linear time? Is there a way to do it in constant time? Try to come up with both solutions. Start with the most straightforward solution and then try to optimize it. You may want to do some research. ;)

/**
 * Calculates the sum of consecutive numbers from 1 to n.
 * @param {number} n - The positive integer.
 * @returns {number} The sum of consecutive numbers from 1 to n.
 */
function sumConsecutiveNumbers(n) {
	// Your code here
	// so go from 1 to n ;
	// linear time we could just loop from 1 to n
	// while adding the values .
	let result = 0;

	for (let i = 0; i <= n; i++) {
		result += i;
	}
	return result;
}
module.exports = sumConsecutiveNumbers;
