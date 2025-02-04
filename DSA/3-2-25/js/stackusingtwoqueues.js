class Stack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    insert(element) {
        this.q1.push(element);
    }

    delete() {
        if (this.q1.length === 0) {
            console.log("Stack is empty! Cannot pop.");
            return null;
        }

        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        let poppedElement = this.q1.shift();
        [this.q1, this.q2] = [this.q2, this.q1];

        return poppedElement;
    }

    topElement() {
        if (this.q1.length === 0) {
            return "Stack is empty!";
        }

        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        let top = this.q1[0];
        this.q2.push(this.q1.shift());
        [this.q1, this.q2] = [this.q2, this.q1];

        return top;
    }

    isEmpty() {
        return this.q1.length === 0;
    }

    length() {
        return this.q1.length;
    }

    printStack() {
        console.log("Stack:", [...this.q1].reverse().join(" → "));
    }
}

const stack = new Stack();
stack.insert(10);
stack.insert(20);
stack.insert(30);
stack.printStack();  // Stack: 30 → 20 → 10

console.log("Top Element:", stack.topElement());  // Top Element: 30
console.log("Popped:", stack.delete());  // Popped: 30
console.log("New Top Element:", stack.topElement());  // New Top Element: 20
console.log("Stack Size:", stack.length());  // Stack Size: 2
console.log("Is Stack Empty?", stack.isEmpty());  // Is Stack Empty? false

stack.printStack();  // Stack: 20 → 10
