class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = {}
        let res = []
        for (const num of nums) {
            if (!hashMap[num]) hashMap[num] = 0;
            hashMap[num] += 1;
        }
        const topkEntries = Object.entries(hashMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k);
        for(const data of topkEntries) {
            res.push(data[0])
        }
       return res
    }
}
