class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {}
        for(let i=0; i<strs.length; i++) {
            let sortedString = strs[i].split('').sort().join('');
            if(!hashMap[sortedString]) hashMap[sortedString] = [];
            hashMap[sortedString].push(strs[i])
        }
        const result = Object.values(hashMap);
        return result
    }
}