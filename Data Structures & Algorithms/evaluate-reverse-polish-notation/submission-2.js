class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let opStack = [];
        let validOps = new Set(["*", "-", "+", "/"]);
        const operations = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => parseInt(a / b),
        };
        for (let i = 0; i < tokens.length; i++) {
            if (validOps.has(tokens[i])) {
                let secondVal = Number(opStack.pop());
                let firstVal = Number(opStack.pop());
                opStack.push(operations[tokens[i]](firstVal, secondVal));
            } else {
                opStack.push(tokens[i]);
            }
        }
        console.log(opStack)
        return opStack.pop()
    }
}
