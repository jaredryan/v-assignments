// Initialization

// Require Statements
var readlineSync = require("readline-sync");
var sleep = require("sleep");

/********** Set Player, Enemies, Items, and other useful information **********/

// PLAYER
var player = {
	name: "Unknown",
	hp: 10,
	maxHP: 10,
	attackPower: [0,1], // [min, max]
	weapon: 0,
	inventory: [],
	maxInventory: 10,
	addItem: function(item) {
		console.log("You found a " + item.name + ".");
		this.inventory.push(item);
		if (this.inventory.length === this.maxInventory) {
			// Creates a display of the current items in the directory for the prompt
			console.log("Inventory:\n" + returnItemsString(player));
			var itemOptions = [];
			for (var i = 0; i < this.inventory.length; i++) {
				itemOptions.push(this.inventory[i].name);
			}
			// Loop to make sure the user selects a non-cancel button
			var index = readlineSync.keyInSelect(itemOptions, "Which item would you like to discard?");
			while (index === -1) {
				console.log("Please select one of the other options.");
				index = readlineSync.keyInSelect(itemOptions, "Which item would you like to discard?");
				continue;

			}
			// Loop that will double check that the user wants to remove an item before removing it.
			var isNotCertain = true;
			while (isNotCertain) {
				var choice = readlineSync.keyInSelect(["Yes", "No"], "Are you sure you want to discard the " + itemOptions[index] + "?");
				if (choice === 0) {
					this.inventory.splice(index, 1, item);
					isNotCertain = false;
				} else if (choice === 1) {
					index = readlineSync.keyInSelect(itemOptions, "Which item would you like to discard?");
				} else {
					console.log('Please select "Yes" or "No".');
				}
			}
		}
	},
	removeItem: function(item) {
		this.inventory.pop(item);
	},
	attack: function(enemy) {
		console.log("\nYou attack!");
		var damage = Math.floor(Math.random() * (this.attackPower[1] - this.attackPower[0] + 1)) + this.attackPower[0] + this.weapon;
		enemy.hp -= damage;
		console.log(enemy.name + " took " + damage + " damage!");	
	},
};

function equipWeapon(player, weapon) {
	if (weapon.power > player.weapon) {
		console.log("You equipped the " + weapon.name + ".")
		player.weapon = weapon.power;
	}
}

// ENEMIES
function Enemy(name, hp, attackPower, reward) {
    this.name = name;
    this.hp = hp;
    this.attackPower = attackPower; // a range: [min, max]
    this.attack = function(player) {
    	console.log(this.name + " attacks!");
    	var damage = Math.floor(Math.random() * (this.attackPower[1] - this.attackPower[0] + 1)) + this.attackPower[0];
		player.hp -= damage;
		console.log("You took " + damage + " damage!");	
	};
	this.reward = function(player) {
		console.log(player.name + " defeated the " + this.name + "!");
		reward(player);
	}
}

// List of normal enemies
var hoodedFigure = ["Hooded Figure", 5, [1, 1], function(player) {
	console.log("You recovered 1 HP.");
	recoverHP(player, 1)
	player.addItem(new Item(firstAidInfo[0], firstAidInfo[1], firstAidInfo[2], firstAidInfo[3]));
}];
var feralDog = ["Feral Dog", 3, [1, 2], function(player) {
	console.log("You recovered 1 HP.");
	recoverHP(player, 1)
	player.addItem(new Item(throwingKnife[0], throwingKnife[1], throwingKnife[2], throwingKnife[3]));
}];

var rat = ["Rat", 2, [1, 1], function(player) {
	console.log("You recovered 0 HP.");
	player.addItem(new Item(ratSteroid[0], ratSteroid[1], ratSteroid[2], ratSteroid[3]));
}];

var bunny = ["Bunny", 5, [1, 1], function(player) {
	console.log("You recovered 1 HP.");
	player.addItem(new Item(firstAidInfo[0], firstAidInfo[1], firstAidInfo[2], firstAidInfo[3]));
}];

// Collection of standard enemies
var enemies = [hoodedFigure, feralDog, rat, bunny];

// List of special enemies
var finalBoss = ["Final Boss", 10, [2, 2], function(player) {
	console.log(player.name + " found true joy.");
	player.addItem(new Item(joy[0], joy[1], joy[2]));
}];

