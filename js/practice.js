
const sequentialDigits = function (low, high) {
    const result = []
    const allDigits = "1234568789"
    for (let len = String(low).length; len <= String(high).length; len++) {
        for (let start = 0; start + len <= allDigits.length; start++) {
            const num = Number(allDigits.slice(start, start + len))
            if (num >= low && num <= high) {
                result.push(num)
            }
        }
    }
    return result.sort((a, b) => a - b)
};
const low = 1000
const high = 13000
const result = sequentialDigits(low, high)
console.log(result)