function deepClone(obj) {
  // Handle primitives, null, and undefined
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  // Handle Object
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  
  // Fallback (should not reach here for valid inputs)
  return obj;
}

function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    // Clear the previous timeout
    clearTimeout(timeoutId);
    
    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// debounced advanced function
function debounceAdvanced(func, delay, immediate = false) {
  let timeoutId;
  
  return function(...args) {
    const context = this;
    
    const later = function() {
      timeoutId = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    
    const callNow = immediate && !timeoutId;
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
    
    if (callNow) {
      func.apply(context, args);
    }
  };
}

function deepEqual(obj1, obj2) {
  // Handle primitive types (including NaN, null, undefined)
  if (obj1 === obj2) {
    return true;
  }
  
  // Handle NaN comparison
  if (Number.isNaN(obj1) && Number.isNaN(obj2)) {
    return true;
  }
  
  // Check if both are objects and not null
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || 
      obj1 === null || obj2 === null) {
    return false;
  }
  
  // Handle Date comparison
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }
  
  // Handle RegExp comparison
  if (obj1 instanceof RegExp && obj2 instanceof RegExp) {
    return obj1.toString() === obj2.toString();
  }
  
  // Handle ArrayBuffer, TypedArray, etc. if needed
  // (Often omitted in interviews unless specified)
  
  // Get keys from both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  // Check if they have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  // Check if all keys are the same and recursively check values
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  
  return true;
}

// 
function deepEqual(obj1, obj2, visited = new WeakMap()) {
  // Basic equality check
  if (obj1 === obj2) return true;
  
  // Handle NaN
  if (Number.isNaN(obj1) && Number.isNaN(obj2)) return true;
  
  // Check for non-objects or null
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || 
      obj1 === null || obj2 === null) {
    return false;
  }
  
  // Handle circular references
  if (visited.has(obj1) && visited.get(obj1) === obj2) {
    return true;
  }
  visited.set(obj1, obj2);
  
  // Check constructors
  if (obj1.constructor !== obj2.constructor) return false;
  
  // Handle special object types
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }
  
  if (obj1 instanceof RegExp && obj2 instanceof RegExp) {
    return obj1.toString() === obj2.toString();
  }
  
  // Get all properties (including symbols)
  const keys1 = Reflect.ownKeys(obj1);
  const keys2 = Reflect.ownKeys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  // Check each property recursively
  for (const key of keys1) {
    if (!Reflect.has(obj2, key) || 
        !deepEqual(obj1[key], obj2[key], visited)) {
      return false;
    }
  }
  
  return true;
}

function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    // Clear the previous timeout
    clearTimeout(timeoutId);
    
    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function deepEqual(obj1, obj2) {
  // Handle primitive types (including NaN, null, undefined)
  if (obj1 === obj2) {
    return true;
  }
  
  // Handle NaN comparison
  if (Number.isNaN(obj1) && Number.isNaN(obj2)) {
    return true;
  }
  
  // Check if both are objects and not null
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || 
      obj1 === null || obj2 === null) {
    return false;
  }
  
  // Handle Date comparison
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }
  
  // Handle RegExp comparison
  if (obj1 instanceof RegExp && obj2 instanceof RegExp) {
    return obj1.toString() === obj2.toString();
  }
  
  // Handle ArrayBuffer, TypedArray, etc. if needed
  // (Often omitted in interviews unless specified)
  
  // Get keys from both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  // Check if they have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  // Check if all keys are the same and recursively check values
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  
  return true;
}

function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

function deepEqual(obj1, obj2) {
  // Handle primitive types (including NaN, null, undefined)
  if (obj1 === obj2) {
    return true;
  }
  
  // Handle NaN comparison
  if (Number.isNaN(obj1) && Number.isNaN(obj2)) {
    return true;
  }
  
  // Check if both are objects and not null
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || 
      obj1 === null || obj2 === null) {
    return false;
  }
  
  // Handle Date comparison
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }
  
  // Handle RegExp comparison
  if (obj1 instanceof RegExp && obj2 instanceof RegExp) {
    return obj1.toString() === obj2.toString();
  }
  
  // Handle ArrayBuffer, TypedArray, etc. if needed
  // (Often omitted in interviews unless specified)
  
  // Get keys from both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  // Check if they have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  // Check if all keys are the same and recursively check values
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  
  return true;
}

function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    // Clear the previous timeout
    clearTimeout(timeoutId);
    
    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// debounced advanced function
function debounceAdvanced(func, delay, immediate = false) {
  let timeoutId;
  
  return function(...args) {
    const context = this;
    
    const later = function() {
      timeoutId = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    
    const callNow = immediate && !timeoutId;
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
    
    if (callNow) {
      func.apply(context, args);
    }
  };
}

function deepClone(obj) {
  // Handle primitives, null, and undefined
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  // Handle Object
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  
  // Fallback (should not reach here for valid inputs)
  return obj;
}

function deepClone(obj) {
  // Handle primitives, null, and undefined
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  // Handle Object
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  
  // Fallback (should not reach here for valid inputs)
  return obj;
}



function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
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

// debounced advanced function
function debounceAdvanced(func, delay, immediate = false) {
  let timeoutId;
  
  return function(...args) {
    const context = this;
    
    const later = function() {
      timeoutId = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    
    const callNow = immediate && !timeoutId;
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
    
    if (callNow) {
      func.apply(context, args);
    }
  };
}

function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

function AreArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    // Note: This doesn't handle duplicates correctly!
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    
    if (set1.size !== set2.size) return false;
    
    for (let item of set1) {
        if (!set2.has(item)) return false;
    }
    
    return true;
}

// console.log(AreArraysEqual([1, 2, 3], [3, 2, 1])); 

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        const seen = new Set();
        let currentLength = 0;
        
        for (let j = i; j < s.length; j++) {
            if (seen.has(s[j])) {
                break;
            }
            seen.add(s[j]);
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    
    return maxLength;
}

// console.log(lengthOfLongestSubstring("abcabcbb"));

function MergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0
    let j = 0;
    
    while (i < arr1.length || j < arr2.length) {
        if (j === arr2.length || (i < arr1.length && arr1[i] < arr2[j])) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    return merged;
}

// console.log(MergeSortedArrays([1, 3, 5], [2, 4, 6])); 

function FindMissingNumber(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length + 1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    
    return n;
}

// console.log(FindMissingNumber([1, 2, 3, 4, 5]))

function removeDuplicates(arr) {
    // Edge case: handle invalid input
    if (!Array.isArray(arr)) {
        return [];
    }
    
    // Use Set for O(n) time complexity
    return [...new Set(arr)];
}

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

function findMissingNumber(arr, n) {
    // Calculate expected sum of numbers from 1 to n
    const expectedSum = (n * (n + 1)) / 2;
    
    // Calculate actual sum of array elements
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    // Missing number is the difference
    return expectedSum - actualSum;
}
