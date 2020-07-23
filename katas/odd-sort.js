// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

//LOGIC
// save each array key for each odd number into an array
//create a new array with the odd numbers
// sort the new array
// insert array items in saved keys

//Initial solution, not very pretty but it works
const array = [3, 6, 7, 0, 4, 5, 9, 1];
function sortArray(array) {
  let oddIndexes = [];
  let sortedNumber = [];
  const odd = (n) => Math.abs(n % 2) == 1;

  for (let oi = 0; oi <= array.length; oi++) {
    if (odd(array[oi])) {
      oddIndexes.push(oi);
      sortedNumber.push(array[oi]);
    }
  }

  sortedNumber.sort((a, b) => a - b);

  for (let no = 0; no <= oddIndexes.length - 1; no++) {
    let currentIndex = oddIndexes[no];
    array[currentIndex] = sortedNumber[no];
  }
  return array;
}

sortArray(array);

module.exports = sortArray;

//Concise version using filter and conditional
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