// ITEMS
function Item(name, description, isUseableInField, effect) {
    this.name = name;
    this.description = description;
    this.isUseableInField = isUseableInField;
    this.use = function(player, enemy) {
    	console.log("You used the " + this.name + "!");
    	effect(player, enemy);
    };
}

// List of possible items
var firstAidInfo = ["First Aid Kit", "Use this to recover 5 damage.", true, function(player, enemy) {
	recoverHP(player, 5);
}];

var throwingKnife = ["Throwing Knife", "Use this to hurt the enemy 3 damage.", false, function(player, enemy) {
	enemy.hp -= 3;
}];

var ratSteroid = ["Rat Steroids", "This hurts you 2 but allows you to hurt the enemy an additional 4 points to your normal attack.", false, function(player, enemy) {
	player.attack(enemy);
	enemy.hp -= 4;
}];

var key = ["Key", "Opens secret passages", false, function(){}];

var joy = ["Joy", "Grants you eternal bliss", false, function(player, enemy) {
	console.log("The enemy feels defeated because you are so alone because you are so happy.");
	enemy.hp = 0;
}];

// Weapons, a subclass of item
function Weapon(name, power) {
    this.name = name;
    this.power = power;
}

var knife = new Weapon("Knife", 1);

/****************** Important information that are essential to the game ********************/

var fightOptions = ["Fight", "Run", "Use Item", "Check Status"];
var forcedFightOptions = ["Fight", "Use Item", "Check Status"];
var fleeAttemptMessage = "\nYou tried to run away!";
var fleeSuccessMessage = "You successfully ran away!";
var fleeFailureMessage = "You were unable to escape!";
var endGameMessage = "\"Everything is going dark...\"\nYou were never seen again.";

/******************** Important functions that are essential to the game **********************/

/* Format of decisions: pass in an array of strings for the options, an array of
   functions for the consequences, an array of arguments for each consequence, an array corresponding to
   whether an event is removable, and then with replaceable events. */

function decisionLoop(area) {
	var isRunning = true;
	area.story(); // run story dialogue and events for the first time entering the area
	while (isRunning) {

		options = [];
		for (var i = 0; i < area.events.length; i++) {
			options.push(area.events[i].option);
		}

		var index = readlineSync.keyInSelect(options, "What do you want to do?");
		if (index === -1) {
			cancelExecution();
			console.log("Please select one of the other options.");
			continue;
		}

		var event = area.events[index];
		isRunning = event.consequence(event.arguments);

		// Replace events that no longer have any purpose and that build on each other
		if (event.removable === "switch") {
			area.events.splice(index, 1, event.nextEvent);
		} else if (event.removable) {   // Remove events that serve no further purpose
			area.events.splice(index, 1);
		}
		// console.log(index);
		// console.log(options);
		// console.log(argumentsArray);
		// console.log(removable);
		// console.log(newEvents);
	}

	// Remove dialogue if you return to the area
	area.story = function(){};
	// Produce string array for where to go next.
	var newAreas = [];
	var areaIndex;
	for (var i = 0; i < area.connectedAreas.length; i++) {
		areaIndex = area.connectedAreas[i];
		newAreas.push(areas[areaIndex].name);
	}
	// Check if you can leave the area.
	if (newAreas.length === 0) {
		console.log("But, you cannot leave the area.");
		return decisionLoop(area);
	}
	// Return index of next area, or return the same area if canceled.
	var newIndex = readlineSync.keyInSelect(newAreas, "Where do you want to go?");
	if (newIndex === -1) {
		console.log("You decided to stay in the area.");
		return decisionLoop(area);
	}
	return newIndex;
}

/* COMMON CONSEQUENCES(ARGUMENTS) OF YOUR CHOICES:
	1. explore(player)
	2. encounter([enemy, player])
	3. checkStatus(player)
	4. goToNextDecision(message)
	5. displayMessage(message)
	6. getItem([player, item, message])
	7. getWeapon([player, weapon, message])
	8. loseItem([player, item, message])
*/

// Explore something. Leads to new decision tree.
function explore(player) {
	if (!walk(player)) {
		console.log(endGameMessage);
		throw new Error("Game terminated.\n");
	} else {
		return false;
	}
}

