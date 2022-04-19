const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    //The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    //All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
    for (ltr of alphabet){ 
      if(alphabet.indexOf(ltr) != alphabet.lastIndexOf(ltr)) {
        return false;
      } 
  }

  //Spaces should be maintained throughout.
  const theAlphabet = "abcdefghijklmnopqrstuvwxyz ";
  //Capital letters can be ignored.
  input = input.toLowerCase();
  const userAlphabet = [...alphabet," "];
  let cipherOutput = [];

  if (encode === true){
    for (let i = 0; i < input.length; i++){
      cipherOutput.push(userAlphabet[theAlphabet.indexOf(input[i])]);
    }
  } else {
    for (let i = 0; i < input.length; i++){
      cipherOutput.push(theAlphabet[userAlphabet.indexOf(input[i])]);
    }
  }
  return cipherOutput.join("");
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
