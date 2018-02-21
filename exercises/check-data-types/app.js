function checkTypes(arr) {
    // Account for empty array
    if (arr.length === 0) return true;

    const dataType = establishType(arr);
    if (dataType === undefined) return false;

    return arr.every(subarr => subarr.every(elem => typeof elem === dataType));
}

// Establish type
const establishType = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== undefined) {
                return typeof arr[i][j];
            }
        }
    }
    return undefined;
}

const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]
console.log(checkTypes(multiD1));
// returns false (inner arrays aren't consistent with each other's data types)

const multiD2 = [[true,false,true],[false,false,true]]
console.log(checkTypes(multiD2));
// returns true (each inner array contains the same data type as the others)
