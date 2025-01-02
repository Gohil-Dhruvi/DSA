// 1. Bubble Sorting

let BubbleData = [34, 7, 12, 32, 5, 62, 29, 16, 85, 50];

function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
    }
    return arr;
}
console.log(BubbleSort(BubbleData));

// Expected Output : (10) [5, 7, 12, 16, 29, 32, 34, 50, 62, 85]

// 2. Section Sorting 

let SectionData = [16, 85, 7, 12, 2, 29, 11, 17, 20, 10, 11];

function SectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tem = arr[i];
                arr[i] = arr[j];
                arr[j] = tem;
            }
        }
    }
    return arr;
}
console.log(SectionSort(SectionData));

// Expected Output : (11) [2, 7, 10, 11, 11, 12, 16, 17, 20, 29, 85]

// 3. Merge Sorting

const array = [12, 11, 13, 5, 6, 7];

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [],
        i = 0,
        j = 0;

    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log("Sorted Array:", mergeSort(array));

// Expected Output :(6) [5, 6, 7, 11, 12, 13]

// 4. Quick Sort

const arr1 = [8, 3, 1, 7, 0, 10, 2];
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = []; 
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const sortedArray = quickSort(arr1);
console.log("Sorted Array:", sortedArray);

// Expected Output :(7) [0, 1, 2, 3, 7, 8, 10]