// Lab 9 - Libraries & jQuery
// Author: Stephen Francoeur
// Date: 5/13/2024

/*appends a button to each div with the class "challenge", 
that button will appear saying "make special" 
and will have the class "button challenge".*/
$(".challenge").append("<button class='button-challenge'>Make Special</button>");

/*upon clicking any button with the class "button challenge" will toggle on the css class 
"special" for the div the button is appended to through an anonymous function.*/
$(".button-challenge").click(function(){
  $(this).parent().toggleClass("special"); 
})



