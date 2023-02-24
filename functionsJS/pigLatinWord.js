function pigLatinWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        index = i;
        break;
      }
    }
    if (index === 0) {
      return word + 'yay';
    } else {
      const consonants = word.slice(0, index);
      const restOfWord = word.slice(index);
      return restOfWord + consonants + 'ay';
    }
  }
