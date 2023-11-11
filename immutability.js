// Let's warm up.
"2" + "2" - "2";

// 20
// immutability!
//const number = 42;
// Primitive types are immutable by nature, so we are not allowed to change them.
// You can't do this:
// number = 50; // Error: Assignment to constant variable.

//const myArray = [1, 2, 3];
// Complex types are mutable by nature, so we are allowed to change them.
// This is allowed:
//myArray[5] = 99;
//console.log(myArray[4]);
// Mutability does not mean that we can reassign the variable.
// This is not allowed:
//myArray = [4, 5, 6]; // Error: Assignment to constant variable.

let count = 10;
count = 20; // This is allowed;.

let myObject = { key: "value" };
myObject = { newKey: "newValue" }; // This is allowed.

// Creating an object
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// These require knowledge of Object native constructor and prototype
// Freezing the object
Object.freeze(person);

// Attempting to modify the existing property
person.age = 31;

console.log(person);
