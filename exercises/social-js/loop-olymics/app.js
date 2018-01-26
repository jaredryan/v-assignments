// Preliminaries
// 1.
for (var i = 0; i < 10; i++) {
	console.log(i);
}
// 2.
for (var i = 9; i >= 0; i--) {
	console.log(i);
}
// 3.
var fruit = ["banana", "orange", "apple", "kiwi"];
for (var i = 0; i < fruit.length; i++) {
	console.log(fruit[i]);
}

// Bronze
// 1.
var numZeroThroughNine = [];
for (var i = 0; i < 10; i++) {
	numZeroThroughNine.push(i);
}
console.log(numZeroThroughNine);
// 2.
for (var i = 0; i <= 100; i += 2) {
	console.log(i);
}
// 3.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (var i = 0; i < fruit.length; i += 2) {
	console.log(fruit[i]);
}

// Silver
// 1.
var peopleArray = [  
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];
for (var i = 0; i < peopleArray.length; i++) {
	console.log(peopleArray[i].name);
}
// 2.
var names = [];
var occupations = [];
for (var i = 0; i < peopleArray.length; i++) {
	names.push(peopleArray[i].name);
	occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);
// 3.
var names = [];
var occupations = [];
for (var i = 0; i < peopleArray.length; i += 2) {
	names.push(peopleArray[i].name);
	if (i + 1 < peopleArray.length) {
		occupations.push(peopleArray[i + 1].occupation);
	}	
}
console.log(names);
console.log(occupations);

// Gold
// 1.
var initArray = [];
for (i = 0; i < 3; i++) {
	var arrayToAdd = [];
	for (j = 0; j < 3; j++) {
		arrayToAdd.push(0);
	}
	initArray.push(arrayToAdd);
}
console.log(initArray);
// 2.
var initArray = [];
for (i = 0; i < 3; i++) {
	var arrayToAdd = [];
	for (j = 0; j < 3; j++) {
		arrayToAdd.push(i);
	}
	initArray.push(arrayToAdd);
}
console.log(initArray);
// 3.
var initArray = [];
for (i = 0; i < 3; i++) {
	var arrayToAdd = [];
	for (j = 0; j < 3; j++) {
		arrayToAdd.push(j);
	}
	initArray.push(arrayToAdd);
}
console.log(initArray);
// 4.
var initArray = [[ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ]];
for (i = 0; i < initArray.length; i++) {
	for (j = 0; j < initArray[0].length; j++) {
		initArray[i][j] = "X";
	}
}
console.log(initArray);