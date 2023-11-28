// Exercise 2:
// Array Manipulation
// Given an array of numbers, find the sum of all positive numbers in the array.
// If the array is empty, print "Array is empty."

const arr = [-1, -2, 3, 4, 5];
let result = 0;
if (arr == "") {
  console.log("Array is empty");
} else {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) result += arr[i];
  }
}
console.log(result);

// Exercise 3:
// Object Manipulation
// Create an object representing a student with properties like name, age, and grade.
// Write a function that adds a new property to the student object, like for ex. "school" with a value of "High School."

const student = {
  name: "Kristijan",
  age: 28,
  grade: 5,
};

function addSchool() {
  student.school = "High School";
}

addSchool();
console.log(student);

// Exercise 4:
// Loop and Array
// Write a program that takes an array of names and prints a welcome message for each name.
// Use a for-of loop for iteration.

let arrName = ["Trajce", "Krste", "Petre", "Slavce"];

for (let name of arrName) {
  console.log("Welcome " + name);
}
