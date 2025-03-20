// Below we provided a partially completed linked list with the push and display method. Create the basic operations for a linked list
// get method

// given an index return the node at that index
// if the index is less than zero or greater or equal to the length return null
// return the node once found
// pop method
// removes the last node in the linked list and returns the new tail;
// if the linked list is empty than return undefined
// shift method
// if the linked list is empty return undefined
// removed the first node in the linked list
// returns the new head
// unshift method
// takes a value and add the new node to the linked list
// the head should be the new node
// return the linked list
// insert method
// given an index add a new node at that index
// return linked list
// remove method
// given an index remove the node at that index
// return the node now at that index

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
	}

	push(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			return;
		}
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = newNode;
	}

	shift() {}

	unshift(data) {}

	pop() {
		if (!this.head) return null;

		if (!this.head.next) {
			this.head = null;
			return;
		}

		let current = this.head;
		while (current.next.next) {
			current = current.next;
		}

		current.next = null;
	}

	get(index) {
		// need to return the value if it is within the node .
		if (!this.head) return undefined;
		if (index < 0) return undefined;

		let current = this.head;
		let counter = 0;

		while (current) {
			if (counter === index) return current;
			current = current.next;
			counter++;
		}
	}

	insert(index, data) {}

	remove(index) {}

	display() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}
module.exports = LinkedList;
