var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];

function randomEnemyType() {
	return enemyTypes[Math.floor(Math.random() * 3)]
}

function determineHitPoints(type) {
	if (type === "Ancient Dragon") {
		return Math.floor(Math.random() * 21) + 80
	} else if (type === "Prowler") {
		return Math.floor(Math.random() * 30) + 50
	} else if (type === "Mighty Grunt") {
		return Math.floor(Math.random() * 30) + 20
	}
}

function Enemy(type, hitPoints, defense) {
	this.type = type || randomEnemyType();
	this.hitPoints = hitPoints || determineHitPoints(this.type);
	this.defense = defense || this.hitPoints * 3;
}

enemies = []
for (var i = 0; i < 100; i++) {
	enemies.push(new Enemy());
}

console.log(enemies);