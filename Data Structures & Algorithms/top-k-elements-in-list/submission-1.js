class Solution {
    topKFrequent(nums, k) {
        const frequencyMap = new Map();
        
        // 1. Count frequencies of each number
        for (const num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }
        
        // 2. Create buckets where the index represents the frequency.
        // Size is nums.length + 1 because the max frequency of any element is nums.length.
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        
        for (const [num, freq] of frequencyMap) {
            buckets[freq].push(num);
        }
        
        // 3. Iterate from the end (highest frequency) and gather the top k elements
        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                // Spread the numbers into the result array
                result.push(...buckets[i]); 
                
                // Once we have k elements, we are done
                if (result.length === k) {
                    return result;
                }
            }
        }
        
        return result;
    }
}