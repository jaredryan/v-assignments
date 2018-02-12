document.pests.addEventListener("submit", event => {
	event.preventDefault();
	const goombas = document.pests.goombas.value;
	const bob_ombs = document.pests.bob_ombs.value;
	const cheep_cheeps = document.pests.cheep_cheeps.value;
	const goombas_price = goombas * 5;
	const bob_ombs_price = bob_ombs * 7;
	const cheep_cheeps_price = cheep_cheeps * 11;
	const total = goombas_price + bob_ombs_price + cheep_cheeps_price;
	document.getElementById("goombas_caught").innerHTML = goombas;
	document.getElementById("bob_ombs_caught").innerHTML = bob_ombs;
	document.getElementById("cheep_cheeps_caught").innerHTML = cheep_cheeps;
	document.getElementById("goombas_price").innerHTML = goombas_price;
	document.getElementById("bob_ombs_price").innerHTML = bob_ombs_price;
	document.getElementById("cheep_cheeps_price").innerHTML = cheep_cheeps_price;
	document.getElementById("total_cost").innerHTML = total;
});
