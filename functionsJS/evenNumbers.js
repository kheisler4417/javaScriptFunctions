const evenNumbers = function (max) {
    const result = [];
    for (let i = 2; i < max; i += 2) {
        result.push(i);
    }
    return result;
}



// console.log(evenNumbers(7)); // [ 2, 4, 6 ]
// console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
// console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
