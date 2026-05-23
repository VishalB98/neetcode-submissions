class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freMap = new Map();
        for (const num of nums) {
            freMap.set(num, (freMap.get(num) || 0)+ 1)
        }
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, fre] of freMap) {
            bucket[fre].push(num)
        }
        let result = [];
        for(let i = bucket.length -1; i>=0; i--){ 
            if(bucket[i].length > 0) {
                result.push(...bucket[i])
                if(result.length == k) {
                    return result
                }
            }
        } 
    }
}
