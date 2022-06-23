// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// SAMPLE TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("should pass some sample tests", () => {
//     assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
//     assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
//     assert.deepEqual(sortArray([]),[]);
//   });
// });

// input : array of numbers

// objective : sort the odd numbers in ascending order only, skipping the even numbers

function sortArray(array) {
  const oddArray = array
    .map((number) => (number !== 0 && number % 2 !== 0 ? number : undefined))
    .filter((truthyValues) => truthyValues)
    .sort((a, b) => a - b);
  let index = 0;
  return array.map((number) =>
    number === 0 || number % 2 === 0 ? number : oddArray[index++]
  );
}
