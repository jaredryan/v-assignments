// 1.
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var numOfComputers = 0;
for (var i = 0; i < officeItems.length; i++) {
	if (officeItems[i] === "computer") {
		numOfComputers++;
	}
}
console.log(numOfComputers);

// 2.
var peopleWhoWantToSeeMadMaxFuryRoad = [  
  {
    name: "Mike",
    age: 12
  },{
    name: "Madeline",
    age: 80
  },{
    name: "Cheryl",
    age: 22
  },{
    name: "Sam",
    age: 30
  },{
    name: "Suzy",
    age: 4
  }
];
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
	var person = peopleWhoWantToSeeMadMaxFuryRoad[i];
	person.age >= 18 ? console.log(person.name + " is old enough to see Mad Max. Let this person in.") : console.log(person.name + " is not old enough to see Mad Max.");
}

// Bonus
var light = "off";
function togglesPerArray(toggleArray) {
	var total = 0;
	for (var i = 0; i < toggleArray.length; i++) {
		total += toggleArray[i];
	}
	if (total % 2 === 1) {
		return true;
	} return false;
}

function toggle(light, switchLight) {
	if (switchLight) {
		if (light === "off") {
			return "on";
		} return "off";
	} return light;
}

light = toggle(light, togglesPerArray([2, 5, 435, 4, 3]));
console.log(light);
light = toggle(light, togglesPerArray([1, 1, 1, 1, 3]));
console.log(light);
light = toggle(light, togglesPerArray([9, 3, 4, 2]));
console.log(light);