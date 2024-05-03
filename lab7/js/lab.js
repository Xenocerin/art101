// Lab 7 - Arrays & Objects
// Author: Stephen Francoeur
// Date: 5/2/2024
function combinedCaseSort(a,b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}

function sortUserName() {
  var userName = window.prompt("Hello, please input your username for correction");
  console.log("userName =", userName);
  var nameArray = userName.split('');
  console.log("nameArraySort =", nameArray);
  var nameArraySort = nameArray.sort(combinedCaseSort);
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}


document.writeln("Oh hey, I've fixed your name: ",
   sortUserName(), "</br>");



