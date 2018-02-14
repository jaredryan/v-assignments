const functions = require('./app');
const chai = require("chai");
const assert = chai.assert;

const people = [
    {
        firstName: "Jerry",
        lastName: "Gergich",
        age: 52
    },
    {
        firstName: "Leslie",
        lastName: "Knope",
        age: 40
    },
    {
        firstName: "Tommy",
        lastName: "Haverford",
        age: 10
    },
    {
        firstName: "Ronny",
        lastName: "Swanson",
        age: 7
    }
];

describe("Higher order functions", () => {
    it ("should multiply all elements together", () => {
        assert.equal(functions.multiply([2, 4, 5]), 40);
    });
    it ("should return a number", () => {
        assert.typeOf(functions.multiply([2, 4, 5]), "number");
        assert.typeOf(functions.sum([2, 4, 5]), "number");
    });
    it ("should add all elements together", () => {
        assert.equal(functions.sum([2, 4, 5]), 11);
    });
    it ("should correctly filter people and display full names", () => {
        assert.deepEqual(functions.firstLastOverAge(people, 9), ["Jerry Gergich", "Leslie Knope", "Tommy Haverford"]);
        assert.deepEqual(functions.firstLastOverAge(people, 11), ["Jerry Gergich", "Leslie Knope"]);
        assert.deepEqual(functions.firstLastOverAge(people, 41), ["Jerry Gergich"]);
    });
});
