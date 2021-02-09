const quotes = require("./quotes");

"use strict";
const http = require("http");
http.createServer((req, res) => {
//code for getting random quote
const index = Math.floor(Math.random() * quotes.length); //random number 
//random quote
const randomQuote = quotes[index]; //quote in index

console.log(randomQuote);
 res.writeHead(200, {"Content-type": "text/plain"});
 res.write(randomQuote);
 res.end();
}).listen(3000);

