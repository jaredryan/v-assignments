var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");

add.addEventListener("submit", function(event) {
	event.preventDefault();
	var input1 = parseInt(document.getElementById("add-input1").value);
	var input2 = parseInt(document.getElementById("add-input2").value);
	document.getElementById("result-add").innerHTML = input1 + input2;
});

subtract.addEventListener("submit", function(event) {
	event.preventDefault();
	var input1 = parseInt(document.getElementById("subtract-input1").value);
	var input2 = parseInt(document.getElementById("subtract-input2").value);
	document.getElementById("result-subtract").innerHTML = input1 - input2;
});

multiply.addEventListener("submit", function(event) {
	event.preventDefault();
	var input1 = parseInt(document.getElementById("multiply-input1").value);
	var input2 = parseInt(document.getElementById("multiply-input2").value);
	document.getElementById("result-multiply").innerHTML = input1 * input2;
});