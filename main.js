// Q1: Add all numbers
// Return a sum of all parameters entered regarless of the amount of numbers - NO ARRAYS
// ex. addAll(2, 5, 6, 7) === 20

// Solution - ES5 arguments & for loop
// function addAll() {
//   var args = Array.prototype.slice.call(arguments);
//   var total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   return total;
// }

// Solution 2 - ES6 ...rest & reduce/ forEach
// function addAll(...numbers) {
//   return numbers.reduce((acc, cur) => acc + cur);
// }

// console.log(addAll(2, 5, 6, 7));

// Q2: Sum All Primes
// Pass in a number to loop up to and add all of the prime numbers.
// A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
// function sumAllPrimes(num) {
//   let total = 0;

//   function checkForPrime(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= num; i++) {
//     if (checkForPrime(i)) {
//       total += i;
//     }
//   }

//   return total;
// }

// console.log(sumAllPrimes(10));

// Q3: Seek & Destroy
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution - arguments, indexOf, filter
// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);

//   function filterArr(arr) {
//     // Return true if Not in array
//     return args.indexOf(arr) === -1;
//   }

//   return arr.filter(filterArr);
// }

// Solution 2: ...rest, filter & includes
// function seekAndDestroy(arr, ...rest) {
//   return arr.filter(val => !rest.includes(val));
// }

// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));

// Q4: Sort By Height
//  Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by thier heights in a non-descending order without moving the trees.
// es.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
function sortByHeight() {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => {
    // if (val === -1) {
    //   arr1.push(i);
    // } else {
    //   arr2.push(val);
    // }
    val === -1 ? arr1.push(i) : arr2.push(val);
  });

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));
