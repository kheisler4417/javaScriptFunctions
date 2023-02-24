function fibonacci(length) {
    // Initialize the first two elements of the sequence
    let fibSeq = [1, 1];
    if (length === 0) {
        return []
    } else if(length === 1) {
        return [1]
    } else {
        // Generate the rest of the sequence
        for (let i = 2; i < length; i++) {
            // Calculate the next element by summing the previous two elements
            let nextElement = fibSeq[i-1] + fibSeq[i-2];
            fibSeq.push(nextElement);
        }
    return fibSeq;
    }
}
