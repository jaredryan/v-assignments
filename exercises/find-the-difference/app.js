const findDifferences = (...arr) => {
    const findDifferencesfromList = (arr, list, duplicated) => {
        for (elem of arr) {
            if (typeof elem === "object") {
                findDifferencesfromList(elem, list, duplicated)
            } else if (!list.includes(elem)) {
                list.push(elem)
            } else {
                list.splice(list.indexOf(elem), 1)
                duplicated.push(elem)
            }
        }
    }

    const differences = [];
    const duplicated = [];
    findDifferencesfromList(arr, differences, duplicated)
    return differences
}

console.log(findDifferences([1, 2], [3, 2], [4, 1], [[5, 3]]));
