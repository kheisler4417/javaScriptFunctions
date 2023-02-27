function maxInMatrix(matrix) {
    let max = matrix[0][0];
    for (let row of matrix) {
        for (let num of row) {
            if (num > max) {
                max = num;
            }
        }
    }
    return max;
}



// matrix = [[11, 2, -99],
// [20, 19, 10],
// [47, 72, 56]]

// console.log(maxInMatrix(matrix)); // 72
