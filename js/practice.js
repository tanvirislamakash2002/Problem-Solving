var findMissingElements = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const missingElements = [];

    for(let i=min;i<=max;i++){
        if(!nums.includes(i)){
            missingElements.push(i);
        }
    }
    return missingElements;
};

const nums = [1,4,2,5]
const missingElements = findMissingElements(nums);
console.log(missingElements)