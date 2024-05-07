// Lab 8 - Anonymous Functrions & Callbakcs
// Author: Stephen Francoeur
// Date: 5/6/2024

function divTen(x){
  return (x % 10 == 0);
}

console.log("Is 30 divisible by ten?", divTen(30));
console.log("Is 25 divisible by ten?", divTen(25));

numArray = [10, 25, 24, 63, 70, 81, 90]
console.log("My array ", numArray);

let result = numArray.map(divTen)
console.log("Which numbers in my array are divisible by ten:", result);

let result2 = numArray.map(function(x){
  return x * 30;
});
console.log("My array multiplied by 30:", result2);
