// TODO problem 01 :

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

// TODO problem 02 :

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

// TODO problem 03 :

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

// TODO problem 05 :

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

// TODO problem 06 :

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

// TODO problem 07 :

const pathExistenceQueries = (n, nums, maxDiff, queries) => {
    let components = []
    components[0] = 0
    let currentCamp = 0
    let result = []
    for (let i = 0; i < n - 1; i++) {
        if (nums[i + 1] - nums[i] <= maxDiff) {
            components[i + 1] = currentCamp
        } else {
            currentCamp++
            components[i + 1] = currentCamp
        }
    }
    for(q of queries){
        let [u,v]=q;
        if(components[u]===components[v]){
            result.push(true)
        }else{
            result.push(false)
        }
    }
    return result
};
const n = 2
const nums = [1, 3]
const maxDiff = 1
const queries = [[0, 0], [0, 1]]

const result = pathExistenceQueries(n, nums, maxDiff, queries)
console.log(result)

// TODO problem 08 :


const pathExistenceQueries = (n, nums, maxDiff, queries) => {
    let order = Array.from({ length: n }, (_, i) => i);
    order.sort((a, b) => nums[a] - nums[b]);

    const pos = new Array(n);
    order.forEach((origIdx, sortedPos) => {
        pos[origIdx] = sortedPos
    })

    class DSU {
        constructor(n) {
            this.parent = Array.from({ length: n }, (_, i) => i)
            this.rank = new Array(n).fill(0)
        }
        find(x) {
            if (this.parent[x] !== x) {
                this.parent[x] = this.find(this.parent[x])
            }
            return this.parent[x]
        }
        union(a, b) {
            const ra = this.find(a)
            const rb = this.find(b)
            if (ra === rb) return;
            if (this.rank[ra] < this.rank[rb]) {
                this.parent[ra] = rb
            } else if (this.rank[ra] > this.rank[rb]) {
                this.parent[rb] = ra
            } else {
                this.parent[rb] = ra
                this.rank[ra]++
            }
        }
    }
    const dsu = new DSU(n);
    const farthest = new Array(n)
    let right = 0

    for (let i = 0; i < n; i++) {
        if (right < i) right = i
        while (right + 1 < n && nums[order[right + 1]] - nums[order[i]] <= maxDiff) {
            right++
        }
        farthest[i] = right
        if (i + 1 <= right) {
            dsu.union(order[i], order[i + 1])
        }
    }

    const LOG = Math.ceil(Math.log2(n)) + 1
    const up = Array.from({ length: LOG }, () => new Array(n))
    up[0] = farthest.slice()
    for (let k = 1; k < LOG; k++) {
        for (let i = 0; i < n; i++) {
            up[k][i] = up[k - 1][up[k - 1][i]]
        }
    }

    const result = []
    for (const [u, v] of queries) {
        if (u === v) {
            result.push(0)
            continue
        }
        if (dsu.find(u) !== dsu.find(v)) {
            result.push(-1)
            continue
        }
        let a = pos[u]
        let b = pos[v]

        if (a > b) [a, b] = [b, a]

        let steps = 0
        let curr = a

        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][curr] < b) {
                curr = up[k][curr]
                steps += 1 << k
            }
        }
        result.push(steps + 1)
    }
    return result
};

const n = 5
const nums = [1, 8, 3, 4, 2]
const maxDiff = 3
const queries = [[0, 3], [2, 4]]

// TODO problem 09 :