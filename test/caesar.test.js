const expect = require("chai").expect;
const caesarModule = require("../src/caesar.js");

describe("caesarModule.caesar", () => {
  it("should return false if the shift value is equal to 0, less than -25 or greater than 25", () => {
    const zero = caesarModule.caesar("zero", 0, true);
    const less = caesarModule.caesar("less", -26, true);
    const greater = caesarModule.caesar("greater", 26, true);
    const empty = caesarModule.caesar("", 26, true);
    const expected = false;
    expect(zero).to.equal(expected);
    expect(less).to.equal(expected);
    expect(greater).to.equal(expected);
    expect(empty).to.equal(expected);
  });

  it("should wrap around to the front of the alphabet if a letter is shifted so that it goes off the alphabet", () => {
    const actual = caesarModule.caesar("z", 1, true);
    const expected = "a";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = caesarModule.caesar("ABC", 1, true);
    const expected = "bcd";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and non alpha characters", () => {
    const actual = caesarModule.caesar("a b/c", 1, true);
    const expected = "b c/d";
    expect(actual).to.equal(expected);
  });
});
