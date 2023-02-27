function shortestWord(sentence) {
    // Split the sentence into separate words
    const words = sentence.split(' ');

    // Initialize variables to store the shortest word and its length
    let shortest = words[0];
    let shortestLength = shortest.length;

    // Iterate over each word in the array
    for (let i = 1; i < words.length; i++) {
        // Remove any non-alphanumeric characters from the word
        const word = words[i].replace(/[^a-zA-Z0-9]/g, '');

        // If the length of the current word is less than the current shortest, update the variables
        if (word.length < shortestLength) {
            shortest = word;
            shortestLength = word.length;
        }
    }

    // Return the shortest word
    return shortest;
}



// console.log(shortestWord('what a wonderful life'));     // 'a'
// console.log(shortestWord('the quick brown fox jumps')); // 'fox'
// console.log(shortestWord('do what you enjoy'));         // 'do'
