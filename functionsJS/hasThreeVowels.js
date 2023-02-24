function hasThreeVowels(str) {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelCount++;
        if (vowelCount >= 3) {
          return true;
        }
      }
    }

    return false;
  }
