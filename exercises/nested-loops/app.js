var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function nestedForLoop(people, alphabet) {
	capitalAlphabet = alphabet.toUpperCase()
	newArray = [];
	for (var i = 0; i < people.length; i++) {
		newArray.push(people[i] + ":");
		for (var j = 0; j < capitalAlphabet.length; j++) {
			newArray.push(capitalAlphabet[j]);
		}
	}
	return newArray;
}

console.log(nestedForLoop(people, alphabet));
