/**
 * 1. Object is used to store various keyed collections and more complex entities.
 * 2. Objects can be created using the Object () constructor or the object initializer {} literal syntax.
 */

const myFunction = function () {};

let myObject = {
  name: "John",
  age: 20,
  func: myFunction,
};

myObject["name"]; // "John" --> string
myObject["age"]; // 20 --> number
myObject.name; // "John"
myObject.func(); // myFunction
