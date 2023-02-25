function abbreviate(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      const before = str.slice(0, i);
      const after = str.slice(i + 1);
      str = before + after;
      i = -1
    }
  }
  return str
}
