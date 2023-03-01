function matrixAddition(matrix1, matrix2) {
    // initialize an empty array to store the result
    let result = [];
    // loop through the rows of the matrices
    for (let i = 0; i < matrix1.length; i++) {
        // initialize an empty array to store the sum of each row
        let row = [];
        // loop through the columns of the matrices
        for (let j = 0; j < matrix1[0].length; j++) {
            // add the corresponding elements of the matrices and push to the row array
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        // push the row array to the result array
        result.push(row);
    }
    // return the result array
    return result;
}


// let matrixA = [[2, 5], [4, 7]]
// let matrixB = [[9, 1], [3, 0]]
// let matrixC = [[-1, 0], [0, -1]]
// let matrixD = [[2, -5], [7, 10], [0, 1]]
// let matrixE = [[0, 0], [12, 4], [6, 3]]

// console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
// console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
// console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
// console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
