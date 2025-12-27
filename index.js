// 1. Deep Clone an Object (Avoiding Reference Issues)
// Problem: When you assign an object to another variable in JavaScript, you're copying the reference, not creating a new object. This leads to unexpected mutations.

// Problem demonstration
// const original = { 
//   name: "John", 
//   address: { city: "NYC", zip: 10001 },
//   hobbies: ["reading", "coding"]
// };
const copy = original; // Shallow copy
copy.name = "Jane";
console.log(original.name); // Output: "Jane" - UNEXPECTED!

// Solution: Implement a deep clone function that handles nested objects, arrays, and primitive values.


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

// Modern alternative using structuredClone (available in modern browsers)
function deepCloneModern(obj) {
  return structuredClone(obj);
}

// Usage
const original = { 
  name: "John", 
  address: { city: "NYC", zip: 10001 },
  hobbies: ["reading", "coding"]
};

const cloned = deepClone(original);
cloned.name = "Jane";
cloned.address.city = "LA";
cloned.hobbies.push("gaming");

console.log(original.name); // "John" - unchanged
console.log(original.address.city); // "NYC" - unchanged
console.log(original.hobbies); // ["reading", "coding"] - unchanged



// 2. Debouncing Function (Performance Optimization)
// Problem: Events like scroll, resize, or keypress can fire many times per second, causing performance issues if expensive operations run on each event.

// Problem: This runs too many times during typing
inputElement.addEventListener('input', function(e) {
  fetchResults(e.target.value); // API call on every keystroke
});

// Solution: Implement a debounce function that delays execution until after a specified time period has passed since the last call.


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

// Enhanced version with immediate option
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

// Usage example
const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');

function searchAPI(query) {
  console.log(`Searching for: ${query}`);
  // In real app: fetch(`/api/search?q=${query}`).then(...)
}

// Debounce the search function with 500ms delay
const debouncedSearch = debounce(searchAPI, 500);

searchInput.addEventListener('input', function(e) {
  debouncedSearch(e.target.value);
});

// Real-world example with async operations
async function fetchSearchResults(query) {
  if (!query.trim()) return;
  
  try {
    const response = await fetch(`https://api.example.com/search?q=${query}`);
    const data = await response.json();
    displayResults(data);
  } catch (error) {
    console.error('Search failed:', error);
  }
}

const debouncedFetch = debounce(fetchSearchResults, 300);

// Throttle alternative (runs at most once per specified period)
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

// Choose based on use case:
// - Debounce: For search inputs, auto-save
// - Throttle: For scroll/resize events, button clicks

// Both problems address common real-world scenarios:

// Deep Clone: Essential for state management, immutability patterns (React/Redux), and preventing side effects

// Debouncing: Critical for performance optimization in UI interactions and network request management