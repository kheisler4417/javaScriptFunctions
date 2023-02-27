function abbreviateWords(sentence) {
    // Split the sentence into separate words
    const words = sentence.split(' ');

    // Iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        // If the word is longer than 4 characters, remove its vowels
        if (word.length > 4) {
            const abbreviated = removeVowels(word);
            words[i] = abbreviated;
        }
    }

    // Join the modified words into a new sentence
    const abbreviatedSentence = words.join(' ');

    // Return the abbreviated sentence
    return abbreviatedSentence;
}

function removeVowels(word) {
    // Replace all vowels in the word with an empty string
    const removed = word.replace(/[aeiou]/gi, '');
    return removed;
}




// console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
// console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
