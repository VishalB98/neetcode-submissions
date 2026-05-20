class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    aplhaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        while (start < end) {
            while (start < end && !this.aplhaNum(s[start])) {
                start++;
            }
            while (end > start && !this.aplhaNum(s[end])) {
                end--;
            }
            if (s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false;
            }
            start++;
            end--;
        }
        return true
    }
}
