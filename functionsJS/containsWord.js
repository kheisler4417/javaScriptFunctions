function containsWord(sentence, targetWord) {
    // Split the sentence into separate words
    const words = sentence.toLowerCase().split(' ');

    // Iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
        // Remove any non-alphanumeric characters from the word
        const word = words[i].replace(/[^a-zA-Z0-9]/g, '');

        // If the current word matches the target word, return true
        if (word === targetWord.toLowerCase()) {
            return true;
        }
    }

    // If the target word was not found, return false
    return false;
}




// console.log(containsWord('sounds like a plan', 'like')); // true
// console.log(containsWord('They are great', 'they')); // true
// console.log(containsWord('caterpillars are great animals', 'cat')); // false
// console.log(containsWord('Cast the net', 'internet')); // false
