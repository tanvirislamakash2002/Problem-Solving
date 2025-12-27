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