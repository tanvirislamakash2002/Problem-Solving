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