function spiralOrder(matrix) {
    const result = [];

    if (matrix.length === 0) {
        return result;
    }

    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // Traverse right
        for (let j = colBegin; j <= colEnd; j++) {
            result.push(matrix[rowBegin][j]);
        }
        rowBegin++;

        // Traverse down
        for (let j = rowBegin; j <= rowEnd; j++) {
            result.push(matrix[j][colEnd]);
        }
        colEnd--;

        // Traverse left
        if (rowBegin <= rowEnd) {
            for (let j = colEnd; j >= colBegin; j--) {
                result.push(matrix[rowEnd][j]);
            }
            rowEnd--;
        }

        // Traverse up
        if (colBegin <= colEnd) {
            for (let j = rowEnd; j >= rowBegin; j--) {
                result.push(matrix[j][colBegin]);
            }
            colBegin++;
        }
    }

    return result;
}



// matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]]

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]]


// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
