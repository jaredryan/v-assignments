// Next make an array of your favorite super heros. Then iterate over them and 
// create an <li> item for each. Then append each item to a <ul>.

var superheroes = ["Superman", "Wonderwoman", "Batman", "Hulk", "Spiderman"];


document.getElementById("add").addEventListener("click", function() {
	var superheroesList = document.getElementById("superheroes");
	superheroes.innerHTML = "";
	for (var i = 0; i < superheroes.length; i++) {
		superheroesList.innerHTML += "<li>" + superheroes[i] + "</li>";
	}
});