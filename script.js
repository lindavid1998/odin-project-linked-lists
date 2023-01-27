class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	head() {
		return this.head;
	}

	tail() {
		let current = this.head;
		while (current.nextNode != null) {
			current = current.nextNode;
		}

		return current;
	}

	prepend(value) {
		this.head = new Node(value, this.head);
	}

	append(value) {
		let newNode = new Node(value);

		let current = this.head;
		if (current == null) {
			this.head = current;
		}

		while (current.nextNode != null) {
			current = current.nextNode;
		}

		current.nextNode = newNode;
	}

	size() {
		let count = 0;
		let current = this.head;
		while (current != null) {
			count += 1;
			current = current.nextNode;
		}

		return count;
	}

	at(index) {
		let current = this.head;

		for (let i = 0; i < index; i++) {
			if (current == null) return;
			current = current.nextNode;
		}

		return current;
	}

	pop() {
		let current = this.head;

		if (current.nextNode == null) {
			this.head = null;
			return;
		}

		while (current.nextNode.nextNode != null) {
			current = current.nextNode;
		}

		current.nextNode = null;
	}

	contains(value) {
		let current = this.head;
		while (current != null) {
			if (current.value == value) return true;
			current = current.nextNode;
		}

		return false;
	}

	find(value) {
		let current = this.head;
		let index = 0;
		while (current != null) {
			if (current.value == value) {
				return index;
			}

			index += 1;
			current = current.nextNode;
		}

		return null;
	}

	toString() {
		let output = '';

		let current = this.head;
		while (current != null) {
			output += `( ${current.value} ) -> `;
			current = current.nextNode;
		}

		output += '(null)';
		console.log(output);
		return output;
	}

	insertAt(value, index) {
		if (index == 0) {
			this.prepend(value);
			return;
		}

		if (index == this.size()) {
			this.append(value);
			return;
		}

		if (index > this.size()) return;

		let current = this.head;
		let i = 0;
		while (i < index - 1) {
			current = current.nextNode;
			i += 1;
		}

		current.nextNode = new Node(value, current.nextNode);
	}

	removeAt(index) {
		let current = this.head;
		if (!current || index >= this.size()) return;

		if (index == 0) {
			this.head = current.nextNode;
			return;
		}

		let i = 0;
		while (i < index - 1) {
			current = current.nextNode;
			i += 1;
		}

		current.nextNode = current.nextNode.nextNode;
	}
}

class Node {
	constructor(value = null, next = null) {
		this.value = value;
		this.nextNode = next;
	}
}

let list = new LinkedList(new Node(3));
list.toString(); // 3

list.append(4);
list.append(7);
list.prepend(5);
list.toString(); // 5 3 4 7

list.removeAt(4);
list.toString(); // 5 3 4 7

list.removeAt(2);
list.toString(); // 5 3 7

list.removeAt(20);
list.toString(); // 5 3 7

list.removeAt(0);
list.toString(); // 3 7

list.insertAt(200, 0);
list.toString(); // 200 3 7

list.insertAt(10, 1);
list.toString(); // 200 10 3 7

list.insertAt(200, 10);
list.toString(); // 200 10 3 7

list.insertAt(40, 4);
list.toString(); // 200 10 3 7 40

list.insertAt(50, 3);
list.toString(); // 200 10 3 50 7 40
