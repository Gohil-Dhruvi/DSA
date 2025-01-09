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

// 3. Merge Sorting

// function mergeSort(array) {
//     if (array.length <= 1) {
//         return array;
//     }

//     const mid = Math.floor(array.length / 2);
//     const left = array.slice(0, mid);
//     const right = array.slice(mid);

//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     let sortedArray = [];
//     let i = 0, j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             sortedArray.push(left[i]);
//             i++;
//         } else {
//             sortedArray.push(right[j]);
//             j++;
//         }
//     }

//     return sortedArray.concat(left.slice(i)).concat(right.slice(j));
// }

// const array = [38, 27, 43, 3, 9, 82, 10];
// const sortedArray = mergeSort(array);
// console.log("Sorted Array:", sortedArray);

// // 4. Quick Sort

// let QuickData = [12, 5, 8, 19, 3, 15, 7, 1, 10, 4];

// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr; 
//     }

//     const pivot = arr[arr.length - 1];
//     const left = [];
//     const right = []; 

//     for (let i = 0; i < arr.length - 1; i++) { 
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(SectionSort(QuickData));