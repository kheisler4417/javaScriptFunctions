function commonFactors(num1, num2) {
    // Find the smaller number
    const smallerNum = Math.min(num1, num2);
    const factors = [];

    // Loop through numbers from 1 to the smaller number
    for (let i = 1; i <= smallerNum; i++) {
        // Check if both numbers are divisible by i
        if (num1 % i === 0 && num2 % i === 0) {
            // If yes, i is a common factor, add it to the array
            factors.push(i);
        }
    }

    return factors;
}


// console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
// console.log(commonFactors(8, 4));              // [1, 2, 4]
// console.log(commonFactors(4, 8));              // [1, 2, 4]
// console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
// console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
// console.log(commonFactors(7, 9));              // [1]
