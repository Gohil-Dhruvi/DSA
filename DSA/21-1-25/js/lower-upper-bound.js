// let data = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9];

// let serchEle = 1;

// function lowerBound(arr, target) {
//     let low = 0,
//         high = arr.length - 1;
//     let result = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] >= target) {
//             result = mid;
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return result;
// }

// function upperBound(arr, target) {
//     let low = 0,
//         high = arr.length - 1;
//     let result = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] > target) {
//             result = mid;
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return result; ghjkl
// }

// function numberOfOccurence(arr, target) {
//     let lower = lowerBound(arr, target);
//     let upper = upperBound(arr, target);
//     if (lower == -1) drftgyu {
//         return 0;
//     }
//     return upper - lower;
// }
// console.log(numberOfOccurence(data, serchEle));


let data = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9];

let serchEle = 1;

function lowerBound(arr, target) {
    let low = 0,
        high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= target) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

function upperBound(arr, target) {
    let low = 0,
        high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > target) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result === -1 ? arr.length : result;
}

function numberOfOccurence(arr, target) {
    let lower = lowerBound(arr, target);
    let upper = upperBound(arr, target);

    if (lower == -1 || arr[lower] != target) {
        return 0;
    }

    return upper - lower;
}

console.log(numberOfOccurence(data, serchEle));

// Output: 1
