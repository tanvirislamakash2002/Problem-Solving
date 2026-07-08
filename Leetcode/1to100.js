// problem 01 :

const twoSum = function (nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen[complement] !== undefined) {
            return [seen[complement], i];
        }
        seen[nums[i]] = i;
    }
};

// problem 02 :

const isPalindrome = (x) => {
    if (typeof (x) === "number") {
        x = x.toString()
    }
    if (typeof (x) === "string") {
        const arr = x.split('')
        const reverseArr = arr.reverse()

        return reverseArr.join('') === x
    }
};

// problem 03 :

const romanToInt = function (s) {
  const arr = s.split('');
  let value = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "I" && arr[i + 1] === "V") {
      value += 4;
      i++;
    } else if (arr[i] === "I" && arr[i + 1] === "X") {
      value += 9;
      i++;
    } else if (arr[i] === "X" && arr[i + 1] === "L") {
      value += 40;
      i++;
    } else if (arr[i] === "X" && arr[i + 1] === "C") {
      value += 90;
      i++;
    } else if (arr[i] === "C" && arr[i + 1] === "D") {
      value += 400;
      i++;
    } else if (arr[i] === "C" && arr[i + 1] === "M") {
      value += 900;
      i++;
    } else if (arr[i] === "I") {
      value += 1;
    } else if (arr[i] === "V") {
      value += 5;
    } else if (arr[i] === "X") {
      value += 10;
    } else if (arr[i] === "L") {
      value += 50;
    } else if (arr[i] === "C") {
      value += 100;
    } else if (arr[i] === "D") {
      value += 500;
    } else if (arr[i] === "M") {
      value += 1000;
    }
  }
  return value
};

// problem 04 :

const removeCoveredIntervals = (intervals) => {
  let max_end = -1
  let count = 0

  intervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return b[1] - a[1];
  })

  for (let i = 0; i < intervals.length; i++) {
    const [li, ri] = intervals[i];

    if (ri > max_end) {
      max_end = ri
      count += 1
    }
  }
  return count
};

console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]));

// problem 05 :

const sumAndMultiply = (n)=> {
   let total = 0;
   let combine = "" 
   const arr = n.toString().split('')

   for (a of arr){
    if(a!=="0"){
        combine +=a
        total += Number(a)
    }
   }
   return combine * total
};

sumAndMultiply(10203004)

// problem 06 :