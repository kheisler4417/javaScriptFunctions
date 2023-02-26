function tripleSequence(start, length) {
    if (length === 0) {
        return [];
    }

    let result = [start];
    for (let i = 1; i < length; i++) {
        result.push(result[i - 1] * 3);
    }
    return result;
}

// console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
// console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
