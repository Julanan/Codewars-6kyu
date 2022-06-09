// https://www.codewars.com/kata/5a1cae0832b8b99e2900000c/train/javascript

// In a game of chess, a queen is the most powerful piece on the board. She can move an unlimited number of squares in a straight line in any of 8 directions (forwards, backwards, left, right, and each of the four diagonals in between).

// The diagram below shows the queen's influence from her current position - she would be able to take any piece on a square marked with an 'X'.




// An opponent's king who can be taken by the queen is said to be in 'check', and would then need to find some way to escape this situation.

// In any normal game of chess, the queen would work with her army on an 8x8 board to threaten the king in this way, and ultimately try to win the game. However, for this kata, the queen will work by herself on a 5x5 board.

// The 5x5 chessboard will be represented as a 2 dimensional array, (ie: an array containing 5 other arrays, each containing 5 single character elements). Empty spaces within each sub-array will be represented by an asterix: "*", while one of these 25 elements will be represented by a "q" (queen) and a "k" (king). Both will be represented in lower case.

// The 2 dimensional chessboard array would look something like this:

// var board = [ [ '*', '*', '*', '*', '*' ],
//               [ '*', '*', '*', '*', 'k' ],
//               [ '*', '*', '*', '*', '*' ],
//               [ '*', 'q', '*', '*', '*' ],
//               [ '*', '*', '*', '*', '*' ] ];
// Your task is to write a function which will return true if the king is in check, and false if he isn't.

// SAMPLE TEST 
// describe("Tests", () => {
//     it("test", () => {
//   // Scroll down for tests
//   var assert = require("chai").assert;
  
//   var board1 = [ [ '*', 'q', '*', '*', 'k' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ] ];
//   var board2 = [ [ '*', '*', '*', '*', '*' ], [ '*', 'k', '*', 'q', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ] ];
//   var board3 = [ [ 'k', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ 'q', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ] ];
//   var board4 = [ [ '*', '*', '*', '*', 'q' ], [ '*', '*', '*', '*', 'k' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ] ];
//   var board5 = [ [ '*', 'k', '*', '*', '*' ], [ '*', '*', 'q', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ] ];
//   var board6 = [ [ '*', '*', 'k', '*', '*' ], [ '*', 'q', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ] ];
//   var board7 = [ [ '*', '*', '*', 'q', '*' ], [ '*', '*', 'k', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ] ];
//   var board8 = [ [ '*', '*', 'q', '*', 'k' ], [ '*', '*', '*', 'k', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ] ];
//   var board9 = [ [ '*', '*', 'q', '*', '*' ], [ 'k', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ] ];
  
//   assert.equal(typeof check(board1), "boolean", "boolean expected");
//   assert.equal(check(board1), true, "check to the right should return true");
//   assert.equal(check(board2), true, "check to the left should return true");
//   assert.equal(check(board3), true, "check to the top should return true");
//   assert.equal(check(board4), true, "check to the bottom should return true");
//   assert.equal(check(board5), true, "check to the top left should return true");
//   assert.equal(check(board6), true, "check to the top right should return true");
//   assert.equal(check(board7), true, "check to the bottom left should return true");
//   assert.equal(check(board8), true, "check to the bottom right should return true");
//   assert.equal(check(board9), false, "Expect 'false' when king not in check");
//     });
//   });
  
//input: nest arr of single character elements
//output: return boolean true if the king is in check, and false if he isn't.


function check(board) {
    let queenRow;
    let queenCol;
    let kingCol;
    let kingRow;
    
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == 'k') {
        kingRow = i
        kingCol = j 
      } else if (board[i][j] == 'q') {
        queenRow = i
        queenCol = j }
  }} 
      if (kingRow == queenRow || kingCol == queenCol) {
      return true
  } else if (Math.abs(kingRow - queenRow) == Math.abs(queenCol - kingCol)) {
   return true 
  } else 
    return false
  }
