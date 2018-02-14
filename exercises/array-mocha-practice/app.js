// Given an array of person objects, return an array of first and last names of
// everyone over 17

const firstLastOverAge = (arr, age) => {
    return arr.filter(person => person.age > age)
              .map(person => `${person.firstName} ${person.lastName}`);
}
//
// module.exports = firstLastOver17;

const multiply = arr => arr.reduce((total, num) => total * num);

const sum = arr => arr.reduce((total, num) => total + num);

module.exports = {
    multiply,
    firstLastOverAge,
    sum
};