// Fight something. Leads to new decision tree. EnemyPlayer is an array: [enemy, player]
function encounter(enemyPlayer) {
	if (!fight(enemyPlayer[0], enemyPlayer[1])) {
		console.log(endGameMessage);
		throw new Error("Game terminated.\n");
	} else {
		return false;
	}
}

// Checks status in the tree. Stay in the area.
function checkStatus(player) {
	printStatus(player);
	return true;
}

// Opens menu to unlocked connected areas.
function leaveTheArea() {
	console.log("You decide to leave the area.");
	return false;
}

// Gather info in the area. Stay in the area.
function displayMessage(message) {
	console.log(message);
	return true;
}

// Leads to new decision tree.
function unlockArea(messageCurrentAreaIndexNewAreaIndex) {
	var info = messageCurrentAreaIndexNewAreaIndex;
	console.log(info[0]);
	areas[info[1]].connectedAreas.push(info[2])
	console.log("The " + areas[info[2]].name + " is now available.");
	return true;
}

// Lose an item
function loseItem(playerItemMessage) {
	console.log(playerItemMessage[2]);
	var item = playerItemMessage[1];
	playerItemMessage[0].removeItem(item);
	return true;
}

// Use an item to unlock an area.
function loseItemAndUnlockArea(playerItemMessageCurAreaIndexNewAreaIndex) {
	var info = playerItemMessageCurAreaIndexNewAreaIndex;
	console.log(info[2]);
	var item = info[1];
	info[0].removeItem(item);
	areas[info[3]].connectedAreas.push(info[4])
	console.log("The " + areas[info[4]].name + " is now available.");
	return true;
}

// Obtain an item in the area. Stay in the area. PlayerItem is an array: [player, item, message]
function getItem(playerItemMessage) {
	console.log(playerItemMessage[2]);
	var item = playerItemMessage[1];
	new Item(item[0], item[1], item[2], item[3])
	playerItemMessage[0].addItem(new Item(item[0], item[1], item[2], item[3]));
	return true;
}

function getWeapon(playerWeaponMessage) {
	console.log(playerWeaponMessage[2]);
	equipWeapon(playerWeaponMessage[0], playerWeaponMessage[1]);
	return true;
}

function useItemInField(player) {
	var itemChoice = selectItem(player);
	if (itemChoice === "Empty" || itemChoice === -1) {
		return true;
	}
	var item = player.inventory[itemChoice];
	if (item === undefined || !isUseable(true, item)) {
		console.log("You examine the " + item.name + " and put it back into your inventory.")
		return true;
	}
	item.use(player);
	player.inventory.splice(itemChoice, 1);
	return true;
}

// EVENT CONSTRUCTOR
function Event(option, consequence, argumentsArray, removable, nextEvent) {
	this.option = option;
	this.consequence = consequence;
	this.arguments = argumentsArray;
	this.removable = removable;
	this.nextEvent = nextEvent;
}

// Default Events Available for All Areas
var checkCurrentStatus = new Event("Check your current status", 
								   checkStatus, 
								   player, 
								   false, 
								   {}
								  );
var useItemInField = new Event("Use an item", 
							   useItemInField, 
							   player, 
							   false, 
					   		   {}
							  );

var leaveArea = new Event("Leave the area", 
						  leaveTheArea, 
						  "", 
						  false, 
					   	  {}
					     );

// AREA CONSTRUCTOR
function Area(name, connectedAreas, number, story) {
	this.name = name;
	this.events = [leaveArea, checkCurrentStatus, useItemInField];
	this.connectedAreas = connectedAreas;
	this.story = story;
	this.number = number;
}

/**************************** End of Common Decision Functions *******************************/

// Returns true if the player makes it to the destination, false if he or she died
function walk(player) {
	if (Math.random() < 0.25) {
		return fight(returnRandomIndex(), player); 
	}
	return true;
}

// Returns true if the player is still alive, false if he or she died.
function fight(enemyInfo, player) {
	enemy = new Enemy(enemyInfo[0], enemyInfo[1], enemyInfo[2], enemyInfo[3]);
	console.log("You encountered a " + enemy.name + "!");
	while (true) {
		// Player's turn
		var fightChoice = readlineSync.keyInSelect(fightOptions, "Your turn: ");
		switch(fightChoice) {
			case 0: // attack
				player.attack(enemy);
				break;
			case 1: // run
				if (fleeAttempt()) {
					return true;
				}
				break;
			case 2: // use item
				if (!selectAndUseItem(player, enemy)) {
					continue;
				} else {
					break;
				}
			case 3: 
				printStatus(player);
				continue;
			default:
				cancelExecution();
				continue;
		}

		// Enemy's turn
		if (enemy.hp > 0) {
			enemy.attack(player);
			if (player.hp <= 0) {
				return false;
			}
		} else {
			enemy.reward(player);
			return true;
		}
	}
}

