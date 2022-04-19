const expect = require("chai").expect;
const substitutionModule = require("../src/substitution.js");

describe("substitutionModule.substitution", () => {
  it("Spaces should be maintained throughout.", () => {
    const actual = substitutionModule.substitution("hi hello", "xoyqmcgrukswaflnthdjpzibev", encode = true);
    const expected = "ru rmwwl";
    expect(actual).to.equal(expected);
  });
  
  it("Capital letters can be ignored.", () => {
    const actual = substitutionModule.substitution("HeLlO", "xoyqmcgrukswaflnthdjpzibev", encode = true);
    const expected = "rmwwl";
    expect(actual).to.equal(expected);
  });
  
  it("The `alphabet` parameter must be a string of exactly 26 characters. Otherwise, it should return `false`.", () => {
    const actual = substitutionModule.substitution("hello","xoyqmcgrukswaflthdjpz", encode = true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it("All the characters in the `alphabet` parameter must be unique. Otherwise, return `false", () => {
    const actual = substitutionModule.substitution("hello", "xoqmcgrukswaflnthdjpzzibev", encode = true);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if the substitution alphabet is missing", () => {
    const actual = substitutionModule.substitution("hello", "", encode = true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
});