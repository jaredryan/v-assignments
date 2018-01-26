var bookface = {
	members: [
		{
			name: "Alice",
			age: 16,
			interests: ["video games"],
			friends: [
				{ 
					name: "Bob",
					age: 18,
					interests: ["games"],
					friends: [
						{ 
							name: "Alice",
							age: 16,
							interests: ["video games"],
							friends: [
								{ 
									name: "Bob",
									age: 18,
									interests: ["games"],
								},
							]
						}, 
						{
							name: "Christie",
							age: 20,
							interests: ["board games"],
							friends: [
								{ 
									name: "Bob",
									age: 18,
									interests: ["games"],
								}
							]
						},
					]
				}
			]
		},
		{
			name: "Bob",
			age: 18,
			interests: ["games"],
			friends: [
				{ 
					name: "Alice",
					age: 16,
					interests: ["video games"],
					friends: [
						{ 
							name: "Bob",
							age: 18,
							interests: ["games"],
						},
					]
				}, 
				{
					name: "Christie",
					age: 20,
					interests: ["board games"],
					friends: [
						{ 
							name: "Bob",
							age: 18,
							interests: ["games"],
						}
					]
				},
			]
		},
		{
			name: "Christie",
			age: 20,
			interests: ["board games"],
			friends: [
				{ 
					name: "Bob",
					age: 18,
					interests: ["games"],
					friends: [
						{ 
							name: "Alice",
							age: 16,
							interests: ["video games"],
							friends: [
								{ 
									name: "Bob",
									age: 18,
									interests: ["games"],
								},
							]
						}, 
						{
							name: "Christie",
							age: 20,
							interests: ["board games"],
							friends: [
								{ 
									name: "Bob",
									age: 18,
									interests: ["games"],
								}
							]
						},
					]
				}
			]
		},
	],
	friendships: [["Alice", "Bob"], ["Bob", "Christie"]],
	becomeFriends: function(person1, person2) {
		if (person1.friends.includes(person2) === false) {
			person1.friends.push(person2);
			person2.friends.push(person1);
			person1 > person2 ? this.friendships.push([person2.name, person1.name]) : this.friendships.push([person1.name, person2.name]);
			console.log(person1.name + " and " + person2.name + " are now friends.")
		} else {
			console.log(person1.name + " and " + person2.name + " are already friends.")
		}
	},
	sponsors: ["Facebook"]
}

bookface.becomeFriends(bookface.members[0], bookface.members[2]);
console.log(bookface.friendships);
console.log(bookface.members[0].friends);