/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
    let minValue = Math.min(...nums)
    const sortArray = nums.sort((a, b) => a - b)
    let output = 0
    for (let i = 0; i < nums.length; i++) {
        if (sortArray[i] === minValue + i) {
            output++
        } else {
            minValue = sortArray[i]
            output = 0
        }
    }

    return output

};

const nums = [3, 4, 5, 1, 12, 14, 13]

const result = missingInteger(nums)
console.log(result)