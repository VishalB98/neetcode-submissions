class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {}
        for(let i=0; i<strs.length; i++) {
            const countArray = new Array(26).fill(0);
            for (const str of strs[i]) {
                countArray[str.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
                
            }
            const key = countArray.join(',');
            if (!hashMap[key]) {
                hashMap[key] = [];
            }
            hashMap[key].push(strs[i]);
        }
        const result = Object.values(hashMap);
        return result
    }
}