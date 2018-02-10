function total(arr) {
	return arr.reduce(function(total, num) {
		return total + num;
	});
}

console.log(total([1,2,3])); // 6  

/*****************************************************************************/

function stringConcat(arr) {
	return arr.reduce(function(string, num) {
		return string + num;
	}, "");
}

console.log(stringConcat([1,2,3])); // "123"  

/*****************************************************************************/

function totalVotes(arr) {
	return arr.reduce(function(peopleVoted, person) {
		if (person.voted) {
			peopleVoted++;
		}
		return peopleVoted;
	}, 0);
}

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters)); // 7 

/*****************************************************************************/

function shoppingSpree(arr) {
	return arr.reduce(function(total, item) {
		return total + item.price;
	}, 0);
}

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005  

/*****************************************************************************/

function flatten(arr) {
	return arr.reduce(function(flatArray, array) {
		return flatArray.concat(array);
	}, []);
}

var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];  

/*****************************************************************************/

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
	return arr.reduce(function(voterResults, voter) {
		if (voter.age >= 18 && voter.age <= 25) {
			if (voter.voted) {
				voterResults.youngVotes++;
			}
			voterResults.youth++;
		} else if (voter.age >= 26 && voter.age <= 35) {
			if (voter.voted) {
				voterResults.midVotes++;
			}
			voterResults.mids++;
		} else if (voter.age >= 36 && voter.age <= 55) {
			if (voter.voted) {
				voterResults.oldVotes++;
			}
			voterResults.olds++;
		}
		return voterResults;
	}, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0});
}

console.log(voterResults(voters)); // Returned value shown below:  

/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/

/*****************************************************************************/

// Extra credit
// Using AJAX, do a GET request to your own Github repositories endpoint. The URL
// will be https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos.

// Once you get the data, use .reduce() to figure out how many watchers you have
// across all of your repositories. Don't be too disappointed if the number is 0.
// You're still new at this :)


// MY FAILED ATTEMPT

// const https = require("https");
// const url = "https://api.github.com/users/jaredryan/repos";
// https.get(url);

// https.get(url, res => {
//   res.setEncoding("utf8");
//   let body = "";
//   res.on("data", data => {
//     body += data;
//   });
//   res.on("end", () => {
//     body = JSON.parse(body);
//     console.log(body);
//   });
// });

