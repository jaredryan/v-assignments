document.info.addEventListener("submit", function(e) {
	e.preventDefault();
	var firstName = document.info.firstName.value;
	var lastName = document.info.lastName.value;
	var age = document.info.age.value;
	var gender = document.info.gender.value;
	var locationsArray = document.querySelectorAll("input[name=locations]:checked")
	var locations = arrayToString(locationsArray);
	var dietRestrictionsArray = document.querySelectorAll("input[name=diet_restrictions]:checked")
	var dietRestrictions = arrayToString(dietRestrictionsArray);
	
	str = 	"First Name: " + firstName + "\n" + 
			"Last Name: " + lastName + "\n" + 
			"Age: " + age + "\n" + 
			"Gender: " + gender + "\n" + 
			"Location(s): " + locations + "\n" + 
			"Dietary Restrictions: " + dietRestrictions;
	window.alert(str);
});

function arrayToString(array) {
	if (array.length === 0) return "";
	newStr = ""
	for (var i = 0; i < array.length; i++) {
		newStr += array[i].value + ", "
	}
	return newStr.slice(0, newStr.length - 2);
}