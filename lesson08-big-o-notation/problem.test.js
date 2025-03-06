const sumConsecutiveNumbers = require("./problem");

test("sumConsecutiveNumbers should return 0 when n is 0", () => {
	expect(sumConsecutiveNumbers(0)).toBe(0);
});

test("sumConsecutiveNumbers should return 1 when n is 1", () => {
	expect(sumConsecutiveNumbers(1)).toBe(1);
});

test("sumConsecutiveNumbers should return 55 when n is 10", () => {
	expect(sumConsecutiveNumbers(10)).toBe(55);
});

test("sumConsecutiveNumbers should return 5050 when n is 100", () => {
	expect(sumConsecutiveNumbers(100)).toBe(5050);
});

test("sumConsecutiveNumbers should return 500500 when n is 1000", () => {
	expect(sumConsecutiveNumbers(1000)).toBe(500500);
});
