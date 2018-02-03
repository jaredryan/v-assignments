// Setup
var readlineSync = require("readline-sync");
var time = 3;
var options = ["Put your hand in the hole.", "Look for a key to the door.", "Open the door."];
var consequences = [
	"\nYou feel around, finding nothing. Suddenly, you feel something pull your hand. The force is so strong that it pulls you straight through the wall, breaking it down in the process. And then everything goes black. When you open your eyes, you see a man. He says, " + '"Hello. Welcome to the underworld."\n' + "This is your reward for your choice. I hope you enjoy it.", 
	[
		"\nYou search for the key. You search under the bed and find nothing. However, as you got up, you noticed the wood board below you was squeaky. You pull up the board and see something shining. You grab it; it's the key!",
		"\nYou look for another key. Unfortunately, you aren't successful"
	],
	[
		"\nYou use the key on the door. It's a perfect fit! You sprint out the building; it collapses just after you leave. Congratulations, you have survived!",
		[
			"\nYou use the key on the door. It's a perfect fit! You sprint out the building; it collapses just ",
			" minutes after you leave. Congratulations, you have survived!"
		],
		"\nYou try using the door. It's locked, so you can't get through. You try forcing it open, but it won't budge."
	]
]

var introString = "\nYou open your eyes. You're in a room, alone. As you slowly wake up, you notice a small hole in the room, and a door. You hear a voice, " + '"This room is in a condemned building. It will be torn down in 3 minutes. If you wish to live, you must escape." ' + "You are terrified; after taking a moment, you decide to take action.";
var choice = "What do you do? You have 3 minutes remaining.";
var indexOfMinute = 25;
var keyFound;

// Intro
console.log(introString);

// Begin
while (time > 0) {
	var index = readlineSync.keyInSelect(options, choice);
	time--;
	choice = choice.slice(0, 25) + time + choice.slice(26);
	switch(index) {
		case 0:
			console.log(consequences[index]);
			return;
		case 1:
			if (keyFound === undefined) {
				console.log(consequences[index][0]);
				keyFound = true;
			} else {
				console.log(consequences[index][1]);
			}
			break;
		case 2:
			if (keyFound) {
				if (time === 0) {
					console.log(consequences[index][0]);
				} else {
					console.log(consequences[index][1][0] + time + consequences[index][1][1]);
				}
				return;
			} else {
				console.log(consequences[index][2]);
				break;
			}
		default: 
			return;
	}
}
console.log("\nYou hear a faint humming. The humming quickly turns into a buzzing sound. Another second later, it turns into a roar, piercing your head. CRASH!!! Everything goes black. You were never seen again.");
