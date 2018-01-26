var shopper = {
	name: "Shopper Mannnnn",
	money: 100,
	buy: function(price) {
		this.money -= price;
		console.log(this.name + " now has $" + this.money.toString());
	},
	groceryCart: ["food", "more food", "organic food (gross)", "artificial food (yummy)"],
	likesShopping: false
};