// Lab 6 - Arrays & Objects
// Author: Stephen Francoeur
// Date: 4/29/2024

const myTransport = ["walk","bike","bus","drive"];

const myMainRide = {
  make: "Lexus",
  model: "GS 350",
  color: "Silver",
  year: 2013,
  age: function() {
      return 2024 - this.year
  }
};

document.writeln("My transportation methods: ", myTransport, "</br>");

document.writeln("My main ride: <pre>",
    JSON. stringify(myMainRide, null, "\t"), "</pre>");




