/**
 1. JavaScript arrays can contain a mix of different data types. 
 2. JavaScript arrays are indexed arrays and so, 
 array elements cannot be accessed using arbitrary strings as indexes, as in associative arrays.
 3. JavaScript arrays are zero-indexed: the first element of an array is at index 0, 
 the second is at index 1, and so on — and the last element is at the value of the array's length property 
 minus 1.
 4. JavaScript arrays can be created using the array constructor and array literal syntax []. 
 (*** or from an array-like object, such as a NodeList or arguments object ***).
 */

let myArray = [1, 2, 3, 4];

let myArray2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

myArray[0]; // 1
myArray[1]; // 2

let pElements = ["<p>1</p>", "<p>2</p>", "<p>3</p>"];

// pElements[1].....

// Array advanced concepts:
// 1. Array methods (ES6): forEach, map, filter and reduce.
let newArray = [];
// let iteratedArray = myArray.forEach((element) => {
//   newArray.push(element * 2);
// });
// let myArray = [1, 2, 3, 4];
let filteredArray = myArray.filter((element) => {
  return element > 2;
});
let mappedArray = myArray.map((element) => {
  return element + 2;
});

// filter numbers greater than 2 and multiple by 3
let multipledNumbers = myArray
  .filter((number) => {
    return number > 2;
  })
  .map((number) => {
    return number * 3;
  });

let nodes = [{}, {}, {}];
let filteredNodes = nodes.filter((node) => {});

console.log(multipledNumbers);

let notReducedArr = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

let reducedElement = notReducedArr.reduce((accumulator, element) => {
  return (accumulator += element);
}, "");

console.log(reducedElement);

// -- double numbers
// -- filter even numbers
// -- transform uppercase
// -- calculate total (reduce)
let sum = myArray.reduce((total, value) => {
  return total + value;
});

console.log(sum);
// -- find longest word (reduce)
const strings = [
  "Akomulator",
  "Karburator",
  "Stega",
  "Otorinolaringolog",
  "Plastika",
  "Sise",
];
const longestStr = strings.reduce((longstStr, string) => {
  if (string.length > longstStr.length) {
    return string;
  } else {
    return longstStr;
  }
});
console.log(longestStr);
// 2. Difference between map and forEach (distructive vs. non-distructive methods)
// 3. Array sorting

// Homework: reduce tasks from above!
