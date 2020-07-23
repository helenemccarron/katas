//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//Note the original exercise validated the numbers but this tests expected a string and verified them

//LOGIC
//split string
//convert each into int
//filter out any non number values
// evaluate highest
//evaluate lowest
//return both values

//const numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
const numbers = "1 2 -3 4 5 ewe";
function highAndLow(numbers) {
  let numStrings = numbers
    .split(" ")
    .map(Number)
    .filter((val) => !Number.isNaN(val));
  let maxNum = Math.max.apply(0, numStrings);
  let minNum = Math.min.apply(0, numStrings);
  return maxNum + " " + minNum;
}

highAndLow(numbers);

module.exports = highAndLow;
