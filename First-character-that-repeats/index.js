// https://www.codewars.com/kata/54f9f4d7c41722304e000bbb/train/javascript

// Find the first character that repeats in a String and return that character.

// firstDup('tweet') => 't'
// firstDup('like') => undefined
// This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

// Another example:

// In 'translator' you should return 't', not 'a'.

// v      v  
// translator
//   ^   ^
// While second 'a' appears before second 't', the first 't' is before the first 'a'.

// SAMPLE TEST 
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(firstDup('tweet'), 't');
//   Test.assertEquals(firstDup('Ode to Joy'), ' ');
//   Test.assertEquals(firstDup('ode to joy'), 'o');
//   Test.assertEquals(firstDup('bar'), undefined);
//   Test.assertEquals(firstDup('123123'), '1');
//   Test.assertEquals(firstDup('!@#$!@#$'), '!');
//     });
//   });
  

//input: giving str
//output: return the first duplicated character


function firstDup (s) {
  
    let count = [];
    for (let i=0; i<s.length; i++) {
      if(s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
        count.push(s[i]);
        
      }
    }
    return (count[0])
  }