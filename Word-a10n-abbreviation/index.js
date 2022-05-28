// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
// Example
// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"


// SAMPLE TEST 

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(abbreviate("internationalization"), "i18n");
//   Test.assertEquals(abbreviate("accessibility"), "a11y");
//   Test.assertEquals(abbreviate("Accessibility"), "A11y");
//   Test.assertEquals(abbreviate("elephant-ride"), "e6t-r2e");
//     });
//   });
  
//input: string of words 
//output: takes a string and turns any and all "words" (see below) within 
//        that string of length 4 or greater into an abbreviation
//

const abbreviate = string => string.replace(/[a-z]{4,}/gi,word => word[0] + (word.length-2) + word.slice(-1));
 // let matchReg = string.match(regex);
 // return /\-/.test(string) ? (matchReg.map(word=> word[0].concat(word.length-2).concat(word.slice(-1)))).join('-'):
//  string.replace(/[a-z]+/gi,string.slice(0,1).concat(string.length-2).concat(string.slice(-1)))
