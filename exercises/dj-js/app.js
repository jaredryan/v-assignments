var box = document.getElementById("box");

box.addEventListener("mouseover", () => {
	box.style.backgroundColor = "blue";
});

window.addEventListener("scroll", () => {
	box.style.backgroundColor = "orange";
});

box.addEventListener("mousedown", () => {
	box.style.backgroundColor = "red";
});

box.addEventListener("mouseup", () => { {
	box.style.backgroundColor = "yellow";
});

box.addEventListener("dblclick", () => { {
	box.style.backgroundColor = "green";
});

window.addEventListener("keydown", event => {
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
