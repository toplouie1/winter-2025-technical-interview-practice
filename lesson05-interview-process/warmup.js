function reverseString(str) {
	return [...str].reverse().join("");
}
console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
	return str
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
}

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str) {
	let vowels = ["a", "e", "i", "o", "u"];
	let vowelCount = 0;

	for (let each of str) {
		if (vowels.includes(each)) {
			vowelCount++;
		}
	}
	return vowelCount;
}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
