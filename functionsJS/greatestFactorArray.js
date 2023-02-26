function greatestFactorArray(numbers) {

    // Map the input array to a new array where even numbers are replaced by their greatest factor
    const result = numbers.map((num) => {
        if (num % 2 === 0) {
            return num / 2;
        } else {
            return num;
        }
    });

    return result;
}


// console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
// console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
