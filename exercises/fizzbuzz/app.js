function fizzBuzz(n) {
	newStr = "";
	for (var i = 1; i <= n; i++) {
		var str = "";
		if (i % 3 === 0) {
			str = "fizz";
		} 
		if (i % 5 === 0) {
			str += "buzz";
		}
		if (str === "") {
			str = i.toString();
		}
		newStr += str + "\n";
	}
	return newStr.slice(0, newStr.length - 1);
}

console.log(fizzBuzz(100));