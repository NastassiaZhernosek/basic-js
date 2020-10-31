const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {
      let encryptedString = [];
      let keyLettersCount = 0;

      if (!str || !key ) throw Error;

      if (this.direct === false) key = key.split('').reverse().join('');

      for (i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90
            || str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
          let charIndex = str[i].toUpperCase().charCodeAt(0) + key[keyLettersCount % key.length].toUpperCase().charCodeAt(0) - 65;
          if (charIndex > 90) charIndex = charIndex - 91 + 65;
          encryptedString.push(String.fromCharCode(charIndex));
          keyLettersCount++;
        }
        else {
          encryptedString.push(str[i]);
        }
      }

      return encryptedString.join('');
  }

  decrypt(encryptedString, key) {
      let str = [];
      let keyLettersCount = 0;

      if (this.direct === false) {
        encryptedString = encryptedString.split('').reverse().join('');
        key = key.split('').reverse().join('');
      }

      if (!encryptedString || !key) throw Error;


      for (i = 0; i < encryptedString.length; i++) {
        if (encryptedString[i].charCodeAt(0) >= 65 && encryptedString[i].charCodeAt(0) <= 90
            || encryptedString[i].charCodeAt(0) >= 97 && encryptedString[i].charCodeAt(0) <= 122) {
          let charIndex = 65 + encryptedString[i].toUpperCase().charCodeAt(0) - key[keyLettersCount % key.length].toUpperCase().charCodeAt(0);
          if (charIndex < 65) charIndex = 91 - (65 - charIndex);
          str.push(String.fromCharCode(charIndex));
          keyLettersCount++;
        }
        else {
          str.push(encryptedString[i]);
        }
      }

      if (this.direct === false) str = str.reverse();

      return str.join('');
  }
}

module.exports = VigenereCipheringMachine;
