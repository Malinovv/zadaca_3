// Example using a for loop to iterate over an array
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Example using a for-in loop to iterate over an object's properties
const person = {
  name: "John",
  age: 30,
  job: "Developer",
};

// for-in loop

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Example using a for-of loop to iterate over the elements of an array
const colors = ["red", "green", "blue"];

//for-of loop

for (let color of colors) {
  console.log(color);
}
