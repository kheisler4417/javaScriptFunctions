function caesarCipher(str, num) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) { // uppercase letter
        charCode = ((charCode - 65 + num) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) { // lowercase letter
        charCode = ((charCode - 97 + num) % 26) + 97;
      }

      result += String.fromCharCode(charCode);
    }

    return result;
  }
