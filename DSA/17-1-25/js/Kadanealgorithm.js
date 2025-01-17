// Maximum Sum sub Array :-

let inputArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const getMaxSumSubArray = (array) => {
    let maxSum = array[0];
    let subArrayStart = 0, subArrayEnd = 0;
    for (let i = 0; i < array.length; i++) {
        let currentSum = 0;
        for (let j = i; j < array.length; j++) {
            currentSum += array[j];
            if (currentSum > maxSum) {
                maxSum = currentSum;
                subArrayStart = i;
                subArrayEnd = j;
            }
        }
    }
    return {
        maxSum: maxSum,
        subArray: array.slice(subArrayStart, subArrayEnd + 1)
    };
};

console.log(getMaxSumSubArray(inputArray));

// Expected Output: { maxSum: 6, subArray: [ 4, -1, 2, 1 ] }

// Maximum Sum sub Array in Kadabe Algorithm :-

let data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const findMaxSumSubArray = (arr) => {
    let maxSum = arr[0];
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
};

console.log("Maximum sum is:", findMaxSumSubArray(data));

// Expected Output: Maximum sum is: 6
