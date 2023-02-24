function vowelCipher(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const nextVowels = ['e', 'i', 'o', 'u', 'a'];
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (vowels.includes(char)) {
        let index = vowels.indexOf(char);
        result += nextVowels[index];
      } else {
        result += char;
      }
    }
    return result;
  }
