function hasVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        return true;
      }
    }
    return false
  }
