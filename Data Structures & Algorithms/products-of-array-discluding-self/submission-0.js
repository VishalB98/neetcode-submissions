class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let resArray = []
        for (let i = 0; i < nums.length; i++) {
            let count = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i == j) {
                    continue;
                } else {
                    count *= nums[j];
                }
            }
            resArray.push(count);
        }
        return resArray;
    }
}
