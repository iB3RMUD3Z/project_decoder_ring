const polybiusModule = (function () {
  const cipher = {
    11: "a",
    12: "f",
    13: "l",
    14: "q",
    15: "v",
    21: "b",
    22: "g",
    23: "m",
    24: "r",
    25: "w",
    31: "c",
    32: "h",
    33: "n",
    34: "s",
    35: "x",
    41: "d",
    42: "(i/j)",
    43: "o",
    44: "t",
    45: "y",
    51: "e",
    52: "k",
    53: "p",
    54: "u",
    55: "z",
  };

  function polybius(input, encode = true) {
    //Decoding Message
    if (!encode) {
      input = input.split(" ");
      if (input.join("").length % 2 !== 0) {
        return false;
      }
      const numArray = [];
      for (let i = 0; i < input.length; i++) {
        const number = input[i];
        for (let j = 0; j < number.length; j += 2) {
          numArray.push(number.substring(j, j + 2));
        }
        numArray.push(" ");
      }
      numArray.pop();
      const decodeMsg = [];
      for (let pair of numArray) {
        //It maintains spaces in the message, before and after encoding or decoding.
        if (pair === " ") {
          decodeMsg.push(pair);
        } else {
          const ltr = cipher[pair];
          decodeMsg.push(ltr);
        }
      }
      return decodeMsg.join("");

      //Encoding Message
    } else {
      //It ignores capital letters. (For example, the results of A Message and a message should be the same.)
      input = input.toLowerCase().split("");
      const encodeMsg = [];
      for (let ltr of input) {
        //When encoding, it translates the letters i and j to 42.
        if (ltr === "i" || ltr === "j") {
          encodeMsg.push(42);
        } else {
          let num = Object.keys(cipher).find((key) => cipher[key] === ltr);
          //It maintains spaces in the message, before and after encoding or decoding.
          if (!num) {
            num = " ";
          }
          encodeMsg.push(num);
        }
      }
      return encodeMsg.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
