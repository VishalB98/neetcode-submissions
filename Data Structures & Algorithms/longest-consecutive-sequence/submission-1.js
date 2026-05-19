class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;
        for (let i = 0; i < nums.length; i++) {
            if (!numSet.has(nums[i] - 1)) {
                let currentLength = 1;
                while (numSet.has(nums[i] + currentLength)) {
                    currentLength++
                }
                longest = Math.max(longest, currentLength)
            }
        }
        return longest
    }
}


