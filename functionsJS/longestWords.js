function longestWord(sentence) {
    // Split the sentence into separate words
    const words = sentence.split(' ');

    // Initialize variables to store the longest word and its length
    let longest = '';
    let longestLength = 0;

    // Iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
        // Remove any non-alphanumeric characters from the word
        const word = words[i].replace(/[^a-zA-Z0-9]/g, '');

        // If the length of the current word is greater than the current longest, update the variables
        if (word.length > longestLength) {
            longest = word;
            longestLength = word.length;
        }
    }

    // Return the longest word
    return longest;
}



// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''
