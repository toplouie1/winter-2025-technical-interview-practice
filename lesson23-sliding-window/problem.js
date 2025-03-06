// Given a string s and an integer k, write a function that finds the length of the longest substring that contains at most k distinct characters.
// Input: s = "eceba", k = 2
// Output: 3
// Explanation: The substring "ece" has length 3 and contains 2 distinct characters.

// Input: s = "aa", k = 1
// Output: 2
// Explanation: The string "aa" has length 2 and contains 1 distinct character.

// Input: s = "abcdef", k = 3
// Output: 3
// Explanation: Any substring of length 3 contains exactly 3 distinct characters.

const longestSubstringKDistinct = (str, k) => {
	const distinctChar = {};
	let max = -Infinity,
		left = 0,
		right = 0;

	while (right < str.length) {
		// add the key / counter to the hash map
		distinctChar[str[right]] = (distinctChar[str[right]] || 0) + 1;
		// unique number of char
		let distinctNum = Object.keys(distinctChar).length;

		// check if distinct char is apllicable
		if (distinctNum <= k) {
			max = Math.max(max, right - left + 1);
			right++;
		} else {
			if (distinctChar[str[left]] === 1) {
				delete distinctChar[str[left]];
			} else {
				distinctChar[str[left]] -= 1;
			}
			left++;
		}
	}

	return max === -Infinity ? 0 : max;
};

console.log(longestSubstringKDistinct("eceba", 2));
console.log(longestSubstringKDistinct("aa", 1));
console.log(longestSubstringKDistinct("abcdef", 3));
