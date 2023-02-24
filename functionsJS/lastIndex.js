function lastIndex(str, char) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === char) {
        return i;
      }
    }

    return -1;
  }
