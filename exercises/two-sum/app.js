const twoSum = (arr, number) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === number) return [i, j];
        }
    }
}

console.log(twoSum([1,2, 0, 5, 7,3], 4));
console.log(twoSum([1,2,3], 3));
console.log(twoSum([1,2,3], 4));
console.log(twoSum([1,2,3, 8, 4], 12));
