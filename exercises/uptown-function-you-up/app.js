var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function printArray(array) {
	console.log(array.join(" "));
}

function printBackwardsArray(array) {
	console.log(array.reverse().join(" "));
}

function printEveryOtherArray(array) {
	newStr = "";
	for (var i = 0; i < array.length; i += 2) {
		newStr += (array[i] + " ");
	}
	console.log(newStr.slice(0, newStr.length - 1));
}

function printReverseEveryTwoWords(array) {
	newStr = "";
	if (array.length === 0) {
		return array;
	} else if (array.length === 1) {
		console.log(array[i]);
		return;
	}

	for (var i = 0; i < array.length; i += 2) {
		var secondEntry = array[i + 1];
		if (secondEntry === undefined) {
			newStr += (array[i] + " ");
		} else {
			newStr += (array[i + 1] + " " + array[i] + " ");
		}
	}
	console.log(newStr.slice(0, newStr.length - 1));
}

printArray(lyrics);
printBackwardsArray(lyrics);
printEveryOtherArray(lyrics);
printReverseEveryTwoWords(lyrics);