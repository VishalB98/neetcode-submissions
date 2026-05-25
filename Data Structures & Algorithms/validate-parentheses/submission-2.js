class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false
        const bracketMap = {
            '[': ']',
            '{': '}',
            '(': ')'
        }
        const startBracket = Object.keys(bracketMap);
        let bracketStack = [];
        for (let i = 0; i < s.length; i++) {
            if (startBracket.includes(s[i])) {
                bracketStack.push(s[i]);
            } else {
                if (bracketMap[bracketStack.pop()] !== s[i]) {
                    return false;
                }
            }
        }
        return bracketStack.length === 0
    }
}
