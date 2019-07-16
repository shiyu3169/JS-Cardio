// Q1: Add all numbers
// Return a sum of all parameters entered regarless of the amount of numbers - NO ARRAYS
// ex. addAll(2, 5, 6, 7) === 20

// Solution - ES5 arguments & for loop
// function addAll() {
//   var args = Array.prototype.slice.call(arguments);
//   var total = 0;
//   for (i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   return total;
// }

// Solution 2 - ES6 ...rest & reduce/ forEach
function addAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

console.log(addAll(2, 5, 6, 7));
