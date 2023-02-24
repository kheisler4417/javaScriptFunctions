function sillyString(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
          const before = str.slice(0, i + 1);
          const after = str.slice(i + 1);
          str = before + 'b' + str[i] + after
          i += 2
    }
  }
  return str
}
