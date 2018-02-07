var cars = ["chevy", "ford", "other"];

cars.forEach(function(car) {
	console.log(`${car} goes vroom`);
});

var angryCars = cars.map(function(car) {
	return car.toUpperCase();
});

console.log(angryCars);



var cars = [
	{
		year: 2007,
		model: "ford"
	},
	{
		year: 2003,
		model: "ford"
	},
	{
		year: 2000,
		model: "chevy"
	},
	{
		year: 2017,
		model: "chevy"
	},
	{
		year: 2000,
		model: "E150"
	},
	{
		year: 2017,
		model: "E150"
	}
];

var newCars = cars.filter(function(car) {
	return car.year > 2005;
});

var coolVan = cars.find(function(car) {
	return car.model === "E150";
});

console.log(newCars);
console.log(coolVan);

if (cars.some(function(car) {
	return car.model === "E150";
})) {
	console.log("It is true that there is one or more E150s");
}

if (!cars.every(function(car) {
	return car.model === "E150";
})) {
	console.log("It is false that every car is an E150");
}

var carTotals = cars.reduce(function(runningTotal, car) {
	if (car.model === "ford") {
		runningTotal.numberOfFords++;
	}
	else if (car.model === "chevy") {
		runningTotal.numberOfChevys++;
	}
	return runningTotal;
}, {numberOfFords: 0, numberOfChevys: 0});

console.log(carTotals);
