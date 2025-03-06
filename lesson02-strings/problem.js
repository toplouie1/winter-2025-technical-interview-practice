/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
	// Store unique characters
	let seen = new Set();
	// Left pointer
	let left = 0;
	// Store the longest substring length
	let longestSub = 0;

	for (let right = 0; right < s.length; right++) {
		while (seen.has(s[right])) {
			// Remove left indexed character character because we want
			// now find the if there is any other substring available .
			seen.delete(s[left]);
			left++; // Move left pointer forward
		}
		// Add current character
		seen.add(s[right]);
		// Update max length
		longestSub = Math.max(longestSub, right - left + 1);
	}

	return longestSub;
}

console.log(lengthOfLongestSubstring("hfhfhff"));

module.exports = lengthOfLongestSubstring;
