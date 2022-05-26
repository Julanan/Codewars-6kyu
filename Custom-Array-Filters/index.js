// https://www.codewars.com/kata/53fc954904a45eda6b00097f

// Dave has a lot of data he is required to apply filters to, which are simple enough, but he wants a shorter way of doing so.

// He wants the following functions to work as expected:

// even    // [1,2,3,4,5].even() should return [2,4]
// odd     // [1,2,3,4,5].odd() should return [1,3,5]
// under   // [1,2,3,4,5].under(4) should return [1,2,3]
// over    // [1,2,3,4,5].over(4) should return [5]
// inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
// They should also work when used together, for example:

// [1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
// And finally the filters should only accept integer values from an array, for example:

// ["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]
// Note: List with non-numbers will be tested as well.

// SAMPLE TEST 
// Dave has a lot of data he is required to apply filters to, which are simple enough, but he wants a shorter way of doing so.

// He wants the following functions to work as expected:

// even    // [1,2,3,4,5].even() should return [2,4]
// odd     // [1,2,3,4,5].odd() should return [1,3,5]
// under   // [1,2,3,4,5].under(4) should return [1,2,3]
// over    // [1,2,3,4,5].over(4) should return [5]
// inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
// They should also work when used together, for example:

// [1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
// And finally the filters should only accept integer values from an array, for example:

// ["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]
// Note: List with non-numbers will be tested as well.

//create different that apply filter to any condition we want
//the conditions would be even,od,under,over, and in range and only accept integers





Array.prototype.even = function(){
    return this.filter(num => { 
     if(typeof num === "number" && num % 1 === 0 && num % 2 === 0 ) { 
       return num 
       }
     })
  }
  
  Array.prototype.odd = function(){
    return this.filter(num => { 
     if(typeof num === "number" && num % 1 === 0 && num % 2 === 1) { 
       return num 
       }
     })
  }
  
  
  
  Array.prototype.under = function(x){
    return this.filter(num => {
      if(typeof num === "number" && num % 1 === 0 && num < x ) {
        return num
      }
    })
  }
  
  
  Array.prototype.over = function(x){
    return this.filter(num => {
      if(typeof num === "number" && num % 1 === 0 && num > x ) {
        return num
      }
    })
  }
  
  Array.prototype.inRange = function(min,max){
    return this.filter(num => {
      if(typeof num === "number" && num % 1 === 0 && num >= min && num <= max) {
        return num
      }
    })
  }