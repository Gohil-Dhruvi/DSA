class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    appendData(val) {
        let temp = new Node(val);
        if (this.head === null) {
            this.head = temp;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = temp;
    }

    display() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }
        let result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }

    reverseData() {
        let current = this.head;
        let previous = null,
            next = null;

        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }
}

let obj = new SinglyLinkedList();
obj.appendData(10);
obj.appendData(20);
obj.appendData(30);
obj.appendData(40);
obj.appendData(50);

obj.display();

obj.reverseData();
obj.display();
