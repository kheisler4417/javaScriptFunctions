function reverseSentence(sentence) {
    // Split the sentence into separate words
    const words = sentence.split(' ');

    // Reverse the order of the words in the array
    const reversed = words.reverse();

    // Join the reversed words into a single string with spaces
    const reversedSentence = reversed.join(' ');

    // Return the reversed sentence
    return reversedSentence;
}





// console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
// console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
