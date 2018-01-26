// Preliminaries
// 1.
if (5 > 3) {
	console.log("is greater than");
}
// 2.
if ("cat".length === 3) {
	console.log("is the length");
}
// 3.
"cat" === "dog" ? console.log("is the same") : console.log("not the same")

// Bronze
// 1.
var person = {
	name: "Bobby",
	age: 12
}
person.age >= 18 ? console.log(person.name + " is allowed to go to the movie") : console.log(person.name + " is not allowed to go to the movie");
// 2.
(person.name && person.name[0]) === "B" ? console.log(person.name + " is allowed to go to the movie") : console.log(person.name + " is not allowed to go to the movie");
// 3.
((person.name && person.name[0]) === "B") && (person.age >= 18) ? console.log(person.name + " is allowed to go to the movie") : console.log(person.name + " is not allowed to go to the movie");

// Silver
// 1.
var i = 1;
if (i === 1) {
	console.log("strict");
} else if (i == 1) {
	console.log("loose or abstract");
} else {
	console.log("not equal at all");
}
// 2.
if (((1 <= 2) || (2 === 4)) || ((3 * 4 > 10) && (5 + 10 > 10))) {
	console.log("yes");
}

// Gold
// 1.
typeof "dog" === "string" ? true : false;
// 2.
typeof "true" === "boolean" ? true : false;
// 3.
typeof variableName === "undefined" ? true : false;
// 4.
3 < "a" ? true : false;
// 5.
var myNum = 2;
myNum % 2 === 0 ? console.log("even") : console.log("odd");










