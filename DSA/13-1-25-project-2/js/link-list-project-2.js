// 1. Write a program for Reverse Link List

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class SinglyLinkList{
//     constructor(){
//         this.head = null;
//     }

//     appendData(value){
//         let temp = new Node(value);
//         if(this.head == null){
//             this.head = temp;
//             return;
//         }
//         let current =  this.head;
//         while(current.next !== null){
//            current = current.next; 
//         }
//         current.next = temp;
//     }
//     Display(){
//         if(this.head === null){
//             console.log("This Lisst is empty...");
//             return;
//         }
//         let result = [];
//         let current = this.head;
//         while(current !== null){
//             result.push(current.data);
//             current = current.next;
//         }
//         console.log(result.join(" -> "));
//     }

//     ReverseData(){
//         let current = this.head;
//         let prev = null, next =null;

//         while(current !== null){
//             next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }
//         this.head = prev;
//     }
// }

// let obj = new SinglyLinkList();
// obj.appendData(10);
// obj.appendData(20);
// obj.appendData(30);
// obj.appendData(40);
// obj.appendData(50);

// console.log("Original List:");
// obj.Display();

// obj.ReverseData();
// console.log("Reversed List:");
// obj.Display();

// Expected Output :- 
// Original List: 10 -> 20 -> 30 -> 40 -> 50
// Reversed List: 50 -> 40 -> 30 -> 20 -> 10

// 2. Write a Program for Given Link List is Palindrome or not

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     appendData(val) {
//         const temp = new Node(val);
//         if (this.head == null) {
//             this.head = temp;
//             return;
//         }
//         let current = this.head;
//         while (current.next != null) {
//             current = current.next;
//         }
//         current.next = temp;
//     }

//     isPalindrome() {
//         let values = [];
//         let current = this.head;

//         while (current != null) {
//             values.push(current.data);
//             current = current.next;
//         }

//         let start = 0;
//         let end = values.length - 1;
//         while (start < end) {
//             if (values[start] !== values[end]) {
//                 return false;
//             }
//             start++;
//             end--;
//         }
//         return true;
//     }

//     display() {
//         if (this.head == null) {
//             console.log("The linked list is empty.");
//             return;
//         }
//         let result = [];
//         let current = this.head;
//         while (current != null) {
//             result.push(current.data);
//             current = current.next;
//         }
//         console.log("Linked List:", result.join(" -> "));
//     }
// }

// let linkedList = new SinglyLinkedList();

// linkedList.appendData(10);
// linkedList.appendData(20);
// linkedList.appendData(30);
// linkedList.appendData(20);
// linkedList.appendData(10);

// linkedList.display();

// console.log("Is Palindrome:", linkedList.isPalindrome());

// Expected Output :-
// Linked List: 10 -> 20 -> 30 -> 20 -> 10 ,
// Is Palindrome: true

// 3. Write a Program for Removing Link list Element at any Position.

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SingleLinkList {
//     constructor() {
//         this.head = null;
//     }

//     appendData(val) {
//         let temp = new Node(val);
//         if (this.head == null) {
//             this.head = temp;
//         } else {
//             let current = this.head;
//             while (current.next != null) {
//                 current = current.next;
//             }
//             current.next = temp;
//         }
//     }


//     removeFirstData() {
//         if (this.head == null) {
//             console.log("List is already empty...");
//         } else {
//             this.head = this.head.next;
//         }
//     }

//     removeEndData() {
//         if (this.head == null) {
//             console.log("List is already empty...");
//         } else if (this.head.next == null) {
//             this.head = null;
//         } else {
//             let current = this.head;
//             let prev = null;
//             while (current.next != null) {
//                 prev = current;
//                 current = current.next;
//             }
//             prev.next = null;
//         }
//     }

//     removeAtPosition(pos) {
//         if (this.head == null) {
//             console.log("List is already empty...");
//             return;
//         }

//         if (pos <= 0) {
//             console.log("Invalid position. Use a positive integer.");
//             return;
//         }

//         if (pos === 1) {
//             this.removeFirstData();
//             return;
//         }

//         let current = this.head;
//         let count = 1;
//         let prev = null;

//         while (current != null && count < pos) {
//             prev = current;
//             current = current.next;
//             count++;
//         }

//         if (current == null) {
//             console.log("Position is out of bounds.");
//         } else {
//             prev.next = current.next;
//         }
//     }

//     display() {
//         let result = [];
//         if (this.head == null) {
//             console.log("List is Empty");
//         } else {
//             let current = this.head;
//             while (current != null) {
//                 result.push(current.data);
//                 current = current.next;
//             }
//             console.log(result.join(" -> "));
//         }
//     }
// }

// let obj = new SingleLinkList();

// obj.appendData(10);
// obj.appendData(20);
// obj.appendData(30);
// obj.appendData(40);
// obj.appendData(10);
// obj.appendData(20);
// obj.appendData(30);
// obj.appendData(40);

// console.log("Original List:");
// obj.display();

// console.log("Removing List:");
// obj.removeEndData();
// obj.removeAtPosition(3);
// obj.removeFirstData();

// obj.display();

//  Expected Output :- 
// Original List: 10 -> 20 -> 30 -> 40 -> 10 -> 20 -> 30 -> 40
// Removing List: 20 -> 40 -> 10 -> 20 -> 30

