/* // Q1: Add all numbers
// Return a sum of all parameters entered regarless of the amount of numbers - NO ARRAYS
// ex. addAll(2, 5, 6, 7) === 20

Solution - ES5 arguments & for loop
function addAll() {
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

Solution 2 - ES6 ...rest & reduce/ forEach
function addAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

console.log(addAll(2, 5, 6, 7)); */

/* // Q2: Sum All Primes
// Pass in a number to loop up to and add all of the prime numbers.
// A prime number is a whole number greater than 1 whose only factors are 1 and itself
ex. sumAllPrimes(10) == 17
function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }

  return total;
}

console.log(sumAllPrimes(10)); */

/* // Q3: Seek & Destroy
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

Solution - arguments, indexOf, filter
function seekAndDestroy(arr) {
  const args = Array.from(arguments);

  function filterArr(arr) {
    // Return true if Not in array
    return args.indexOf(arr) === -1;
  }

  return arr.filter(filterArr);
}

Solution 2: ...rest, filter & includes
function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6)); */

/* // Q4: Sort By Height
//  Some people are standing in a row in a park. There are trees between them which cannot be moved. 
// Your task is to rearrange the people by thier heights in a non-descending order without moving the trees.
// es.
a = [-1, 150, 190, 170, -1, -1, 160, 180]
sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
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
console.log(sortByHeight(a)); */

/* // Q5 : Missing letters
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingletters("abcdefghijklmnopqrstuvwxyz") == undefined
function missingleters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split('').map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

console.log(missingleters('abce')); */

// Q6: Even & Odd Sums
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50,60,45,71]) == [170, 116]
/* function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 45, 71])); */

// Q7: Reverse A String
// return a String in reverse
// ex. reverseString("hello") === "olleh"
// function reverseString(str) {
//   const strArr = str.split('');
//   strArr.reverse();

//   return strArr.join('');
// }

// Solution 2
// function reverseString(str) {
//   let revString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     revString = revString + str[i];
//   }
//   return revString;
// }

// Solution 3
// function reverseString(str) {
//   let revString = '';
//   for (let i = 0; i <= str.length - 1; i++) {
//     revString = str[i] + revString;
//   }
//   return revString;
// }

// Solution 4
// function reverseString(str) {
//   let revString = '';
//   for (let char of str) {
//     revString = char + revString;
//   }
//   return revString;
// }

// Solution 5
// function reverseString(str) {
//   let revString = '';
//   str.split('').forEach(char => (revString = char + revString));
//   return revString;
// }

// console.log(reverseString('hello'));

// Solution 6
// function reverseString(str) {
//   return str.split('').reduce((revString, char) => {
//     return char + revString;
//   });
// }

// console.log(reverseString('hello'));

// Q8: Validate a Palindrome
// Return true if palindrome and false if not
// ex. isPalindrome("racecar") === true, ifPalindrome("hello") === false

// function isPalindrome(str) {
//   const revString = str
//     .split('')
//     .reverse()
//     .join('');
//   return revString === str;
// }

// Q9: Reverse an Integer
// Return an integer in reverse
// ex. reverseInt(521) === 125
// function reverseInt(int) {
//   const revString = int
//     .toString()
//     .split('')
//     .reverse()
//     .join('');

//   return parseInt(revString) * Math.sign(int);
// }

// Q10: Capitalize letters
// Return a string with the first letter of every word capitalized
// ex.  capitalizeLetters("i love javascript") === "I Love Javascript"
/* function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(' ');

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }

  return strArr.join(' ');
}
console.log(capitalizeLetters('i love javascript')); */

// Solution 2
/* function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.subStr(1))
    .join(' ');
}

// Solution 3
function capitalizeLetters(str) {
  return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
} */

// Q11: Max Character
// Return the character that is most common in a string
// ex. maxCharacter('javascript') === 'a'
/* function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(char => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxCharacter('javascript'));

 */
// Q12: FizzBuzz
/* function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
 */
