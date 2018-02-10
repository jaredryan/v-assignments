// Let and var
const name = 'John'  
const age = 101
const pets = ["cat", "dog"]

var petObjects = []

for (var i = 0; i < pets.length; i++){  
  const pet = {type: pets[i]}
  let name;
  if (pets[i] === "cat"){
    name = "fluffy"
  } else {
    name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}

// ES6 Functions
const vegetables = carrots.map(carrot => {({type: "carrot", name: carrot})});
const friends = people.filter(person => !!person.friendly);
const doMathSum = (a, b) => a + b;
const produceProduct = (a, b) => a * b;
const helloAgeString = (firstName = "Jane", lastName = "Doe", age = 100) => {
	return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
}
const dogs = animals.filter(animal => animal.type === "dog");
const welcomeJaniceToHawaii = (location, name) => {
	if (location === "Hawaii" && name === "Janice") {
		return `
Hi Janice!

Welcome to Hawaii.

I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.
`;
	}
}

