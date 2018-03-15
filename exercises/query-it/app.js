const filterDatabase = (query, database) => {
    // const matchesQuery = [];
    // let isMatch;
    // for (entry of database) {
    //     isMatch = true
    //     for (let key in query) {
    //         if (query[key] !== entry[key]) {
    //             isMatch = false
    //             break
    //         }
    //     }
    //     if (isMatch) {matchesQuery.push(entry)}
    // }
    // return matchesQuery

    let results = [...database];

    for (let prop in query) {
        if (query.hasOwnProperty(prop)) {
            results = results.filter(obj => obj[prop] === query[prop]);
        }
    }

    return results;
}

const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

console.log(filterDatabase({}, database));

console.log(filterDatabase({dolphin: "squeak!"}, database));

console.log(filterDatabase({firstName: "Jack", age: 2}, database));
