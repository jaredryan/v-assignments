var employees = [];

function Employee(name, title, salary, status) {
	this.name = name;
	this.title = title;
	this.salary = salary;
	this.status = "Full Time";
	this.printEmployeeForm = function() {
		console.log("Name: " + this.name + 
					"Job Title: " + this.title + 
					"Salary: " + this.salary + 
					"Status: " + this.status
		);
	};
}

var bob = new Employee("Bob", "Instructor", 100);
var eric = new Employee("Eric", "Instructor", 100);
var sariah = new Employee("Sariah", "Career Specialist", 80);

sariah.status = "Part Time";

employees.push(bob);
employees.push(eric);
employees.push(sariah);

console.log(employees);