// Story fight where escape is not an option
function forcedFight(enemyInfo, player) {
	enemy = new Enemy(enemyInfo[0], enemyInfo[1], enemyInfo[2], enemyInfo[3]);
	console.log("You encountered a " + enemy.name + "!");
	while (true) {
		// Player's turn
		var fightChoice = readlineSync.keyInSelect(forcedFightOptions, "Your turn: ");
		switch(fightChoice) {
			case 0: // attack
				player.attack(enemy);
				break;
			case 1: // use item
				if (!selectAndUseItem(player, enemy)) {
					continue;
				} else {
					break;
				}
			case 2: 
				printStatus(player);
				continue;
			default:
				cancelExecution();
				continue;
		}

		// Enemy's turn
		if (enemy.hp > 0) {
			enemy.attack(player);
			if (player.hp <= 0) {
				return false;
			}
		} else {
			enemy.reward(player);
			return true;
		}
	}
}

/* Displays all of the player's current items and prompts the user to choose one.
   It returns "Empty" if he or she does not have any items. */
function selectItem(player, enemy) {
	// Display items
	console.log("Inventory:\n" + returnItemsString(player));
	var itemOptions = [];
	if (player.inventory.length === 0) {
		return "Empty";
	} 
	for (var i = 0; i < player.inventory.length; i++) {
		itemOptions.push(player.inventory[i].name);
	}
	// Present a choice
	return readlineSync.keyInSelect(itemOptions, "Which item would you like to use?");
}

// Allows the user to use the item
function useItem(player, enemy, itemChoice) {
	var item = player.inventory[itemChoice];
	if (item === undefined) {
		return false;
	}
	item.use(player, enemy);
	player.inventory.splice(itemChoice, 1);
	return true;
}

// Prompts the user for an item to use. Returns false if it was unsuccessful
function selectAndUseItem(player, enemy) {
	var itemChoice = selectItem(player, enemy);
	if (itemChoice === "Empty") {
		return false;
	}
	return useItem(player, enemy, itemChoice);
}

// Returns a string consisting of the player's current items
function returnItemsString(player) {
	items = "";
	if (player.inventory.length === 0) {
		return items = "Empty";
	} else {
		for (var i = 0; i < player.inventory.length; i++) {
			items += player.inventory[i].name + ": " + player.inventory[i].description + "\n";
		}
		return items = items.slice(0, items.length - 1);
	}
}

// Checks if the item is usable under the current circumstances
function isUseable(inField, item) {
	return !inField || item.isUseableInField;
}

// Returns true if the attempt is successful, false otherwise.
function fleeAttempt() {
	console.log(fleeAttemptMessage);
	if (Math.random() < 0.5) {
		console.log(fleeSuccessMessage);
		return true;
	} else {
		console.log(fleeFailureMessage);
		return false;
	}
}

// Prints current status of the player
function printStatus(player) {
	console.log("Name: " + player.name);
	console.log("HP: " + player.hp);
	console.log("Inventory:\n" + returnItemsString(player));
}

/* Picks a random enemy from the current possibilities and returns a newly constructed
   version of that enemy. */
function returnRandomIndex() {
	return enemies[Math.floor(Math.random() * enemies.length)];
}

// Allow the user to quit if they hit the cancel key
function cancelExecution() {
	choice = "undecided";
	while (choice !== 1) {
		var choice = readlineSync.keyInSelect(["Yes", "No"], "Game paused. Are you sure you want to quit?");
		if (choice === 0) {
			throw new Error("Game terminated at the user's request.\n");
		} else if (choice === 1) {
			console.log("Game resumed.");
			return;
		} else {
			console.log('Please select "Yes" or "No".');
		}
	}
}

function recoverHP(object, number) {
	object.hp += number;
	if (object.hp > object.maxHP) {
		object.hp = object.maxHP;
	}
}

/************************************* Area List *******************************************/

/************************************* Area0 *******************************************/

