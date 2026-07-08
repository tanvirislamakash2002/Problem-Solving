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

const MOD = 1000000007n;

const sumAndMultiply = (s, queries) => {
    const n = s.length;
    const result = [];
    
    const positions = [];
    for (let i = 0; i < n; i++) {
        if (s[i] !== '0') positions.push(i);
    }
    const k = positions.length;
    
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + (s[i] !== '0' ? Number(s[i]) : 0);
    }
    
    const prefixVal = new Array(k + 1).fill(0n);
    for (let i = 0; i < k; i++) {
        const digit = BigInt(Number(s[positions[i]]));
        prefixVal[i + 1] = (prefixVal[i] * 10n + digit) % MOD;
    }
    
    const pow10 = new Array(k + 1).fill(1n);
    for (let i = 1; i <= k; i++) {
        pow10[i] = (pow10[i - 1] * 10n) % MOD;
    }
    
    const lowerBound = (arr, target) => {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) left = mid + 1;
            else right = mid;
        }
        return left;
    };
    
    const upperBound = (arr, target) => {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] <= target) left = mid + 1;
            else right = mid;
        }
        return left;
    };
    
    for (const [l, r] of queries) {
        const leftIdx = lowerBound(positions, l);
        const rightIdx = upperBound(positions, r) - 1;
        
        if (leftIdx > rightIdx) {
            result.push(0);
            continue;
        }
        
        const digitSum = BigInt(prefixSum[r + 1] - prefixSum[l]);
        
        const len = rightIdx - leftIdx + 1;
        const rightVal = prefixVal[rightIdx + 1];
        const leftVal = prefixVal[leftIdx];
        
        let x = (rightVal - (leftVal * pow10[len]) % MOD + MOD) % MOD;
        
        result.push(Number((x * (digitSum % MOD)) % MOD));
    }
    
    return result;
};

// problem 07 :