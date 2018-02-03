function antiCaps(str) {
	var newStr = "";
	for (var i = 0; i < str.length; i++) {
		var charCode = str.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			newStr += String.fromCharCode(charCode + 32);
		} else if (charCode >= 97 && charCode <= 122) {
			newStr += String.fromCharCode(charCode - 32);
		} else {
			newStr += str[i];
		}
	}
	return newStr;
}

console.log(antiCaps('Hello')) // hELLO  
console.log(antiCaps('racEcar')) // RACeCAR  
console.log(antiCaps('bAnAnA')) // BaNaNa