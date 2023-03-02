// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

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


// console.log(pigLatinWord("apple")); //=> "appleyay"
// console.log(pigLatinWord("eat")); //=> "eatyay"
// console.log(pigLatinWord("banana")); //=> "ananabay"
// console.log(pigLatinWord("trash")); //=> "ashtray"
