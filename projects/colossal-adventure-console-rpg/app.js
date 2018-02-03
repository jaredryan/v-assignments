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
	attackPower: [1,2], // [min, max]
	inventory: [],
	maxInventory: 10,
	addItem: function(item) {
		inventory.push(item);
		if (inventory.length === maxInventory) {
			console.log("Inventory:\n" + returnItemsString(player));
			var itemOptions = [];
			for (var i = 0; i < player.inventory.length; i++) {
				itemOptions.push(player.inventory[i].name);
			}
			var index = readlineSync.keyInSelect(itemOptions, "Which item would you like to discard?");
			var isNotCertain = true;
			while (isNotCertain) {
				readlineSync.keyInSelect(["Yes", "No"], "Are you sure you want to discard the " + itemOptions[index].name + "?");
				if (choice === 0) {
					player.inventory.splice(index, 1, item);
					isNotCertain = false;
				} else if (choice === 1) {
					index = readlineSync.keyInSelect(itemOptions, "Which item would you like to discard?");
				} else {
					console.log('Please select "Yes" or "No".');
				}
			}
		}
	},
	attack: function(enemy) {
		console.log("\nYou attack!");
		var damage = Math.floor(Math.random() * this.attackPower[1]) + this.attackPower[0] + this.weapon;
		enemy.hp -= damage;
		console.log(enemy.name + " took " + damage + " damage!");	
	},
};

// ENEMIES
function Enemy(name, hp, attackPower, reward) {
    this.name = name;
    this.hp = hp;
    this.attackPower = attackPower; // a range: [min, max]
    this.attack = function(player) {
    	console.log(this.name + " attacks!");
		var damage = (Math.floor(Math.random() * this.attackPower[1]) + this.attackPower[0]);
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
	console.log(player.name + " found a First Aid Kit.");
	player.addItem(new Item(firstAidInfo[0], firstAidInfo[1], firstAidInfo[2], firstAidInfo[3]));
}];
var feralDog = ["Feral Dog", 3, [1, 2], function(player) {
	console.log("You recovered 1 HP.");
	recoverHP(player, 1)
	console.log(player.name + " found a Knife.");
	player.addItem(new Item(knife[0], knife[1], knife[2], knife[3]));
}];

var rat = ["Rat", 2, [1, 1], function(player) {
	console.log("You recovered 0 HP.");
	console.log(player.name + " found Rat Steroids.");
	player.addItem(new Item(ratSteroid[0], ratSteroid[1], ratSteroid[2], ratSteroid[3]));
}];

// Collection of standard enemies
var enemies = [hoodedFigure, feralDog, rat];

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

var knife = ["Knife", "Use this to hurt the enemy 3 damage.", false, function(player, enemy) {
	enemy.hp -= 3;
}];

var ratSteroid = ["Rat Steroids", "This hurts you 2 but allows you to hurt the enemy an additional 4 points to your normal attack.", false, function(player, enemy) {
	player.attack(enemy);
	enemy.hp -= 4;
}];

var joy = ["Joy", "Grants you eternal bliss", false, function(player, enemy) {
	console.log("The enemy feels defeated because you are so alone because you are so happy.");
	enemy.hp = 0;
}];

/****************** Important information that are essential to the game ********************/

var fightOptions = ["Fight", "Run", "Use Item", "Check Status"];
var fleeAttemptMessage = "\nYou tried to run away!";
var fleeSuccessMessage = "You successfully ran away!";
var fleeFailureMessage = "You were unable to escape!";
var endGameMessage = "\"Everything is going dark...\"\nYou were never seen again.";

/******************** Important functions that are essential to the game **********************/

/* Format of decisions: pass in an array of strings for the options, an array of
   functions for the consequences, an array of arguments for each consequence. */
function decisionLoop(options, consequences, arguments) {
	var isRunning = true;
	while (isRunning) {
		var index = readlineSync.keyInSelect(options, "What do you want to do?");
		isRunning = consequences[index];
	}
}

/* COMMON CONSEQUENCES(ARGUMENTS) OF YOUR CHOICES:
	1. explore(player)
	2. encounter([enemy, player])
	3. checkStatus(player)
	4. goToNextDecision(message)
	5. displayMessage(message)
	6. getItem([player, item, message])
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

// Leads to new decision tree.
function goToNextDecision(message) {
	console.log(message);
	return false;
}

// Gather info in the area. Stay in the area.
function displayMessage(message) {
	console.log(message);
	return true;
}

// Obtain an item in the area. Stay in the area. PlayerItem is an array: [player, item, message]
function getItem(playerItemMessage) {
	console.log(playerItemMessage[2]);
	playerItemMessage[0].addItem(playerItemMessage[1]);
	return true;
}

/**************************** End of Common Decision Functions *******************************/

// Returns true if the player makes it to the destination, false if he or she died
function walk(player) {
	if (Math.random() < 0.25) {
		return fight(returnRandomEnemy(), player); 
	}
	return true;
}

// Returns true if the player is still alive, false if he or she died.
function fight(enemy, player) {
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
function useItem(player, enemy, itemChoice, inField=false) {
	var item = player.inventory[itemChoice];
	if (item === undefined) {
		return false;
	}
	if (!isUseable(inField, item)) {
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
		return items = items.slice(0, items.length - 2);
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
function returnRandomEnemy() {
	var enemyInfo = enemies[Math.floor(Math.random() * enemies.length)];
	return new Enemy(enemyInfo[0], enemyInfo[1], enemyInfo[2], enemyInfo[3]);
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

/************************************* GAME START *******************************************/

// Dialogue Start
console.log('"....ughhh"');
sleep.msleep(1000);
console.log('"...what happened?"\n');
sleep.msleep(1000);
console.log('As you wake up and look around, a name comes to mind...');
sleep.msleep(1000);
console.log('"I must have hit my head. Can"' + "'t believe I almost forgot. It's...\"\n");
sleep.msleep(1000);
// Dialogue End

// Name established
var name = readlineSync.question("Please enter your name: ");

// Dialogue Start
console.log("\n\"I'm " + name + '. My head hurts. I wonder if I actually forgot anything.');
sleep.msleep(1300);
console.log("Like...for example, where I'm at. What is this place?\n");
sleep.msleep(1300);
console.log("As you look around, you notice that you are in a simple room. The walls");
sleep.msleep(1300);
console.log("are a dull grey; the bed you are on is simple: wood, white sheets, and white");
sleep.msleep(1500);
console.log("blankets. There's a nightstand by the bed. You don't sense any danger, but");
sleep.msleep(1500);
console.log("you don't quite feel comfortable either.");
sleep.msleep(800);

var roomOptions = ["Check cupboard", "Check door", "Leave", "Examine the room", "Check status", "Use Item"];




decisionLoop(optionsArrays, consequenceArrays, argumentArrays);
	

/* COMMON CONSEQUENCES(ARGUMENTS) OF YOUR CHOICES:
	1. explore(player)
	2. encounter([enemy, player])
	3. checkStatus(player)
	4. goToNextDecision(message)
	5. displayMessage(message)
	6. getItem([player, item, message])
*/
