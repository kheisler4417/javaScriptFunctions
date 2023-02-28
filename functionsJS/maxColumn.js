function maxColumn(matrix) {
    // Initialize the result array with zeros
    const result = new Array(matrix[0].length).fill(0);

    // Iterate over each column of the matrix
    for (let col = 0; col < matrix[0].length; col++) {
        // Iterate over each row of the column
        for (let row = 0; row < matrix.length; row++) {
            // Update the maximum value if the current value is greater
            result[col] = Math.max(result[col], matrix[row][col]);
        }
    }

    return result;
}



// matrix = [[5, 9, 21],
// [9, 19, 6],
// [12, 14, 15]]

// console.log(maxColumn(matrix)); // [12, 19, 21]
