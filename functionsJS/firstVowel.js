function firstVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            return str[i];
        }
    }
    return null;
}



// console.log(firstVowel('battery')); // 'a'
// console.log(firstVowel('tunnel')); // 'u'
// console.log(firstVowel('dog')); // 'o'
// console.log(firstVowel('conventional')); // 'o'
// console.log(firstVowel('rhythm')); // null
