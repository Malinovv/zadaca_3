let counter = 0;
let colors = ["red", "green", "blue", "yellow"];
console.log(counter);

function onClick() {
  //Equvalent expressions counter = counter + 1; counter += 1;
  let n = colors.length; // 4
  let currentColour = colors[counter % n]; // 0 % 4 = 0; 1 % 4 = 1; 2 % 4 = 2; 3 % 4 = 3; 4 % 4=0;
  counter++; // 3
  document.body.style.backgroundColor = currentColour;
}

function onReverseClick() {
  let n = colors.length; // 4
  counter = (counter - 1 + n) % n; // 4 - 1 + 4 = 7 % 4 = 3; 3 - 1 + 4 = 6 % 4 = 2; 2 - 1 + 4 = 5 % 4 = 1; 1 -1 + 4 = 4 % 4 = 0;
  let currentColour = colors[counter];
  document.body.style.backgroundColor = currentColour;
}

const changeColorBtn = document.querySelector("#changeColorBtn");
const reverseColorBtn = document.querySelector("#reverseColorBtn");

changeColorBtn.addEventListener("click", onClick);
reverseColorBtn.addEventListener("click", onReverseClick);
