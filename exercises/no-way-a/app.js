var removeA = function(str) {
	newStr = "";
	var character;
	for (var i = 0; i < str.length; i++) {
		character = str.charAt(i);
		if (character !== "a" && character !== "A") {
			newStr += character;
		}
	}
	return newStr;
};

var myStr = "AaajjjjiohajfjA";
console.log(myStr);
console.log(removeA(myStr));
