// Lab 9 - Libraries & jQuery
// Author: Stephen Francoeur
// Date: 5/13/2024

$(".button").click(function () { 
  $(this).parent().toggleClass("special");
});

$("#challenge").append("<button id='button-challenge'>Specialize</button>")

$("button-challenge").click(function(){$("#challenge").toggleClass("special");});