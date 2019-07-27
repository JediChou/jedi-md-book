// File: oopjs-0402.js
// Jedi study at 2019-4-2 21:46 PM
// Description:
//  Use Object.defineProperties to define multi
//  properties.

var createPerson = function(firstName, lastName) {
	var person = {};

	Object.defineProperties(person, {
		
		firstName: {
			value: firstName,
			writable: false
		},
		
		lastName: {
			value: lastName,
			writable: true
		}
	});

	person.fullName = person.firstName + " " + person.lastName;

	return person;
};

var person = createPerson("Jedi", "Chou");
person.firstName = "Hao";
person.lastName = "Zhou";

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);  // this is a bug

