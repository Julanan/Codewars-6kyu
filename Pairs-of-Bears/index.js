// https://www.codewars.com/kata/57d165ad95497ea150000020/train/javascript

// In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

// Task:
// You must check within a string (s) to find all of the mating pairs, returning a list/array of the string containing valid mating pairs and a boolean indicating whether the total number of bears is greater than or equal to x.

// Rules for a 'valid' mating pair:
// Bears are either 'B' (male) or '8' (female),
// Bears must be together in male/female pairs 'B8' or '8B',
// Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).
// Return an array containing a string of the valid mating pairs available (empty string if there are no pairs), and a boolean indicating whether the total number of bears is greater than or equal to x. , e.g:

// (6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false]; in this example, the number of bears(=4) is lesser than the given value of x(=6)

// SAMPLE TEST 
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Pairs of Bears", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(bears(7, '8j8mBliB8gimjB8B8jlB'), ["B8B8B8",false]);
//     assert.deepEqual(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ["8BB8B8B88B",true]); 
//     assert.deepEqual(bears(8, '8'), ["",false]); 
//   })
// });

function bears(x, s){
    // we are given a integer and a string
    // we need to reutrn an array of string and a bolean value
    // we need to find a number of capital B's (male) or 8's female) 
    // they must be in pairs of male and female
    // B8B doesnt count as pairs
    var pairs = s.match(/8B|B8/g) || [];
    console.log(pairs)
    return [pairs.join(''), pairs.length >= x]
    
  }
  