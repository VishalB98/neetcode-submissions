class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let longest = 0;
        for(let i=0; i<nums.length; i++) {
            if(!numSet.has(nums[i] - 1)) {
                let length = 1;
                while(numSet.has(nums[i] + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}


