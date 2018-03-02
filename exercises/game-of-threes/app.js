const gameOfThrees = range => {
    // Get random number
    let num = Math.floor(Math.random() * range + 1)
    let mod3;
    while (num !== 1) {
        console.log(num);
        mod3 = num % 3;
        if (mod3 === 0) {
            num /= 3;
        } else if (mod3 === 1) {
            num = (num - 1) / 3
        } else {
            num = (num + 1) / 3
        }
    }
    console.log(num);
}

gameOfThrees(100);
