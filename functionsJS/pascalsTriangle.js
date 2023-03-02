// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1



function pascalsTriangle(n) {
    let triangle = [];
    for (let i = 0; i < n; i++) {
        triangle[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + (triangle[i - 1][j] || 0);
            }
        }
    }
    return triangle;
}




// console.log(pascalsTriangle(5));
// // [
// //     [1],
// //     [1, 1],
// //     [1, 2, 1],
// //     [1, 3, 3, 1],
// //     [1, 4, 6, 4, 1]
// // ]

// console.log(pascalsTriangle(7));
// // [
// //     [1],
// //     [1, 1],
// //     [1, 2, 1],
// //     [1, 3, 3, 1],
// //     [1, 4, 6, 4, 1],
// //     [1, 5, 10, 10, 5, 1],
// //     [1, 6, 15, 20, 15, 6, 1]
// // ]
