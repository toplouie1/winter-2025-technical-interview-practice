/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

// TODO: Implement the string matching algorithm
// Return an array of indices where the pattern is found in the text
// If the pattern is not found, return an empty array
//  we will create a array that will store all the valid stringMatching indexes
// i believe using 2 pointer should be helpful here because we want to find some mathcing substring witht the patter that is given
// create a left and right pointer
// left pointer wil start from 0
// right pointer will start from 0
// create a while loop which will loop until the right is lesser then the text length .
// inside the while loop .
// move the right pointer if the first character matches and keep moving the right until all the pattern length has been checked
// if all the pattern are checked we will add the value of the left index to the array .
// then we will move the left value once and start the whole thing again .
// i think we might have the while loop initaiated as when the left is <= because there could be a situation where the right has touched the last value
// and there might still be a last loop that will not touch .

function stringMatching(text, pattern) {
	let result = [];
	let left = 0;

	// guard clause
	if (text === "" || pattern === "") return [];

	while (left <= text.length - pattern.length) {
		let right = left;
		let match = true;

		// checking if there is a match ..
		for (let i = 0; i < pattern.length; i++) {
			if (text[right] !== pattern[i]) {
				match = false;
				break;
			}
			right++;
		}
		if (match) result.push(left);
		left++;
	}

	return result;
}

// Example usage:
console.log(stringMatching("ababcababcabc", "abc")); // Output: [2, 7, 10]
console.log(stringMatching("hello world", "xyz")); // Output: []
console.log(stringMatching("aaaaaa", "aa")); // Output: [0, 1, 2, 3, 4]

// soluton 2 :
// maybe just do for loop and check if there is a matching witht the pattern and just return the index if the pattter matches .
// solution 3 :
// could we just do some type of regex matching , which i wouldn;t be able to do with memory but definelty a solution path .

module.exports = stringMatching;
