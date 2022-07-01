//https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript

//Given the following input array:

//var list1 = [
//  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
//];
//write a function that adds the username property to each object in the input array:

//[
//  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
//    username: 'emilyn1990' },
//  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
//    username: 'nore2000' }
//]
//The value of the username property is composed by concatenating:

//firstName in lower-case;
//first letter of the lastName in lower-case; and
//the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
//Notes:

//The input array will always be valid and formatted as in the example above.
//Age is represented by a number which can be any positive integer.
//Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
//Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

//SAMPLE TEST 

// ======================================================

// Please run the full test suite to check your solution

// ======================================================


//describe("Please run the test suite to check your solution", function(){
//    it("does not test your function", function(){
//      Test.assertEquals("not a test", "not a test", "This does not test you function");
//    });
//  });

//input: arr of obj
//map through the list and target every user, firstName nad lastNAme and age
//output: str of firstName in lowerCase, first letter of lastName in lowerCase and birth year

function addUsername(list) {
    let year = new Date().getFullYear();
    let users = list.map(user => {
    let first = user.firstName.toLowerCase();
    let last = user.lastName[0].toLowerCase();
    let birthYear = year - user.age;
    user.username = first + last + birthYear 
    })
    return list
    }