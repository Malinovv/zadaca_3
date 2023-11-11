/*
 * 1. JavaScript arrays can contain a mix of different data types.
 * 2. JavaScript arrays are indexed arrays and so,
 * array elements cannot be accessed using arbitrary strings as indexed, as in associative arrays.
 * 3. JavaScript arrays are zero-indexed: the first element of an array is at index 0,
 * the second is at index 1, and so on - and the last element is at the value of the array's lenght property minus 1.
 * 4. JavaScript arrays can be created using the array constructor and array literal syntax [].
 * (*** or from an array-like object, such as a NodeList or arguments object).
 */

let myArray = [1, 2, 3, 4, "five", ["six", "seven", "eight"]];
let myArray2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

myArray[0]; // 1
myArray[1]; // 2
