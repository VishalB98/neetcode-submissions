class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        
        let freqs1 = new Map;
        for(const s of s1) {
            freqs1.set(s, (freqs1.get(s) || 0) + 1);
        }
        let freqs2 = new Map;
let left = 0;
        
        for(let right = 0; right < s2.length; right++) {
            let s = s2[right];
            freqs2.set(s, (freqs2.get(s) || 0) + 1);
            
            // Fix: Shrink from the left instead of wiping everything with clear()
            while(freqs2.get(s) > (freqs1.get(s) || 0)) {
                let leftChar = s2[left];
                freqs2.set(leftChar, freqs2.get(leftChar) - 1);
                if(freqs2.get(leftChar) === 0) freqs2.delete(leftChar);
                left++;
            }
            
            // Fix: Check the length of the valid window instead of map size
            if(right - left + 1 === s1.length) return true;
        }
        return false;
    }
}