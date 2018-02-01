// Set up
var readlineSync = require("readline-sync");
var string = readlineSync.question("Enter your string: ");
var numToShiftRight = readlineSync.question("Enter the number of characters to shift right: ");

var newStr = ""
for (var i = 0; i < string.length; i++) {
	newStr += getNewChar(string, i, numToShiftRight);
}
console.log("Encrypted String: " + newStr);

/* Takes in a string, index of the character to return encrypted, and a number
   indicating how to the right on the alphabet it should slide. */
function getNewChar(string, index, numToShiftRight) {
	var curChar = string.charCodeAt(index);
	curChar += parseInt(numToShiftRight);
	if (curChar > 122) curChar -= 26;
	return String.fromCharCode(curChar);
}
