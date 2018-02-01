function randomPasswordGenerator(length) {
	newStr = "";
	for (var i = 0; i < length; i++) {
		newStr += returnRandomCharacter();
	}
	return newStr;
}

function returnRandomCharacter() {
	return String.fromCharCode(Math.floor((Math.random() * 95) + 32));
}

console.log(randomPasswordGenerator(4));
console.log(randomPasswordGenerator(8));
console.log(randomPasswordGenerator(12));
