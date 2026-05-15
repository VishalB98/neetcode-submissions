class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {}
        for (const str of strs) {
            let sortedStr = str.split('').sort().join('');
            if(!hashMap[sortedStr]) hashMap[sortedStr] = [];
            hashMap[sortedStr].push(str)
        }
        return Object.values(hashMap);
    }
}
