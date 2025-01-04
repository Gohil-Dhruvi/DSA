// 1. Initialize a 2D Array

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     let row = [];
//     for (let j = 0; j < 3; j++) {
//         row.push(0);
//     }
//     arr.push(row);
// }

// console.log(arr);

// Expected Output :
// [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]
  

// 2. Traverse a 2D Array 

// let data = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//         console.log(`Row: ${i}, Col: ${j}, Element: ${data[i][j]}`);
//     }
// }

// Expected Output :
// Row: 0, Col: 0, Element: 1
// Row: 0, Col: 1, Element: 2
// Row: 0, Col: 2, Element: 3
// Row: 1, Col: 0, Element: 4
// Row: 1, Col: 1, Element: 5
// Row: 1, Col: 2, Element: 6
// Row: 2, Col: 0, Element: 7
// Row: 2, Col: 1, Element: 8
// Row: 2, Col: 2, Element: 9


// 3. Row-wise Sum

// let matrix1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < matrix1.length; i++) {
//     let rowSum = 0;
//     for (let j = 0; j < matrix1[i].length; j++) {
//         rowSum += matrix1[i][j];
//     }
//     console.log(`Sum of row ${i}: ${rowSum}`);
// }

// Expected Output :
// Sum of row 0: 6
// Sum of row 1: 15
// Sum of row 2: 24


// 4. Column-wise Sum 

// let matrix2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let j = 0; j < matrix2[0].length; j++) {
//     let colSum = 0;
//     for (let i = 0; i < matrix2.length; i++) {
//         colSum += matrix2[i][j];
//     }
//     console.log(`Sum of column ${j}: ${colSum}`);
// }

// Expected Output :
// Sum of column 0: 12
// Sum of column 1: 15
// Sum of column 2: 18


//   5. Transpose of a Matrix 

// let matrix3 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let transpose = [];

// for (let j = 0; j < matrix3[0].length; j++) {
//     let newRow = [];
//     for (let i = 0; i < matrix3.length; i++) {
//         newRow.push(matrix3[i][j]);
//     }
//     transpose.push(newRow);  
// }

// console.log("Original Matrix:", matrix3);
// console.log("Transpose Matrix:", transpose);


// Expected Output :
// Original Matrix: [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
//   Transpose Matrix: [
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ]
  

//   6. Diagonal Sum 

// let matrix4 = [
//     [1, 4, 7],
//     [1, 5, 8],
//     [3, 6, 9]
// ];

// let primaryDiagonal = 0;
// let secondaryDiagonal = 0;

// for (let i = 0; i < matrix4.length; i++) {
//     primaryDiagonal += matrix4[i][i]; // Main diagonal
//     secondaryDiagonal += matrix4[i][matrix4.length - 1 - i]; // Anti-diagonal
// }

// console.log(`Primary Diagonal Sum: ${primaryDiagonal}`);
// console.log(`Secondary Diagonal Sum: ${secondaryDiagonal}`);

// Expected Output :
// Primary Diagonal Sum: 15
// Secondary Diagonal Sum: 15




  
