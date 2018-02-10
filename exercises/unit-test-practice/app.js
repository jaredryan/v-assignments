function assert(actual, expected) {
    if (actual !== expected) {
        throw new Error("Asserted that " + actual + " would equal " + expected);
    } else {
        console.log("Test Passed. Actual: " + actual + ", Expected: " + expected);
    }
}

function describe(message, testFunction) {
    console.log("\n" + message);
    try {
        testFunction();
    } catch(err) {
        console.log("Test FAILED: " + err.message);
    }
}

function add(a, b) {
    return a + b;
}

describe("An add function", function() {
    assert(add(2, 3), 5);
    assert(add(-1, -1), -2);
    assert(add(-1, 3), 2);
    assert(add(1, -3), -2);
});

function subtract(a, b) {
    return a - b;
}

describe("A subtract function", function() {
    assert(subtract(2, 1), 1);
    assert(subtract(-2, 1), -3);
    assert(subtract(2, -1), 3);
    assert(subtract(-2, -1), -1);
});



function multiply(a, b) {
    return a * b;
}

describe("A multiplication function", function() {
    assert(multiply(2, 4), 8);
    assert(multiply(2, -4), -8);
    assert(multiply(-2, 4), -8);
    assert(multiply(-2, -4), 8);
});




function divide(a, b) {
    return a / b;
}

describe("A division function", function() {
    assert(divide(8, 4), 2);
    assert(divide(8, -4), -2);
    assert(divide(-8, 4), -2);
    assert(divide(-8, -4), 2);
    assert(divide(8, 0), Infinity);
    assert(divide(-8, 0), -Infinity);

});