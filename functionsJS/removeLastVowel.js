function removeLastVowel(word) {
    let vowels = "aeiouAEIOU";
    let lastVowelIndex = -1;

    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            lastVowelIndex = i;
            break;
        }
    }

    if (lastVowelIndex === -1) {
        return word;
    } else {
        return word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1);
    }
}




// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'
