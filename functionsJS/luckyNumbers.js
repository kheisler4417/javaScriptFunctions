function luckyNumbers(matrix) {
    // initialize an empty array to store the lucky numbers
    let lucky = [];
    // loop through the rows of the matrix
    for (let i = 0; i < matrix.length; i++) {
        // find the minimum element in the row
        let min = Math.min(...matrix[i]);
        // find the index of the minimum element in the row
        let minIndex = matrix[i].indexOf(min);
        // assume that the minimum element is also the maximum in its column
        let isMax = true;
        // loop through the other rows of the matrix
        for (let j = 0; j < matrix.length; j++) {
            // if there is a larger element in the same column, then it is not a lucky number
            if (matrix[j][minIndex] > min) {
                isMax = false;
                break;
            }
        }
        // if the minimum element is also the maximum in its column, then it is a lucky number and push it to the lucky array
        if (isMax) {
            lucky.push(min);
        }
    }
    // return the lucky array
    return lucky;
}


// matrix = [[5, 9, 21],
// [9, 19, 6],
// [12, 14, 15]]

// console.log(luckyNumbers(matrix)); // [12]

// matrix = [[ 5, 10,  8,  6],
//           [10,  2,  7,  9],
//           [21, 15, 19, 10]]

// console.log(luckyNumbers(matrix)); // [10]
