var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];

while(true) {
	var index = ask.keyInSelect(options, "What would you like to do today?: ");
	switch(index) {
		case 0:
			console.log("You pick some flowers. You make a bouquet.");
			break;
		case 1:
			console.log("You shoot guns.");
			break;
		case 2:
			console.log("You fought a bear and got beat up!");
			return;
		default:
			console.log("Select an option.");
	}
}


