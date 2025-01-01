// Famous DSA Array Problems in JavaScript

// 1. Find the Maximum Element in an Array

function findMax(arr) {
    let max = arr[0]; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([16,8,5,7,12,2])); 

// Expected Output : 16

// OR 

function findMaxMethod(arr) {
    return Math.max(...arr);
}
console.log(findMaxMethod([16,7,29,11,17]));

// Expected Output : 29

// 2. Find the Minimum Element in an Array

function findMin(arr) {
    let min = arr[0]; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin([7, 123, 441, 180, 75, 95])); 

// Expected Output : 7

// OR 

function findMinMethod(arr) {
    return Math.min(...arr);
}
console.log(findMinMethod([188,20,104,55,525,89]));

// Expected Output : 20

// 3. Calculate the Total Sum of an Array

function totalSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(totalSum([38, 11, 49, 51, 50, 39])); 

// Expected Output : 238

// OR 

function totalSumMethod(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(totalSumMethod([30, 1, 4, 16, 5, 29]));

// Expected Output : 85

// 4. Calculate the Factorial of a Number

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

// Expected Output : 120

// 5. Reverse an Array

function reverseArrayMethod(arr) {
    return arr.reverse();
}
console.log(reverseArrayMethod([1, 2, 3, 4, 5])); 

// Expected Output : [5, 4, 3, 2, 1]
