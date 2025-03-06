// 1. Given two strings, return true if the strings are anagrams and false if not. Ignore spaces.

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

const anagrams = (str1, str2) => {
	//1st way
	// i want to first remvoe all the symobls and spaces from both string .
	// i can use regex ,
	// then i will cretae a hash to add add al the vallues from one file .
	// then i could loop over the other string to check if there is anyduplicate or extra characters .
	// check if there is any left over characters .
	//
	//2nd way
	// get rid of all the non character and spaces
	// then just sort both string .
	// then check if they are equal .
};

// 2. Solve the same problem as above but do not sort the strings. What is the difference in time complexity when we don't sort the strings?

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

// 3. Given two strings, how many characters would need to be added or replacedin order to make them anagrams

// "abad", "abcd" => 1
//  "aabb", "baba" => 0
// "aaaazzzz", "bbbbwwww" => 8

// create a variable for non equal characters.
// well i could just check how many characters equal to each other from the both string s.
// then return the not equal character .
