function Wizard(name, type, strength, avadaKedavra, defend, health) {
	this.name = name;
	this.type = type;
	this.strength = strength;
	this.castSpell = avadaKedavra;
	this.defend = defend;
	this.health = health
}

var wizards = [
	new Wizard("Voldemort", "grey", 1000, function(enemyWizard) {enemyWizard.health -= this.strength;}, function() {this.health += 2;}, 10),
	new Wizard("Harry Potter", "human", 5, function(enemyWizard) {enemyWizard.health -= this.strength;}, function() {this.health += 4;}, 15),
	new Wizard("Gandolf", "white", 50, function(enemyWizard) {enemyWizard.health -= this.strength;}, function() {this.health += 10;}, 30),
	new Wizard("Bob", "binary", 1500, function(enemyWizard) {enemyWizard.health -= this.strength;}, function() {this.health += 1;}, 8),
	new Wizard("Mickey", "grey", -100, function(enemyWizard) {enemyWizard.health -= this.strength;}, function() {this.health += 100;}, 5)
];

console.log(wizards);