function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '.') {
        dotCount++;
      } else if (str[i] === '-') {
        dashCount++;
      }
    }

    return dotCount > dashCount;
  }
