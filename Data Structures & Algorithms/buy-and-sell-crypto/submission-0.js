class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buying = 0;
        let selling = 1;
        let maxProfit = 0;
        while (selling < prices.length) {
            if (prices[buying] == prices[selling]) {
                selling++
            }
            let profit = prices[selling] - prices[buying];
            console.log("llll",profit)
            if (profit > maxProfit) {
                maxProfit = profit;
            }
            if (profit > 0) {
                selling++
            } else if (profit < 0) {
                buying++
            }
        }
        return maxProfit;
    }
}


