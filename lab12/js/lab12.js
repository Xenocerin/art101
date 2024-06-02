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
function houseEx(house) {
  if (house == 0) {
    return "The house colors are gold and scarlet red, and the house mascot is the lion. Red is considered a 'bold color' one that is associated with determination, just like Gryffindor students. Gryffindors certainly make bold decisions, like when Harry doesn't hesitate to save the other students during the Second Task of the Triwizard Tournament in 'Harry Potter and the Goblet of Fire' or when he forms the secret society Dumbledore's Army to help ready others for the impending war in 'Harry Potter and the Order of the Phoenix.' This color symbolism is also represented in the rubies of the house hourglass that counts house points. Historically, lions are linked with courage and valor, which line up with Gryffindors perfectly."
  }

  if (house == 1) {
    return "The house colors from the books are blue and bronze, and their mascot is the eagle. Blue isn't a color that only evokes sadness; it also can symbolize confidence and obsession, which describes how Ravenclaw students are when they are studying or trying to find new information. Sadness is represented in their house ghost, the Grey Lady. The only house ghost related to a founder, the Grey Lady, also known as Helena Ravenclaw, died after she stole her mother's diadem and refused to go back to Hogwarts when a baron came for her. In love with her, the baron killed her when she wouldn't follow him."

  }

  if (house == 2) {
    return "Slytherin's colors are green and silver, and its mascot is a snake or serpent. Green is often considered a calming or peaceful color, but it is also one of envy and pride. It represents how Slytherins can use their ambition and cunning for both good and evil. Snakes are commonly associated with rebirth due to the shedding of their skin, but when their biblical depiction is considered, they also share the house traits. In the story of Adam and Eve, the snake uses deceit to convince the two to eat from the Tree of Life. The aspect of rebirth can be applied to several Slytherins, like Malfoy, who originally fell in with the 'evil' members and alumni of the house before turning towards the 'light' as adults." 

  }

  if (house == 3) {
    return "The Hufflepuff house colors are black and yellow, and its mascot is the badger. Yellow is a bright color, associated with someone full of energy. It is also a color that tends to pair well with others, just like how Hufflepuffs get along well with everyone because of their patience and kindness. It may seem like having black as a second color contradicts that, but it can also be used to show strength. One of the attributes of the house is its fairness, and it takes great strength to remain fair and just in every situation. This strength is mirrored in the diamonds used in their house hourglass, as diamonds are one of the hardest materials, as well as in their mascot."
  }
}


let myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    let name = document.getElementById("input").value;
    let house = sortingHat(name);
    let ex = houseEx(mod)
  newText = "<p>Welcome to " + house + " " + name + "! " + ex + "</p>";
  document.getElementById("output").innerHTML = newText;
})

