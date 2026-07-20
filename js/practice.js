const shiftGrid = (grid, k) => {
    const m = grid.length;
    const n = grid[0].length;
    const total = m * n;
    
    k = k % total;
    
    // Flatten the grid
    const flat = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            flat.push(grid[i][j]);
        }
    }
    
    // Create result grid
    const result = [];
    for (let i = 0; i < m; i++) {
        result.push([]);
        for (let j = 0; j < n; j++) {
            const newIndex = (i * n + j - k + total) % total;
            result[i][j] = flat[newIndex];
        }
    }
    
    return result;
};

const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const k = 1;
const result = shiftGrid(grid, k);
console.log(result); // [[9,1,2],[3,4,5],[6,7,8]]