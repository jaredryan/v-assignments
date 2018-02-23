const isIpAddress = address => {
    const numbers = address.split(".");
    return numbers.length === 4 && numbers.every(number => Number(number <= 255 && number >= 0));
}

console.log(isIpAddress("0.25.3.5"));
