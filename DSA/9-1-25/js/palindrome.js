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
        if (this.head == null) {
            this.head = temp;
            return;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = temp;
    }

    isPalindrome() {
        let response = [];
        let current = this.head;

        while (current != null) {
            response.push(current.data);
            current = current.next;
        }

        let start = 0;
        let end = response.length - 1;
        while (start < end) {
            if (response[start] !== response[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    display() {
        if (this.head == null) {
            return;
        }
        let result = [];
        let current = this.head;
        while (current != null) {
            result.push(current.data);
            current = current.next;
        }
    }
}

let obj = new SinglyLinkedList();

obj.appendData(10);
obj.appendData(20);
obj.appendData(30);
obj.appendData(40);
obj.appendData(10);

obj.display();
console.log(obj.isPalindrome());

// Expected Output :- false 