const myEvery = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;

}

const mySome = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

console.log(myEvery([1,2,"3"], (num)=>{
  return typeof num === "number";
}) === false);

console.log(mySome(["ben", "jacob", "bob"], (name)=>{
  return name === "jacob";
}) === true);
