function consonantCancel(sentence) {
    const words = sentence.split(" ");
    const newWords = words.map((word) => {
        const firstVowelIndex = findFirstVowelIndex(word);
        if (firstVowelIndex === -1) {
            return word;
        }
        return word.substring(firstVowelIndex);
    });
    return newWords.join(" ");
}

function findFirstVowelIndex(word) {
    for (let i = 0; i < word.length; i++) {
        if (isVowel(word[i])) {
            return i;
        }
    }
    return -1;
}

function isVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}


// console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
// console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
