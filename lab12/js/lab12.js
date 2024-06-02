// Lab 12 - Conditionals
// Author: Stephen Francoeur
// Date: 5/19/2024

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}


let myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    let name = document.getElementById("input").value;
    let house = sortingHat(name);
  newText = "<p>Welcome to " + house + " " + name + "!</p>";
  document.getElementById("output").innerHTML = newText;
})

