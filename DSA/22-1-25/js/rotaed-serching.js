let data = [-3, -2, -1, 0, 1, 2, 3];

let serchEle = 0;

function roatedArray(arr, target) {
    let low = 0,
        high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[low] < arr[mid]) {
            if (target >= arr[low] && target < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        else {
            if (target > arr[mid] && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}
console.log(roatedArray(data, serchEle));

// Expected Output :- 3
