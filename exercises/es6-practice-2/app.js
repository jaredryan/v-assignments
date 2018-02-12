// Green Circle
// 1
function collectAnimals(...animals) {
    return [...animals];
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// 2
const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrit"];
const food = {fruit, sweets, vegetables};
console.log(food);

// 3
const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks"
};
const {location, duration} = vacation;
console.log(`We're going to have a good time in ${location} for ${duration}`)

// 4
const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
const [firstFav, secondFav, thirdFav, ...otherFavs] = favoriteActivitiesInOrder;
console.log(`My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`);

// Blue Square
function combineAnimals(...arr) {
    return arr.reduce((total, elem) => [...total, ...elem]);
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// Black Diamond
// 1
const product = (...nums) => [...nums].reduce((acc, number) => acc * number, 1);
console.log(product(1,2,3,4,5));

// 2
const unshift = (arr, ...nums) => [...nums, ...arr];
console.log(unshift([6],1,2,3,4,5));

// Double Black Diamond
const populatePeople = names => {
    return names.map(name => {
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {firstName, lastName};
    });
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
