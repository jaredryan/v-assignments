var readlineSync = require("readline-sync");

var name = readlineSync.question("What is your name?\n");
console.log("\nHI " + name.toUpperCase() + "!");

var age = readlineSync.question("What is your age?\n");
console.log("\nYou are " + age + ", " + name + "? That's old.");

var story = readlineSync.question("Tell me your life story.\n");
if (story.length > 20) {
	console.log("\nThat story was long; it was " + story.length + " characters long. Nice.\n" + 
			    "Allow me to shorten it for you:\n" + story.slice(Math.floor(story.length / 2)) + "\n");
	var index = readlineSync.question("Didn't like it how I told it? Tell me at what character I should begin instead.\n");
	console.log("\nThanks! Let's begin: " + story.slice(index));
	console.log("I hope you liked it!")
} else {
	console.log("Wow, you don't trust me, do you? I'm leaving.")
}

console.log("Goodbye, " + name + "!");
