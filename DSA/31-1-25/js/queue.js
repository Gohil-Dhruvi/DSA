// simple Queue 

// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return "Queue is empty, cannot dequeue.";
//         }
//         return this.items.shift();
//     }

//     front() {
//         return this.isEmpty() ? "Queue is empty" : this.items[0];
//     }

//     rear() {
//         return this.isEmpty() ? "Queue is empty" : this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }

//     clear() {
//         this.items = [];
//     }

//     printQueue() {
//         console.log(this.isEmpty() ? "Queue is empty" : this.items.join(" -> "));
//     }
// }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.printQueue();  // Output: 10 -> 20 -> 30
// console.log("Dequeued:", queue.dequeue());  // Output: Dequeued: 10
// console.log("Front:", queue.front());  // Output: Front: 20
// console.log("Rear:", queue.rear());  // Output: Rear: 30
// console.log("Is Empty?", queue.isEmpty());  // Output: false
// console.log("Size:", queue.size());  // Output: 2

// queue.clear();
// console.log("After clearing the queue:");
// queue.printQueue();  
// Output: Queue is empty

// Circular Queue :-

class CircularQueue {
    constructor(size) {
        this.size = size;
        this.items = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    isEmpty() {
        return this.front === -1;
    }

    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue is full, cannot enqueue.");
            return;
        }
        if (this.isEmpty()) {
            this.front = this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.size;
        }
        this.items[this.rear] = element;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty, cannot dequeue.");
            return null;
        }
        let dequeuedElement = this.items[this.front];
        if (this.front === this.rear) {
            this.front = this.rear = -1; 
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return dequeuedElement;
    }

    frontElement() {
        return this.isEmpty() ? "Queue is empty" : this.items[this.front];
    }

    currentSize() {
        if (this.isEmpty()) return 0;
        return (this.rear >= this.front) ? 
            (this.rear - this.front + 1) : 
            (this.size - this.front + this.rear + 1);
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }
        let result = [];
        let i = this.front;
        while (true) {
            result.push(this.items[i]);
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }
        console.log(result.join(" -> "));
    }
}

const queue = new CircularQueue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.printQueue();  // Output: 10 -> 20 -> 30 -> 40 -> 50

console.log("Dequeued:", queue.dequeue());  // Output: Dequeued: 10
queue.enqueue(60);
queue.printQueue();  // Output: 20 -> 30 -> 40 -> 50 -> 60

console.log("Front Element:", queue.frontElement());  // Output: Front Element: 20
console.log("Queue Size:", queue.currentSize());  // Output: Queue Size: 5
