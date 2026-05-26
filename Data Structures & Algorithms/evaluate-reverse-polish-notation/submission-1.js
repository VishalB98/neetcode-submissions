class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let opStack = [];
        let validOps = new Set(["*", "-", "+", "/"]);
        const opFunc = (ops, firstVal, secondVal) => {
            console.log(firstVal, secondVal, opStack);
            switch (ops) {
                case "*":
                    opStack.push(firstVal * secondVal);
                    break;
                case "+":
                    opStack.push(firstVal + secondVal);
                    break;
                case "-":
                    opStack.push(firstVal - secondVal);
                    break;
                case "/":
                    opStack.push(parseInt(firstVal / secondVal));
                    break;
            }
        };
        for (let i = 0; i < tokens.length; i++) {
            if (validOps.has(tokens[i])) {
                let secondVal = Number(opStack.pop());
                let firstVal = Number(opStack.pop());
                console.log("In If Condition", opStack,firstVal, secondVal);

                opFunc(tokens[i], firstVal, secondVal);
            } else {
                opStack.push(tokens[i]);
            }
        }
        console.log(opStack)
        return opStack.pop()
    }
}
