function noDuplicates(originalString) {
	var withoutDuplicated = "";
	var duplicates = "";
	for (var i = 0; i < originalString.length; i++) {
		var char = originalString[i];
		withoutDuplicated.includes(char) ? duplicates += char : withoutDuplicated += char;
	}
	console.log(withoutDuplicated);
	console.log(duplicates);
}

noDuplicates("bookkeeper larry");
noDuplicates("Home Alone, the movie");