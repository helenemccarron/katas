//Given an integral number, determine if it's a square number

//Tests
//
// Test.describe("isSquare", function(){
//   Test.it("should work for some examples", function(){
//     Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
//     Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
//     Test.assertEquals(isSquare( 3), false, "3 is not a square number");
//     Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
//     Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
//     Test.assertEquals(isSquare(26), false, "26 is not a square number");
//   });
// });

//brute force, probably won't survive all test cases
var isSquare = function (n) {
  let square = Math.sqrt(n);
  console.log(square);
  if (Math.sign(n) === -1) {
    return false;
  }

  if (Math.floor() === 0 || square === 2 || square === 0 || square === 5) {
    console.log("Is Square");
  } else {
    console.log("Is Not Square");
    return false;
  }
};

//verbose solution
var isSquare = function (n) {
  if (Math.sign(n) === -1) {
    return false;
  }
  if (n === 0) {
    return true;
  }
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0 && n / i === i) {
      return true;
    }
  }
  return false;
};

//compact solution
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

//ES6 compact solution using isInterger
const isSquare = (n) => Number.isInteger(Math.sqrt(n));
