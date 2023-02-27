// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here
function repeatingTranslate(sentence) {
    const words = sentence.split(" ");
    const translatedWords = words.map((word) => translateWord(word));
    return translatedWords.join(" ");
}

function translateWord(word) {
    if (word.length < 3) {
        return word;
    }

    const lastChar = word[word.length - 1];
    const secondLastChar = word[word.length - 2];
    const lastVowelIndex = findLastVowelIndex(word);

    if (isVowel(lastChar)) {
        return word + word.toLowerCase();
    } else {
        const suffix = word.substring(lastVowelIndex);
        return word + suffix.toLowerCase();
    }
}

function findLastVowelIndex(word) {
    for (let i = word.length - 1; i >= 0; i--) {
        if (isVowel(word[i])) {
            return i;
        }
    }
    return -1;
}

function isVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}


// console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
