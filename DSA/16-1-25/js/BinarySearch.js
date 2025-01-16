// Binary Search: -

let Data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
let SearchElement = 130;

function binarySearch(arr, searchEle) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === searchEle) {
            return mid;
        } else if (arr[mid] < searchEle) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

let res = binarySearch(Data, SearchElement);
if (res !== -1) {
    console.log(`Element is Found at ${res} index`);
} else {
    console.log('Element is not Found...');
}

// Expected Output: - Element is Found at 12 index

// Ascending Order in Binary Search :- 

let data = [25, 196, 74, 125, 107, 44, 47, 84, 158, 70, 106, 20, 111, 33, 137, 196, 164, 175, 119, 132];

function ForBinaryBuubleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let tem = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tem;
            }
        }
    }
console.log("Sorted Array in Ascending  Order :- ", array);
}

ForBinaryBuubleSort(data);

let arr = [20, 25, 33, 44, 47, 70, 74, 84, 106, 107, 111, 119, 125, 132, 137, 158, 164, 175, 196, 196];
let searchElement = 16;

function binarySearch(arr, searchEle) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === searchEle) {
            return mid;
        } else if (arr[mid] < searchEle) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

let result = binarySearch(arr, searchElement);
if (result !== -1) {
    console.log(`Element is Found at ${result} index`);
} else {
    console.log('Element is not Found...');
}

// Expected Output :- 
// Sorted Array in Ascending  Order :-  (20) [20, 25, 33, 44, 47, 70, 74, 84, 106, 107, 111, 119, 125, 132, 137, 158, 164, 175, 196, 196]
// Element is not Found...

// Descending Order in Binary Search :-  

let unsortedData = [15, 92, 43, 67, 51, 84, 18, 29, 76, 59, 103, 25, 38, 41, 79, 94, 86, 50, 61, 69];

function bubbleSortDescending(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log("Sorted Array in Descending Order :- ", array);
}

bubbleSortDescending(unsortedData);

let sortedArray = [20, 25, 33, 44, 47, 70, 74, 84, 106, 107, 111, 119, 125, 132, 137, 158, 164, 175, 196, 196];
let elementToSearch = 33;

function binarySearch(array, targetElement) {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === targetElement) {
            return mid;
        } else if (array[mid] < targetElement) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

let searchResult = binarySearch(sortedArray, elementToSearch);
if (searchResult !== -1) {
    console.log(`Element is found at index ${searchResult}`);
} else {
    console.log('Element is not found...');
}

// Expected Output :- 
// Sorted Array in Descending Order :-  (20) [103, 94, 92, 86, 84, 79, 76, 69, 67, 61, 59, 51, 50, 43, 41, 38, 29, 25, 18, 15]
//  Element is found at index 2

// "Finds a pair of numbers in a sorted array whose sum equals the given target using the two-pointer technique." : -

let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let targetSum = 90;

function findPairWithSum(array, target) {
    let left = 0, right = array.length - 1;

    while (left < right) {
        if (array[left] + array[right] === target) {
            return [left, right];
        } else if (array[left] + array[right] < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

console.log(findPairWithSum(num, targetSum));

// Expected Output :- [0, 7]

// "Finds a pair of numbers in a sorted array whose absolute difference equals the given target using the two-pointer technique." : -

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let targetDifference = 60;

function findPairWithSubtraction(array, difference) {
    let left = 0, right = array.length - 1;

    while (left < right) {
        if (Math.abs(array[left] - array[right]) === difference) {
            return [left, right];
        } else if (Math.abs(array[left] - array[right]) < difference) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

console.log(findPairWithSubtraction(numbers, targetDifference));

// Expected Output :- [0, 6]



