var readlineSync = require("readline-sync");

var input1 = readlineSync.question("Please enter your first number: ");
var input2 = readlineSync.question("Please enter your second number: ");
var operation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div\n");

var result;
switch(operation) {
	case "add":
		result = parseInt(input1) + parseInt(input2);
		break;
	case "sub":
		result = parseInt(input1) - parseInt(input2);
		break;
	case "mul":
		result = parseInt(input1) * parseInt(input2);
		break;
	case "div":
		result = parseInt(input1) / parseInt(input2);
		break;
}

console.log("The result is: " + result);
