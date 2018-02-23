const hasBalancedParentheses = string => {
    let openParens = 0;
    let closingParens = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(") {
            openParens++;
        } else if (string[i] === ")") {
            closingParens++;
            if (closingParens > openParens) {
                return false;
            }
        }
    }
    return openParens === closingParens;
}

console.log(hasBalancedParentheses("()()") === true);
console.log(hasBalancedParentheses("(())") === true);
console.log(hasBalancedParentheses("()))") === false);
console.log(hasBalancedParentheses(")()(") === false);
console.log(hasBalancedParentheses("())(") === false);
console.log(hasBalancedParentheses("((()") === false);
