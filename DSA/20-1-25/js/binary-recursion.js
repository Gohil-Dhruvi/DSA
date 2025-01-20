// Recursive  :-

function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * factorialRecursive(n - 1); 
}

console.log("Factorial (Recursive) of 6:", factorialRecursive(6)); 

// Expected Output :- 720

// OR 

function factorialRecursiveAlt(n, result = 1) {
    return (n === 0 || n === 1) ? result : factorialRecursiveAlt(n - 1, result * n);
}

console.log("Factorial (Recursive) of 5:", factorialRecursiveAlt(5)); 

// Expected Output :- 120

// Iterative :-

function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }
    return result;
}

console.log("Factorial (Iterative) of 7:", factorialIterative(7)); 

// Expected Output :- 5040

// OR 

function factorialIterativeAlt(n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--; 
    }
    return result;
}

console.log("Factorial (Iterative) of 8:", factorialIterativeAlt(8)); 

// Expected Output :- 40320

// Binary search using recursion :- 

let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];

let targetValue = 7;

function binaryRecursive(arr, target, left, right) {
    if (left > right) {
        return -1; 
    }
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; 
    }
    if (target < arr[mid]) {
        return binaryRecursive(arr, target, left, mid - 1); 
    } else {
        return binaryRecursive(arr, target, mid + 1, right); 
    }
}

let result = binaryRecursive(sortedArray, targetValue, 0, sortedArray.length - 1);

if(result != -1){
    console.log(`Target ${targetValue} found at index ==>`, result); 
}else{
    console.log('Target is not found...');
    
}

// Output: Target 7 found at index: 3
