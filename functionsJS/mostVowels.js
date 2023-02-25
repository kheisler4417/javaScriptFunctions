function mostVowels(sentence) {
    const words = sentence.split(' ');
    let maxVowels = 0;
    let maxVowelWord = '';

    words.forEach((word) => {
        const vowels = word.match(/[aeiou]/gi);
        if (vowels && vowels.length > maxVowels) {
            maxVowels = vowels.length;
            maxVowelWord = word;
        }
    });

    return maxVowelWord;
}
