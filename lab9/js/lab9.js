// Lab 9 - Libraries & jQuery
// Author: Stephen Francoeur
// Date: 5/13/2024

$("#challenge").append("<button id='button-challenge'>Specialize</button>")

$("button-challenge").click(function() {
  $(this).parent().toggleClass("special");
});

$("#problems").append("<button id='button-problems'>Specialize</button>")

$("button-problems").click(function() {
  $(this).parent().toggleClass("special");
});

$("#reflection").append("<button id='button-reflect'>Specialize</button>")

$("button-reflect").click(function() {
  $(this).parent().toggleClass("special");
});
