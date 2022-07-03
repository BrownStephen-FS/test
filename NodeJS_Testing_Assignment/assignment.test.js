const { addition } = require("./assignment");
const { subtraction } = require("./assignment");
const { division } = require("./assignment");
const { multiplication } = require("./assignment");
const { squareRoot } = require("./assignment");
const { maxNum } = require("./assignment");

describe("Testing assignment.js", () => {
  test("Match content for addition results", () => {
    expect(addition(5)).toBe(10);
  });

  test("Match content for subtraction results", () => {
    expect(subtraction(5)).toBe(2);
  });

  test("Match content for divison results", () => {
    expect(division(8)).toBe(4);
  });

  test("Match content for multiplication results", () => {
    expect(multiplication(5)).toBe(10);
  });

  test("Match content for squareRoot results", () => {
    expect(squareRoot(144)).toBe(12);
  });

  test("Match content for squareRoot results", () => {
    expect(maxNum(22, 86, 34)).toBe(86);
  });
});