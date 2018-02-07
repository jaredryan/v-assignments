var wizards = [  
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil"
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good"
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good"
  }
];

wizards.forEach(function(wizard) {
    console.log(wizard);
    wizard.isAlive = true;
});

var neutralGood = wizards.filter(function(wizard) {
    return wizard.alignment === "neutral good";
});

var lawfulGoodIndex = wizards.findIndex(function(wizard) {
    return wizard.alignment === "lawful good";
});

var allAlive = wizards.every(function(wizard) {
    return wizard.isAlive;
});

var containsNeutralGood = wizards.some(function(wizard) {
    return wizard.alignment === "neutral good";
});

wizards.forEach(function(wizard) {
    if (wizard.alignment === "neutral good") {
        wizard.isAlive = false;
    }
})

var areAllNeutralDead = wizards.every(function(wizard) {
    return wizard.isAlive;
});


console.log(neutralGood);
console.log(lawfulGoodIndex);
console.log(allAlive);
console.log(containsNeutralGood);
console.log(wizards);
console.log(areAllNeutralDead);
