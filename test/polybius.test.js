const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybiusModule.polybius", () => {
  it("when decoding, the number of characters in the string excluding spaces should be even. Otherwise, return `false`.", () => {
    const actual = polybiusModule.polybius("11 21314", false);
    const expected = false;    
    expect(actual).to.equal(expected);
  });

  it("when encoding, your output should still be a string", () => {
    const actual = polybiusModule.polybius("abc", true);
    const expected = "112131";    
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = polybiusModule.polybius("ABC", true);
    const expected = "112131";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces throughout", () => {
    const actual = polybiusModule.polybius("a b c", true);
    const expected = "11 21 31";
    expect(actual).to.equal(expected);
  });

  it("When decoding, the letters 'i' and 'j' should somehow be shown.", () => {
    const actual = polybiusModule.polybius("42", false);
    const expected = "(i/j)";
    expect(actual).to.equal(expected);
  });
});
