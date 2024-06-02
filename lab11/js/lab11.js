// Lab 11 - JavaScript Events and Forms
// Author: Stephen Francoeur
// Date: 5/19/2024

$("#submit").click(function(){
  const userName = $("#user-name").val();
  const petName = $("#pet").val();
  userNameSorted = sortString(userName+petName);
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});



function sortString(inputString) {
  return inputString.split('').sort().join('');
}






