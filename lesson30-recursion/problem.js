/**
 * Write a function called `sumArrayRecursively` that takes an array of numbers
 * and returns the sum of its elements using recursion.
 *
 * Examples:
 *  sumArrayRecursively([]) => 0
 *  sumArrayRecursively([1]) => 1
 *  sumArrayRecursively([1, 2, 3]) => 6
 *
 * @param {number[]} arr - An array of numbers
 * @return {number} - The sum of the array's elements
 */
function sumArrayRecursively(arr) {
	// base case .
	if (arr.length == 0) return 0;
	return (
		arr[arr.length - 1] + sumArrayRecursively(arr.slice(0, arr.length - 1))
	);
}

module.exports = sumArrayRecursively;
