const addition = (int) => int + 5;
const subtraction = (int) => int - 3;
const division = (int) => int / 2;
const multiplication = (int) => int * 2;
const squareRoot = (int) => Math.sqrt(int);
const maxNum = (int1, int2, int3) => Math.max(int1, int2, int3);

module.exports = {
    addition,
    subtraction,
    division,
    multiplication,
    squareRoot,
    maxNum
};

