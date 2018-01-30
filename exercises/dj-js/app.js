var box = document.getElementById("box");

box.addEventListener("mouseover", function() {
	box.style.backgroundColor = "blue";
});

window.addEventListener("scroll", function() {
	box.style.backgroundColor = "orange";
});

box.addEventListener("mousedown", function() {
	box.style.backgroundColor = "red";
});

box.addEventListener("mouseup", function() {
	box.style.backgroundColor = "yellow";
});

box.addEventListener("dblclick", function() {
	box.style.backgroundColor = "green";
});

window.addEventListener("keydown", function(event) {
	switch(event.keyCode) {
		case 66:
			box.style.backgroundColor = "blue"
			break;
		case 71:
			box.style.backgroundColor = "green"
			break;
		case 79:
			box.style.backgroundColor = "orange"
			break;
		case 82:
			box.style.backgroundColor = "red"
			break;
		case 89:
			box.style.backgroundColor = "yellow"
			break;
	}
});