class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkList {
    constructor() {
        this.head = null;
    }

    // Insert Data into End
    appendData(val) {
        let temp = new Node(val);
        if (this.head == null) {
            this.head = temp;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = temp;
        }
    }

    // Insert Data into First
    prependData(val) {
        let temp = new Node(val);

        if (this.head == null) {
            this.head = temp;
        } else {
            temp.next = this.head;
            this.head = temp;
        }
    }

    // Removing Data from First
    removeFirstData() {
        if (this.head == null) {
            console.log('List is already empty...');
        } else if (this.head.next == null) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }
    }

    // Removing Data from End
    removeEndData() {
        if (this.head == null) {
            console.log('List is already empty...');
        } else if (this.head.next == null) {
            this.head = null;
        } else {
            let current = this.head;
            let prev = null;
            while (current.next != null) {
                prev = current;
                current = current.next;
            }
            prev.next = null;
        }
    }

    // Displaying Data
    display() {
        let result = [];
        if (this.head == null) {
            console.log('List is Empty');
        } else {
            let current = this.head;
            while (current != null) {
                result.push(current.data);
                current = current.next;
            }
            console.log(result.join(" -> "));
        }
    }
}

let obj = new SingleLinkList();

obj.appendData(10);
obj.appendData(10);
obj.appendData(10);
obj.appendData(10);

obj.prependData(100);
obj.prependData(100);
obj.prependData(100);

obj.display(); // Display list after appending and prepending data

obj.removeEndData(); // Remove last node

obj.removeFirstData(); // Remove first node

obj.display(); // Display list after removal of nodes
