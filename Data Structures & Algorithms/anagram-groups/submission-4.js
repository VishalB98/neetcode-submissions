class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {}
        for (const str of strs) {
            const countArray = new Array(26).fill(0); //[0,0,0,0,0,0,0,0,0,0,0,0,...]
            for( let s of str ) {
                countArray[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = countArray.join();
            if(!hashMap[key]) hashMap[key] = [];
            hashMap[key].push(str)
        }
        return Object.values(hashMap);
    }
}
// complexity time n*klogk
// n*k
// m*l

// sort the string in the array;
// add it to the hashMap {
    // act: [indexs, ...] [1,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,1,0,0,0]
    // opts: [indexs, ...]
// }