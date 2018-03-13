const disemvoweler = str => {
	const strVowels = {str: "", vowels: ""}
	for (let i = 0; i < str.length; i++) {
		if (str[i].match(/[aeiouAEIOU]/) !== null) {
			strVowels.vowels += str[i];
		} else if (str[i] !== " ") {
			strVowels.str += str[i];
		}
	}
	return strVowels

	return str.split("").reduce((total, letter) => {
		if (letter.match(/[aeiouAEIOU]/) !== null) {
			total.vowels += letter;
		} else if (letter !== " ") {
			total.str += letter;
		}
		return total
	}, {str: "", vowels: ""});
}

console.log(disemvoweler("Pickle Rick!"));