// Lab 7 - Arrays & Objects
// Author: Stephen Francoeur
// Date: 5/2/2024


function sortUserName() {
  var userName = window.prompt("Hello, please input your username for correction");
  console.log("userName =", userName);
  var nameArray = userName.split('');
  console.log("nameArraySort =", nameArray);
  var nameArraySort = nameArray.sort(function(a,b) { return a.localeCompare(b);});
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}


document.writeln("<div class='h2'>","Oh hey, I've fixed your name:", sortUserName(), "</div>", "</br>",);


