const fizzBuzz = function (max) {
    const result = [];
    for (let i = 1; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
            result.push(i);
        }
    }
    return result;
};



// console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
// console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
