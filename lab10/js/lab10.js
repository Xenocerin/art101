// Lab 10 - Javascript for the Web
// Author: Stephen Francoeur
// Date: 5/16/2024



$("#make-convo").click(function(){
  function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    return text.slice(randStart, randStart + randLen);
  }
  const newText = generateRandomText();
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});



