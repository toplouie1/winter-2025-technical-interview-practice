// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"
const generateStars = (n) => {
	// inorder to generate the string with n stars, we can use the repeat method
	return "*".repeat(n);
};
console.log(generateStars(5));
console.log("\n");

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'
const generateSpaceStarts = (n) => {
	// inorder to solve this problem .
	// add a start to the front and back .
	// for the middle i will use repeat method but subtract 2
	return "*" + " ".repeat(n - 2) + "*";
};
console.log(generateSpaceStarts(6));
console.log("\n");

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

const generateRectangle = (n, m) => {
	// create a top and bottom start with the repeat method of m char
	const topBottomLine = "*".repeat(m);
	// and also add a repeat method in the middle for all spaces .
	const middleLine = "*" + " ".repeat(m - 2) + "*";

	// create a variable to store the middle line and add a break line char so it goes to the next line
	// create a middle with adding the start at the front and back .
	let rectangle = topBottomLine + "\n";
	for (let i = 0; i < n - 2; i++) {
		rectangle += middleLine + "\n";
	}
	// then add the topbottom so the end line is covered with stars
	rectangle += topBottomLine;

	return rectangle;
};

console.log(generateRectangle(5, 5));

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
