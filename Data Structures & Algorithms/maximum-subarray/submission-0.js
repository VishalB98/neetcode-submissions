class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currCount = 0;
        let maxSub = nums[0];
        for(let i=0; i<nums.length; i++) {
            if(currCount < 0) {
                currCount = 0;
            }
            currCount += nums[i];
            maxSub = Math.max(currCount, maxSub)
        }
        return maxSub;
    }
    
}