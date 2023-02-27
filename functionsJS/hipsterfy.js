function hipsterfy(sentence) {
    const vowels = 'aeiouAEIOU';

    // Split the sentence into an array of words
    const words = sentence.split(' ');

    // Modify each word in the array
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let lastVowelIndex = -1;

        // Find the index of the last vowel in the word
        for (let j = word.length - 1; j >= 0; j--) {
            if (vowels.includes(word[j])) {
                lastVowelIndex = j;
                break;
            }
        }

        // If a vowel was found, remove it and update the word in the array
        if (lastVowelIndex !== -1) {
            word = word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1);
            words[i] = word;
        }
    }

    // Join the modified words into a new sentence
    const hipsterfiedSentence = words.join(' ');

    return hipsterfiedSentence;
}




// console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
