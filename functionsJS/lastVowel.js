function lastVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = str.length - 1; i >= 0; i--) {
        if (vowels.includes(str[i].toLowerCase())) {
            return str[i];
        }
    }
    return null;
}



// console.log(lastVowel('battery')); // 'e'
// console.log(lastVowel('TUNNEL')); // 'E'
// console.log(lastVowel('dog')); // 'o'
// console.log(lastVowel('conventional')); // 'a'
// console.log(lastVowel('rhythm')); // null
