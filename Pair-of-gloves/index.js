// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

// SAMPLE TEST 
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Fixed Tests", () => {
//   it("Should work for Example tests", function(){
//         let tests = [
//           [['red','red'],1],
//           [['red','green','blue'],0],
//           [['gray','black','purple','purple','gray','black'],3]
//         ];

//         tests.forEach(a=>{
//            assert.strictEqual(numberOfPairs(a[0]),a[1], `Testing for ${a[0]}`);
//         });
//   });
// })

//input: arr of color of each glove
//output: num
//iterate through the arr to find matching color
//define count variable 
//if else statement to return matching pair

function numberOfPairs(gloves)
{
  let pairs = {};
  for(let i=0; i<gloves.length; i++){
    if(pairs[gloves[i]] == undefined){
      pairs[gloves[i]] = 1
    } else {
      pairs[gloves[i]]++
    }
  }
  let counter = 0;
  let pairsArr = Object.values(pairs)

  for(let j=0; j<pairsArr.length; j++){ 
    counter+= Math.floor(pairsArr[j]/2)
  }
  return counter
 //console.log(Object.values(pairs))
}