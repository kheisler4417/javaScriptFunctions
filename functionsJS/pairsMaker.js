function pairsMaker(arr) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]]);
        }
    }
    return pairs;
}





// console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// // [ [ 'a', 'b' ],
// //   [ 'a', 'c' ],
// //   [ 'a', 'd' ],
// //   [ 'b', 'c' ],
// //   [ 'b', 'd' ],
// //   [ 'c', 'd' ] ]

// console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// // [ [ 'Rosemary', 'Alex' ],
// //   [ 'Rosemary', 'Connor' ],
// //   [ 'Alex', 'Connor' ] ]
