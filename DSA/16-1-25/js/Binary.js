let data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
let serachElement = 130;

function binarySerach(arr, serachEle) {
    let low = 0;
    let high = arr.lenght - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] == serachEle) {
            return mid;
        } else if (arr[mid] < serachEle) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

let result = binarySerach(data, serachElement);
if (result != -1) {
    console.log('Element is Found at', result);
} else {
    console.log('Element is not Found ');
}