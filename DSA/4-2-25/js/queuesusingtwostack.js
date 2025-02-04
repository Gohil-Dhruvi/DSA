class Queue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(element) {
        this.s1.push(element);
    }

    dequeue() {
        if (this.s1.length === 0 && this.s2.length === 0) {
            console.log("Queue is empty! Cannot dequeue.");
            return null;
        }

        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }

        return this.s2.pop();
    }

    frontElement() {
        if (this.s1.length === 0 && this.s2.length === 0) {
            return "Queue is empty!";
        }

        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }

        return this.s2[this.s2.length - 1];
    }

    isEmpty() {
        return this.s1.length === 0 && this.s2.length === 0;
    }

    length() {
        return this.s1.length + this.s2.length;
    }

    printQueue() {
        let output = [...this.s2.reverse(), ...this.s1];
        console.log("Queue:", output.join(" -> "));
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue();  // Queue: 10 -> 20 -> 30

console.log("Front Element:", queue.frontElement());  // Front Element: 10
console.log("Dequeued:", queue.dequeue());  // Dequeued: 10
console.log("New Front Element:", queue.frontElement());  // New Front Element: 20
console.log("Queue Size:", queue.length());  // Queue Size: 2
console.log("Is Queue Empty?", queue.isEmpty());  // Is Queue Empty? false

queue.printQueue();  // Queue: 20 -> 30