var area0 = new Area("SW Room", [], 0, function() {
		// // Dialogue Start
		// console.log('"....ughhh"');
		// sleep.msleep(1000);
		// console.log('"...what happened?"\n');
		// sleep.msleep(1000);
		// console.log('As you wake up and look around, a name comes to mind...');
		// sleep.msleep(1000);
		// console.log('"I must have hit my head. Can"' + "'t believe I almost forgot. It's...\"\n");
		// sleep.msleep(1000);
		// // Dialogue End

		// // Name established
		// player.name = readlineSync.question("Please enter your name: ");

		// // Dialogue Start
		// console.log("\n\"...I'm " + player.name + '. My head hurts. I wonder if I actually forgot anything.');
		// sleep.msleep(1300);
		// console.log("Like...for example, where I'm at. What is this place?\"\n");
		// sleep.msleep(1300);
		// console.log("As you look around, you notice that you are in a simple room. The walls");
		// sleep.msleep(1300);
		// console.log("are a dull grey; the bed you are on is simple: wood, white sheets, and white");
		// sleep.msleep(1500);
		// console.log("blankets. There's a nightstand by the bed. You don't sense any danger, but");
		// sleep.msleep(1500);
		// console.log("you don't quite feel comfortable either.");
		// sleep.msleep(800);
		// // Dialogue End
	}
);

/*********************************** End Area ******************************************/

/************************************* Area1 *******************************************/

var area1 = new Area("W Room", [0], 1, function() {
		// console.log("As you walk down the hallway, you notice a bunny. It looks so cute.");
		// sleep.msleep(1500);
		// console.log("You take a closer look and it turns around and looks at you.");
		// sleep.msleep(1500);
		// console.log('"Hi, how are you feeling? We found you the other day."');
		// sleep.msleep(1500);
		// console.log('...!!!!!');
		// sleep.msleep(1000);
		// console.log("\"What's wrong? Ain't you ever seen a talking bunny before?\"");
		// sleep.msleep(1500);
		
		// var index = readlineSync.keyInSelect(["Yes", "No", "Where am I?"], "\"Anyways, are you feeling better?\"");

		// if (index === 0) {
		// 	console.log("\"That's great! Let me lead you back to your room so you can finish your recovery.\"");
		// 	sleep.msleep(1500);
		// } else if (index === 1) {
		// 	console.log("\"Uh oh! Let me lead you back to your room so you can finish your recovery.\"");
		// 	sleep.msleep(1500);
		// } else {
		// 	console.log("\"Uh no, you must have hit your head. Let me lead you back to your room.\"");
		// 	sleep.msleep(1500);
		// }

		// console.log("\"...\"");
		// sleep.msleep(1000);
		// console.log("\"What's with the suspicious look?\"");
		// sleep.msleep(2000);
		// console.log("\"Fine, I'll take you back by force!\"");
		// sleep.msleep(1000);

		// if (forcedFight(bunny, player)) {
		// 	console.log("\"That bunny talked! And it attacked me! Where the heck am I?\"");
		// 	sleep.msleep(2000);
		// }
	}
);

/************************************ End Area *****************************************/

/************************************* Area1 *******************************************/

var area2 = new Area("Lab", [1], 2, function() {
		// console.log("As you walk down the hallway, you notice a bunny. It looks so cute.");
		// sleep.msleep(1500);
		// console.log("You take a closer look and it turns around and looks at you.");
		// sleep.msleep(1500);
		// console.log('"Hi, how are you feeling? We found you the other day."');
		// sleep.msleep(1500);
		// console.log('...!!!!!');
		// sleep.msleep(1000);
		// console.log("\"What's wrong? Ain't you ever seen a talking bunny before?\"");
		// sleep.msleep(1500);
		
		// var index = readlineSync.keyInSelect(["Yes", "No", "Where am I?"], "\"Anyways, are you feeling better?\"");

		// if (index === 0) {
		// 	console.log("\"That's great! Let me lead you back to your room so you can finish your recovery.\"");
		// 	sleep.msleep(1500);
		// } else if (index === 1) {
		// 	console.log("\"Uh oh! Let me lead you back to your room so you can finish your recovery.\"");
		// 	sleep.msleep(1500);
		// } else {
		// 	console.log("\"Uh no, you must have hit your head. Let me lead you back to your room.\"");
		// 	sleep.msleep(1500);
		// }

		// console.log("\"...\"");
		// sleep.msleep(1000);
		// console.log("\"What's with the suspicious look?\"");
		// sleep.msleep(2000);
		// console.log("\"Fine, I'll take you back by force!\"");
		// sleep.msleep(1000);

		// if (forcedFight(bunny, player)) {
		// 	console.log("\"That bunny talked! And it attacked me! Where the heck am I?\"");
		// 	sleep.msleep(2000);
		// }
	}
);

