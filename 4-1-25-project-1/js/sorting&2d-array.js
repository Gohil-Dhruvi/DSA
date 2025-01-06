//1.  Write a JavaScript Function to Descending Order data converting using Bubble sort.

let BubbleData = [34, 7, 12, 32, 5, 62, 29, 16, 85, 50];

function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(BubbleSort(BubbleData));

// Expected Output: (10) [85, 62, 50, 34, 32, 29, 16, 12, 7, 5]

// 2. Write a JavaScript Function to Ascending Order data converting using Merge sort.

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);

// Expected Output: (7) [3, 9, 10, 27, 38, 43, 82]

// 3. Write a JavaScript Program 2-D array print and also print its's square of every element.

let Matrix = [
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18]
];

function squareMatrixElements(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j < matrix[i].length; j++) {
            row.push(matrix[i][j] * matrix[i][j]);
        }
        result.push(row);
    }
    return result;
}

let squaredMatrix = squareMatrixElements(Matrix);
console.log("Original Matrix:",Matrix);
console.log("Square Matrix:",squaredMatrix);

// Expected Output:
// [
//     [4, 16, 36],
//     [64, 100, 144],
//     [196, 256, 324]
// ]
