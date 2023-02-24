function eCounter(word) {
    let count = 0;
    let index = 0;

    while (index < word.length) {
        let char = word[index];
        if (char === "e" || char === "E") {
        count += 1;
    }
    index++;
    }

    return count;
}
