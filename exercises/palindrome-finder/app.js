var isPalindrome = str => {
    // Account for capital letters, spaces, and punctuation
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    // Set variables that will be references several times in loop
    const numChecks = Math.floor(str.length / 2);
    const length = str.length
    // Check if first letter matches last letter, then move inward a step
    for (let i = 0; i < numChecks; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("taco ...?cAt"));
console.log(isPalindrome("noT ...?taco cat"));
