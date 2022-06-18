//https://www.codewars.com/kata/52998bf8caa22d98b800003a/train/javascript

//The distance formula can be used to find the distance between two points. What if we were trying to walk from point A to point B, but there were buildings in the way? We would need some other formula..but which?

//Manhattan Distance
//Manhattan distance is the distance between two points in a grid (like the grid-like street geography of the New York borough of Manhattan) calculated by only taking a vertical and/or horizontal path.

//Complete the function that accepts two points and returns the Manhattan Distance between the two points.

//The points are arrays or tuples containing the x and y coordinate in the grid. You can think of x as the row in the grid, and y as the column.

//Examples
//* Input [1, 1], [1, 1] => Output 0
//* Input [5, 4], [3, 2] => Output 4
//* Input [1, 1], [0, 3] => Output 3

//SAMPLE TEST 
//describe("Tests", () => {
  //  it("test", () => {
  //Test.assertEquals(manhattanDistance([1,1],[1,1]), 0);
  //Test.assertEquals(manhattanDistance([5,4],[3,2]), 4);
 // Test.assertEquals(manhattanDistance([1,1],[0,3]), 3);
 //   });
 // });
  
 //input: arr of numbers
//create a variable to hold the max dimensions between the two points
//iterate through the max dimensions variable
//use the Math.abs to find the absolute value of a number
//output: return the number between two points 

function manhattanDistance(pointA, pointB){
    let result = 0;
    let dimensions = Math.max(pointA.length, pointB.length)
    for (let i = 0; i < dimensions; i++) {
      result += Math.abs((pointA[i]) - (pointB[i]))
    }
    return result
    }