const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }

    if (!encode) {
      shift *= -1;
    }

    //It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    input = input.toLowerCase();

    const theAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let cipherOutput = "";

    for (let ltr of input) {
      //It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
      if (!theAlphabet.includes(ltr)) {
        cipherOutput += ltr;
      } else {
        let ltrIndex = theAlphabet.indexOf(ltr);
        let ltrShift = ltrIndex + shift;

        //When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
        ltrShift =
          ltrShift > 25
            ? (ltrShift -= 26)
            : ltrShift < 0
            ? (ltrShift += 26)
            : ltrShift;
        cipherOutput += theAlphabet[ltrShift];
      }
    }
    return cipherOutput;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
