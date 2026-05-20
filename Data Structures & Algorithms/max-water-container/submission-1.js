class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea=0;
        let start = 0;
        let end = heights.length - 1;
        while(start < end) {
            let height = Math.min(heights[start], heights[end]);
            let width = end - start;
            let area = height * width;
            console.log("::::::",start, end, heights[start], heights[end])
            if(area > maxArea) {
                maxArea = area;
            }
            if(heights[start] > heights[end]) {
                end --;
            } else {
                start++
            }
        }
        return maxArea;
    }
}

// {
//     height : widht

//     1 : 8, 8
//     7 : 7, 47
//     2 : 6, 12
//     5: 5, 25
//     3: 3, 9
//     6: 5 30
//     3: 6 18
//     5: 7 35
//     2: 8 16
// }