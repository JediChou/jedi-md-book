// File: oopjs-0403.js
// Jedi study at 2019-4-2 22:10 PM
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
		},

		fullName: {
			get: function(){
				return this.firstName + " " + this.lastName;
			},

			set: function(value) {
				this.firstName = value.firstName;
				this.lastName = value.lastName;
			}
		}
	});


	return person;
};

var person = createPerson("Jedi", "Chou");
person.firstName = "Hao";
person.lastName = "Zhou";

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

// assign new value to object
val = {
	firstName: "Dark",
	lastName: "Sith"
}
person.fullName = val;
console.log(person.fullName);
