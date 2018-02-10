function dictionary(object, word, definition) {
	// Solves the case problem, but some proper nouns, for example, will be
	// incorrect. That's the trade-off.
	word = word.toLowerCase();
	var isDefined = object[word];
	// Insert into dictionary if not defined yet or return current definition
	if (!isDefined) {
		object[word] = definition;
	}
	return word + ": " + object[word];
}