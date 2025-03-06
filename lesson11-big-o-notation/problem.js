/**
 * Problem: Implement a function that determines if a given year is a leap year. A leap year is a year that is divisible by 4, but not divisible by 100, unless it is divisible by 400. For example, 2000 is a leap year, but 1900 is not.
 * This should ideally run in O(1) time.
 */

function isLeapYear(year) {
	// TODO: Implement the function
	if (year % 4 == 0 && year % 100 == 0) {
		return true;
	}
}

module.exports = isLeapYear;
