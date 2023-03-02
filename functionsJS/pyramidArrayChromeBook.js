// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
// Your code here
function pyramidArray(base) {
    const pyramid = [];

    // Add the base as the first row of the pyramid
    pyramid.push(base);

    // Build the pyramid by adding rows one at a time
    for (let i = base.length - 2; i >= 0; i--) {
        const row = [];

        // Calculate each element of the row as the sum of the two elements below and to the left and right
        for (let j = 0; j <= i; j++) {
            const left = pyramid[pyramid.length - 1][j];
            const right = pyramid[pyramid.length - 1][j + 1];
            row.push(left + right);
        }

        // Add the completed row to the pyramid
        pyramid.push(row);
    }

    // Reverse the pyramid so that the first row is at the top
    return pyramid.reverse();
    /* By adding .join('\n') after .reverse() -- this will join the array elements into a string with the "seperator" being a new line */
}



// let p1 = pyramidArray([2, 3, 7, 5, 9]);
// console.log(p1);
// // [
// //   [ 85 ],
// //   [ 37, 48 ],
// //   [ 15, 22, 26 ],
// //   [ 5, 10, 12, 14 ],
// //   [ 2, 3, 7, 5, 9 ]
// // ]

// let p2 = pyramidArray([2, 2, 2, 2]);
// console.log(p2);
// // [
// //   [ 16 ],
// //   [ 8, 8 ],
// //   [ 4, 4, 4 ],
// //   [ 2, 2, 2, 2 ]
// // ]
