function add(num1, num2) {
	return num1 + num2;
}

var maxOf3 = function(num1, num2, num3) {
	return Math.max(num1, num2, num3);
};

function evenOrOdd(num) {
	return num % 2 === 0 ? "even" : "odd";
}

var doubleOrHalf = function(str) {
	return str.length <= 20 ? str + str : str.slice(0, Math.floor(str.length / 2));
}

function fib(num) {
	console.log(0)
	if (num === 0) {
		return 0;
	}

	console.log(1)
	if (num === 1) {
		return 1;
	}

	var first = 0;
	var second = 1;
	for (i = 1; i < num; i++) {
		var result = first + second;
		console.log(result);
		var first = second;
		var second = result;
	}
	return result;
}

var quadratic = function(a, b, c) {
	var radical = Math.pow(b * b - 4 * a * c, 0.5);
	var divisor = 2 * a;
	return [(-b + radical) / divisor, (-b - radical) / divisor];
}

function mostFrequentChar(str) {
	if (typeof str !== "string") {
		throw new Error("Silly human, this function is for strings.")
	}
	var dictionary = {};
	for (var i = 0; i < str.length; i++) {
		dictionary[str[i]] === undefined ? dictionary[str[i]] = 1 : dictionary[str[i]] += 1;
	}
	console.log(dictionary);

	var maxNum = 0;
	var maxChar = ""
	for (var key in dictionary) {
		var value = dictionary[key]
		if (value > maxNum) {
			maxNum = value;
			maxChar = key;
		} else if (value == maxNum) {
			if (key < maxChar) {
				maxNum = value;
				maxChar = key;
			}
		}
	}
	return maxChar;
}

// Testing
console.log(add(1, 10));

console.log(maxOf3(3, 7, -2));

console.log(evenOrOdd(1));
console.log(evenOrOdd(2));

console.log(doubleOrHalf("this is a very long string, I hope"));
console.log(doubleOrHalf("short string"));

console.log(fib(5));

console.log(quadratic(1, 4, 4));

console.log(mostFrequentChar("abcded"));
console.log(mostFrequentChar(1));

