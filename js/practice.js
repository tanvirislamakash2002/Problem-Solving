const pathExistenceQueries = (n, nums, maxDiff, queries) => {
    // 1. Sort nodes by value
    let order = Array.from({length: n}, (_, i) => i);
    order.sort((a, b) => nums[a] - nums[b]);
    
    // 2. Position mapping
    const pos = new Array(n);
    order.forEach((origIdx, sortedPos) => {
        pos[origIdx] = sortedPos;
    });
    
    // 3. DSU for components
    class DSU {
        constructor(n) {
            this.parent = Array.from({length: n}, (_, i) => i);
            this.rank = new Array(n).fill(0);
        }
        find(x) {
            if (this.parent[x] !== x) {
                this.parent[x] = this.find(this.parent[x]);
            }
            return this.parent[x];
        }
        union(a, b) {
            const ra = this.find(a);
            const rb = this.find(b);
            if (ra === rb) return;
            if (this.rank[ra] < this.rank[rb]) {
                this.parent[ra] = rb;
            } else if (this.rank[ra] > this.rank[rb]) {
                this.parent[rb] = ra;
            } else {
                this.parent[rb] = ra;
                this.rank[ra]++;
            }
        }
    }
    
    const dsu = new DSU(n);
    const farthest = new Array(n);
    let right = 0;
    
    // 4. Build graph and compute farthest
    for (let i = 0; i < n; i++) {
        if (right < i) right = i;
        while (right + 1 < n && nums[order[right + 1]] - nums[order[i]] <= maxDiff) {
            right++;
        }
        farthest[i] = right;
        // Connect adjacent nodes
        if (i + 1 <= right) {
            dsu.union(order[i], order[i + 1]);
        }
    }
    
    // 5. Binary lifting
    const LOG = Math.ceil(Math.log2(n)) + 1;
    const up = Array.from({length: LOG}, () => new Array(n));
    up[0] = farthest.slice();
    for (let k = 1; k < LOG; k++) {
        for (let i = 0; i < n; i++) {
            up[k][i] = up[k - 1][up[k - 1][i]];
        }
    }
    
    // 6. Process queries
    const result = [];
    for (const [u, v] of queries) {
        if (u === v) {
            result.push(0);
            continue;
        }
        if (dsu.find(u) !== dsu.find(v)) {
            result.push(-1);
            continue;
        }
        
        let a = pos[u];
        let b = pos[v];
        if (a > b) [a, b] = [b, a];
        
        let steps = 0;
        let curr = a;
        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][curr] < b) {
                curr = up[k][curr];
                steps += 1 << k;
            }
        }
        result.push(steps + 1);
    }
    
    return result;
};

// Test
const n = 5;
const nums = [1, 8, 3, 4, 2];
const maxDiff = 3;
const queries = [[0, 3], [2, 4]];
console.log(pathExistenceQueries(n, nums, maxDiff, queries)); // [1, 1]