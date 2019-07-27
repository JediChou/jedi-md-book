// File: oop-0404.js
// Jedi study at 2019-4-2 22:20 PM.
// Description:
//   Redefine property after object created.

var createPerson = function(firstName, lastName) {
    var person = {};

    Object.defineProperties(person, {
        firstName: {value: firstName},
        lastName: {value: lastName},
        fullName: {
            get: function(){
                return this.firstName + " " + this.lastName;
            },

            // enable property re-define.
            configurable: true
        }
    });

    return person;
}

var person = createPerson("Jedi", "Chou");
console.log(person.fullName);

Object.defineProperty(person, "fullName", {
    get: function() {
        return this.firstName + ", " + this.lastName
    }
});

console.log(person.fullName);