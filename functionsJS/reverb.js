function reverb(word) {
    if (typeof word !== "string") {
        return null;
    }

    const vowels = ["a", "e", "i", "o", "u"];
    let lastVowelIndex = -1;

    // Find index of last vowel
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i].toLowerCase())) {
            lastVowelIndex = i;
            break;
        }
    }

    // If no vowels found, return original word
    if (lastVowelIndex === -1) {
        return word;
    }

    const lettersToRepeat = word.slice(lastVowelIndex);
    return word + lettersToRepeat;
}



// console.log(reverb('running')); // runninging
// console.log(reverb('FAMILY'));  // FAMILYILY
// console.log(reverb('trash'));   // trashash
// console.log(reverb('DISH'));    // DISHISH
// console.log(reverb(197393));    // null
