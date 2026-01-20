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