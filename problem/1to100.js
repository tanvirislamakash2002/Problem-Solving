

// 1. **Reverse a String**
//    Given a string, write a function that returns the string reversed.

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}


// 2. **Check for Palindrome**
//    Write a function that checks whether a given string is a palindrome (reads the same backward).

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// 3. **Find the Largest Number in an Array**
//    Given an array of numbers, return the largest number without using built-in max functions.

function findLargestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// 4. **Remove Duplicates from an Array**
//    Given an array, return a new array with duplicate values removed.

function removeDuplicates(arr) {
    // Edge case: handle invalid input
    if (!Array.isArray(arr)) {
        return [];
    }
    
    // Use Set for O(n) time complexity
    return [...new Set(arr)];
}

// Example usage
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// or--
function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }
    
    const unique = [];
    const seen = {};
    
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (!seen[item]) {
            seen[item] = true;
            unique.push(item);
        }
    }
    
    return unique;
}

// 5. **Count Character Frequency**
//    Given a string, return an object that shows how many times each character appears.

function countCharacterFrequency(str) {
    // Edge case: handle invalid input
    if (typeof str !== 'string') {
        return {};
    }
    
    const frequency = {};
    
    for (const char of str) {
        // If character exists, increment; otherwise initialize to 1
        frequency[char] = (frequency[char] || 0) + 1;
    }
    
    return frequency;
}

// Example usage
console.log(countCharacterFrequency("hello")); 
// { h: 1, e: 1, l: 2, o: 1 }

console.log(countCharacterFrequency("mississippi")); 
// { m: 1, i: 4, s: 4, p: 2 }

// 6. **Flatten a Nested Array**
//    Given an array that may contain nested arrays, return a single flattened array.

// 7. **Find Missing Number in an Array**
//    Given an array of numbers from 1 to N with one number missing, find the missing number.

// 8. **Debounce Function Implementation**
//    Write a function that implements debounce behavior for another function.

// 9. **Group Objects by Property**
//    Given an array of objects, group them by a specific property and return the result.

// 10. **Promise Chaining**
//     Write a function that executes multiple asynchronous operations in sequence using Promises.

