const twoSum = function(nums, target) {
    // Option 2: Hash map (O(n))
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen[complement] !== undefined) {
            return [seen[complement], i];
        }
        seen[nums[i]] = i;
    }
};
