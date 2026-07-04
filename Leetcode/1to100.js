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

console.log(isPalindrome("Akash"))