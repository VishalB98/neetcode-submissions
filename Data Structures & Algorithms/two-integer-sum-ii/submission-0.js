class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0;
        let end = numbers.length - 1;
        while (start < end) {
            let currentSum = numbers[start] + numbers[end];
            if (currentSum > target) {
                end--;
            }
            else if (currentSum < target) {
                start++;
            }
            else {
                return [start+1, end+1]
            }
        }
        return []
    }
}
