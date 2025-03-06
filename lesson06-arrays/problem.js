// Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index of the largest element if it meets the condition, otherwise -1.
 */

function checkLargestElement(nums) {
	// First, find the max number.
	let max = Math.max(...nums);
	let indexAt = null;

	// Loop over the nums array
	for (let i = 0; i < nums.length; i++) {
		// Check if the max element is at least twice as large as the current number
		if (max < nums[i] * 2 && nums[i] !== max) {
			return -1;
		}
		// If current number is the max, store its index
		if (nums[i] === max) {
			indexAt = i;
		}
	}

	// Return the index of the largest element
	return max;
}

console.log(checkLargestElement([1, 5, 3, 9, 2]));

module.exports = checkLargestElement;
