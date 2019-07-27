// File: oop-0404.js
// Jedi study at 2019-4-2 22:31 PM.
// Description: set enumerable.

var createPerson = function(firstName, lastName) {
    var person = {};

    Object.defineProperties(person, {
        
        firstName: {
            value: firstName,
            enumerable: true
        },

        lastName: {
            value: lastName,
            enumerable: true
        },

        age: {
            value: 41,
            enumerable: true
        }
    });

    return person;
}

var person = createPerson("Jedi", "Chou");
for (var prop in person) {
    console.log(prop);
}
