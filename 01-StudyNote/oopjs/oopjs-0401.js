// File: oopjs-0401.js
// Jedi study at 2019-4-2 21:41 PM
// Description:
//   Use Object.defineProperty to define some properties.
//   And use writeable to control accessable of
//   properties.

var createPerson = function(firstName, lastName) {
  var person = {};
  
  Object.defineProperty(person, "firstName", {
    value: firstName,
    writable: false
    // Notice: this property name is 'writable',
    // not 'writeable'.
  });
  
  Object.defineProperty(person, "lastName", {
    value: lastName,
    writable: true
  });
  
  return person;
};

var person = createPerson("Jedi", "Chou");
person.firstName = "Hao";
person.lastName = "Zhou";

console.log(person.firstName);  // Jedi
console.log(person.lastName);  // Zhou

