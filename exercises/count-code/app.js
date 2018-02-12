// Brute force, pretty efficient
function countCode(str) {
	var count = 0;
	lowerCaseStr = str.toLowerCase();
	for (var i = 0; i < lowerCaseStr.length - 3; i++) {
		if (lowerCaseStr[i] === "c" && lowerCaseStr[i + 1] === "o" && lowerCaseStr[i + 3] === "e") {
			count++;
			i += 3;
		}
	}
	return count;
}

// Reduce, not as efficient, slightly simpler code
function reduceCountCode(str) {
	return str.split("").reduce(function(total, element, i, arr) {
		if (element === "c" && arr[i + 1] === "o" && arr[i + 3] === "e") {
			total++;
		}
		return total;
	}, 0);	
}

console.log(countCode("aaacodebbb"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));
console.log("");
console.log(reduceCountCode("aaacodebbb"));
console.log(reduceCountCode("codexxcode"));
console.log(reduceCountCode("cozexxcope"));
