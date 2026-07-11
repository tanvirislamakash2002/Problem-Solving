const findMedianSortedArrays = (nums1, nums2) => {
    // Ensure nums1 is the smaller array for efficiency
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    const total = m + n;
    const half = Math.floor((total + 1) / 2);

    let left = 0;
    let right = m;

    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = half - partition1;

        // Handle edge cases where partition is at the ends
        const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const minRight1 = partition1 === m ? Infinity : nums1[partition1];
        const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const minRight2 = partition2 === n ? Infinity : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Found the correct partition
            if (total % 2 === 1) {
                return Math.max(maxLeft1, maxLeft2);
            } else {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            }
        } else if (maxLeft1 > minRight2) {
            // Move partition1 to the left
            right = partition1 - 1;
        } else {
            // Move partition1 to the right
            left = partition1 + 1;
        }
    }

    // Should never reach here for valid inputs
    return 0;
};

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.50000
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0.00000
console.log(findMedianSortedArrays([], [1])); // 1.00000
console.log(findMedianSortedArrays([2], [])); // 2.00000