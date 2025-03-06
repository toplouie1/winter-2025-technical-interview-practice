const people = [
	{ name: "jake", age: 77 },
	{ name: "miranda", age: 11 },
	{ name: "jake", age: 27 },
];

const groupedByAge = Object.groupBy(people, (person) => person.age);
console.log(groupedByAge);
