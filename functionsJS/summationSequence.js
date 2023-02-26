function summationSequence(start, length) {
    const result = [start]; // Initialize the result array with the starting number

    for (let i = 1; i < length; i++) {
        // To generate the next element, take the summation of the previous element
        const previous = result[result.length - 1];
        let next = 0;
        for (let j = 1; j <= previous; j++) {
            next += j;
        }
        result.push(next);
    }

    return result;
}


// console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
// console.log(summationSequence(5, 3)); // [5, 15, 120]
