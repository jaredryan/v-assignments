var phrase = 'slimy smelly solution';

function printLetterFrequency(string) {
	// Produce string with no duplicates and a dictionary of character frequencies
	newStr = ""
	var dictionary = {};
	for (var i = 0; i < string.length; i++) {
		var curChar = string[i];
		if (dictionary[curChar] === undefined) {
			dictionary[curChar] = 1;
			newStr += curChar;
		} else {
			dictionary[curChar]++;
		}
	}

	

	// Sort dictionary into an array
	if (dictionary !== {}) {
		maxChar = "";
		max = 0;
		orderedChars = [];
		for (var character in dictionary) {
			var freq = dictionary[character];
			if (orderedChars.length === 0) {
				orderedChars.push([character, freq]);
			} else {
				var inserted = false;
				for (var i = 0; i < orderedChars.length; i++) {
					var charFreq = orderedChars[i][1];
					if (freq > charFreq || (freq === charFreq && character < orderedChars[i][0])) {
						orderedChars.splice(i, 0, [character, freq]);
						inserted = true;
						break;
					}
				}
				if (inserted === false) {
					orderedChars.push([character, freq]);
				}
			}
		}
	}

	// Format Frequency String
	for (var i = 0; i < orderedChars.length; i++) {
		orderedChars[i] = "\"" + orderedChars[i][0] + "\": " + orderedChars[i][1];
	}
	// Print Frequency String and return newStr with no duplicated
	console.log(orderedChars.join("\n"));
	return newStr;
}


console.log(printLetterFrequency(phrase));
