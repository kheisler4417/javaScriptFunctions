function fibonacciSequence(length) {
    if (length === 0) {
        return []
    } else if (length === 1) {
        return [1]
    } else {

        const result = [1, 1];

        for (let i = 2; i < length; i++) {
            const prevNum1 = result[i - 1];
            const prevNum2 = result[i - 2];
            const sum = prevNum1 + prevNum2;
            result.push(sum);
        }

        return result;
    }
}



// console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
// console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
// console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
// console.log(fibonacciSequence(0));  // [ ]
// console.log(fibonacciSequence(1));  // [ 1 ]
// console.log(fibonacciSequence(2));  // [ 1, 1 ]
