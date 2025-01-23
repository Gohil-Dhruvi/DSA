// 1. Write a program to implement binary search to find the index of a target element in a sorted array. 

// let numbers = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145];
// let target = 115;

// function searchElement(arr, element) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === element) {
//             return mid;
//         } else if (arr[mid] < element) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
//     return -1;
// }

// let result = searchElement(numbers, target);
// if (result !== -1) {
//     console.log(`Element is found at index ${result}`);
// } else {
//     console.log('Element is not found...');
// }

// Expected Outpur:- Element is found at index 11

// 2. write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences.

// function lowerBound(arr, target) {
//     let left = 0, right = arr.length;

//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }
//     return left;
// }

// function upperBound(arr, target) {
//     let left = 0, right = arr.length;

//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] <= target) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }
//     return left;
// }

// function findFirstLastCount(arr, target) {
//     let first = lowerBound(arr, target);
//     let last = upperBound(arr, target) - 1; 

//     if (first < arr.length && arr[first] === target) {
//         let count = last - first + 1;
//         return {
//             firstOccurrence: first,
//             lastOccurrence: last,
//             count: count
//         };
//     } else {
//         return {
//             firstOccurrence: -1,
//             lastOccurrence: -1,
//             count: 0
//         };
//     }
// }

// const arr = [1, 2, 2, 2, 3, 4, 5, 6];
// const target = 2;
// const result = findFirstLastCount(arr, target);

// console.log(`First Occurrence: ${result.firstOccurrence}`);
// console.log(`Last Occurrence: ${result.lastOccurrence}`);
// console.log(`Count: ${result.count}`);

// Expected Output :- 
// First Occurrence: 1
// Last Occurrence: 3
// binary-project-3
// Count: 3

// 3. Write a program to find the pivot index where the rotation occurs in a rotated sorted array.


// let shiftedArray = [8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7];


// function findRotationPoint(arr) {
//     let left = 0;
//     let right = arr.length - 1;
    
//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
        
//         if (arr[mid] > arr[right]) {
//             left = mid + 1; 
//         } else {
//             right = mid; 
//         }
//     }
    
//     return left;
// }

// let rotationPoint = findRotationPoint(shiftedArray);

// console.log(`Input Array: ${shiftedArray}`);
// console.log(`Rotation Point Index: ${rotationPoint}`);
// console.log(`Rotation Point Element: ${shiftedArray[rotationPoint]}`);

//  Expected Output:- 
// Input Array: 8,9,10,11,12,13,14,15,1,2,3,4,5,6,7
// Index: 8
// Element: 1

