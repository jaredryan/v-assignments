const people = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
];

const sortedOfAge = arr => arr
    .filter(person => person.age > 18)
    .sort((a, b) => a.lastName > b.lastName);
const toDisplayInHTML = arr => arr
    .sort((a, b) => a.age > b.age)
    .map(person => `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`);

console.log(sortedOfAge(people));  
console.log(toDisplayInHTML(people));  