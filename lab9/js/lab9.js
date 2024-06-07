// Lab 9 - Libraries & jQuery
// Author: Stephen Francoeur
// Date: 5/13/2024

$(".challenge").append("<button class='button-challenge'>Make Special</button>");


$(".button-challenge").click(function(){
  $(this).parent().toggleClass("minor-section");
  $(this).parent().toggleClass("special");  
})



