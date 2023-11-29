// 0.1 Declaration and calling:
// Function declaration

function sayHello() {
  console.log("Hello!");
}
sayHello(); // Hello!

// 0.2 Function can be assigned to a variable:
// Function expression
let sayHi = function () {
  return "Hi!";
};

let talk = sayHi(); // console.log(talk); -- > Hi!
let talk_ = sayHi; // console.log(talk_); -- > function () { return "Hi!"; }
//sayHi(); // Hi!

// 1. Local and Global Scope:
// Global variable
let globalVar = "I am global";

function localiseScope() {
  let globalVar = "I am localised global";
  // Local variable
  let localVar = "I am local";
  console.log(globalVar); // Accessing global variable --> I am global
  console.log(localVar); // Accessing local variable --> I am local
  console.log(innerVar); // This would result in an error as innerVar is not defined in localiseScope
}

localiseScope();
console.log(globalVar); // Accessing global variable outside the function --> I am global
// console.log(localVar); // This would result in an error as localVar is not defined globally

// 2. Pure function
function add(a, b) {
  return a + b;
}

let result = add(3, 5);
console.log(result); // 8

// Impure function with side effect
let sum = 0;
function impureAdd(a) {
  sum += a;
}

impureAdd(3);
console.log(sum); // 3

let someVariable = 5;
let soemVariable_2 = function () {};
// 3. Closure:
function outerFunction(x, y) {
  // Inner function (closure)
  // x = 10;
  let innerFunction = function (y) {
    return x + y;
  };
  return innerFunction; // function(y) { return x + y; }
}

let closureExample = outerFunction(10);
console.log(closureExample(5)); // 15

// 4. Default Parameters:
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!
