function doubleSequence(base, length) {
    let result = [];

    for (let i = 0; i < length; i++) {
        result.push(base * Math.pow(2, i));
    }

    return result;
}



// console.log(doubleSequence(7, 3));  // [7, 14, 28]
// console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
// console.log(doubleSequence(5, 3));  // [5, 10, 20]
// console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
// console.log(doubleSequence(5, 0));  // [ ]
