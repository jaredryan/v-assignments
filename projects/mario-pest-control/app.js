document.pests.addEventListener("submit", function(event) {
	event.preventDefault();
	var goombas = document.pests.goombas.value;
	var bob_ombs = document.pests.bob_ombs.value;
	var cheep_cheeps = document.pests.cheep_cheeps.value;
	var total = goombas * 5 + bob_ombs * 7 + cheep_cheeps * 11;
	document.getElementById("goombas_caught").innerHTML = goombas;
	document.getElementById("bob_ombs_caught").innerHTML = bob_ombs;
	document.getElementById("cheep_cheeps_caught").innerHTML = cheep_cheeps;
	document.getElementById("total_cost").innerHTML = total;
})