/************************************ End Area *****************************************/

/*********************************** End Areas *****************************************/

/*********************************** Area Array ****************************************/

var areas = [area0, area1, area2];

/******************************* Universal Event Options *************************************/

// var checkCurrentStatus = new Event("Check your current status", 
// 								   checkStatus, 
// 								   player, 
// 								   false, 
// 								   {}
// 								  );
// var useItemInField = new Event("Use an item", 
// 							   useItemInField, 
// 							   player, 
// 							   false, 
// 					   		   {}
// 							  );

// var leaveArea = new Event("Leave the area", 
// 							   leaveTheArea, 
// 							   "", 
// 							   false, 
// 					   		   {}
// 							  );

/************************************* Event List *******************************************/

/************************************* Area0 *******************************************/

var checkCupboard0 = new Event("Examine the cupboard",
							  getWeapon,
							  [player, knife, "You searched the cupboard and found a knife."],
							  true, 
							  {}
							 );
var checkDoor0 = new Event("Examine the door", 
						  displayMessage, 
						  "You check the door and notice it is locked. It seems sturdy, but you notice a keyhole.", 
						  true, 
						  {}
						 );
var checkRoom0 = new Event("Examine the room",
						  getItem, 
						  [player, key, "As you examined the bed, you saw something shining and decided to examine it closer."], 
						  "switch", 
						  new Event("Open the door",
				  					loseItemAndUnlockArea,
				  					[player, key, "You used the key to open the door.", 0, 1],
				  					true,
				  					{}
								   ),
						 );

/************************************ End Area *****************************************/

area0.events.push(checkCupboard0, checkDoor0, checkRoom0);

/************************************* Area1 *******************************************/

var checkRoom1 = new Event("Examine the room",
						   displayMessage,
						   "You look around the room. You see a door and a hallway. There is a poster on the wall that looks like a...bunny army soluting a bunny dictator. Cute but disturbing.",
						   true, 
						   {}
						  );
var checkDoor1 = new Event("Examine the door", 
						   unlockArea, 
						   ["You check the door and see that it is unlocked. It looks like it leads to a laboratory of some sort.", area, 2], 
						   "switch", 
						   {}
						  );

/************************************ End Area *****************************************/

area1.events.push(checkDoor1, checkRoom1);

/************************************* Area2 *******************************************/

var checkRoom2 = new Event("Examine the room",
						   displayMessage,
						   "You look around the room. You see a door and a hallway. There is a poster on the wall that looks like a...bunny army soluting a bunny dictator. Cute but disturbing.",
						   true, 
						   {}
						  );
var checkDoor2 = new Event("Examine the door", 
						   unlockArea, 
						   ["You check the door and see that it is unlocked. It looks like it leads to a laboratory of some sort.", 1, 2], 
						   true, 
						   {}
						  );

/************************************ End Area *****************************************/

area2.events.push(checkDoor2, checkRoom2);

/************************************* Area3 *******************************************/



/************************************ End Area *****************************************/

// for (var i = 0; i < areas.length; i++) {
// 	console.log(areas[i]);
// }

/*********************************** Game Loop *****************************************/

var currentAreaIndex = 0;
var connectedIndex;
var area;
var gameInProgress = true;
while (gameInProgress) {
	area = areas[currentAreaIndex];
	connectedIndex = decisionLoop(area);
	currentAreaIndex = area.connectedAreas[connectedIndex];
}

/************************************* Tools *******************************************/

/* COMMON CONSEQUENCES(ARGUMENTS) OF YOUR CHOICES:
	1. explore(player)
	2. encounter([enemy, player])
	3. checkStatus(player)
	4. goToNextDecision(message)
	5. displayMessage(message)
	6. getItem([player, item, message])
	7. getWeapon([player, weapon, message])
	8. useItemInField([player, enemy, inField=true/false])
	9. loseItem([player, item, message])
*/
