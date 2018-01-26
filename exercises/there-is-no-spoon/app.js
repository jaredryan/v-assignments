var laptop = {
	color: "silver",
	make: "laptop",
	cost: "too much",
	program: function(language) {
		console.log("Use me to program in " + language + "!");
	},
	charge: "50",
	name: "Laptop"
};

var phone = {
	name: "Phone",
	color: "black",
	make: "Apple",
	cost: "also too much",
	receiveText: function(person) {
		if (this.contacts.includes(person) === false) {
			this.contacts.push(person)
		}
		console.log("You received a message from " + person + ".");
	},
	contacts: [],
	charge: 50
};

var coat = {
	color: "red",
	make: "Nike",
	cost: "reasonable",
	putOn: function(person) {
		console.log(person + " put on the " + this.color + ", " + this.make + " coat.");
	},
	takeOff: function(person) {
		console.log(person + " removed the " + this.color + ", " + this.make + " coat.");
	},
};

var projectionScreen = {
	color: "white",
	purpose: "display stuff",
	cost: 2000,
	display: function() {
		console.log("If you look at me, you will inevitably acquire knowledge.");
	},
};

var charger = {
	color: "white",
	make: "Apple",
	charge: function(objectToCharge) {
		objectToCharge.charge = 100;
		console.log(objectToCharge.name + " has been fully charged.");
	},
	cost: "too much for something we need",
};

var waterBottle = {
	color: "white",
	make: "Apple",
	drink: function() {
		this.fullness -= 10;
	},
	cost: "good",
	fullness: 50,
	emptyness: function() {
		console.log("Don't you mean to check how full it is, you pessimist?");
	},

};

var student = {
	name: "Joe",
	isCool: true,
	clothes: ["jacket", "pants", "gloves"],
	willGetAJob: true,
	study: function() {
		this.happiness *= 0.5;
		this.knowledge += 10;
		console.log(this.name + " has studied. Knowledge is now " + this.knowledge + " and happiness is " + this.happiness + ".");
	},
	happiness: 50,
	knowledge: 10,
};

var cord = {
	color: "white",
	make: "who cares",
	connect: function(charger, toCharge) {
		console.log("The cord is now charging something. Yay.")
	},
	owner: "somebody",
};

var monitor = {
	color: "black",
	make: "Asus",
	display: function(student) {
		student.happiness += 10;
		console.log(student.name + " is now very happy because the monitor makes coding easier.")
	},
	isAwesome: true,

};

var food = {
	usefulness: "very",
	desirability: "very high",
	eat: function(student) {
		student.happiness += 20;
		console.log("Food is happiness. " + student.name + " knows this through personal experience.")
	},
	types: ["fruit", "veggies", "dairy", "meat", "grain", "junk/heaven"],
};

laptop.program("JavaScript");
phone.receiveText("Priya");
console.log("Contacts: ");
console.log(phone.contacts);
coat.putOn("Jared");
projectionScreen.display();
charger.charge(phone);
console.log("Phone's charge: " + phone.charge.toString());
student.study();
monitor.display(student);
food.eat(student);
console.log(student.name + "'s happiness is now " + student.happiness.toString() + ".");
