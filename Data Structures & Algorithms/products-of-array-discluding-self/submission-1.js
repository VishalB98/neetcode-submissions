class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixArray = [];
        let suffixArray = [];
        let preCount = 1;
        let suffixCount = 1;
        let finalArray = [];
        for (let i = 0; i < nums.length; i++) {
            prefixArray.push(preCount);
            suffixArray.unshift(suffixCount)

            preCount *= nums[i];
            console.log(preCount, nums[i])
            suffixCount *= nums[nums.length - i - 1];
        }
        console.log(":::::::", prefixArray, suffixArray)
        for (let j = 0; j < nums.length; j++) {
            finalArray.push(prefixArray[j] * suffixArray[j]);
        }
        return finalArray;
    }
}

// 1 [1,2,4,6] 1
//    [1,1,2,8]
//    [48,24,6,1] 