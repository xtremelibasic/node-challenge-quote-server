// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");
const app = express();
var cors = require('cors');

app.use(cors())

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes ");
});

//START OF YOUR CODE...

//Returning all quotes
app.get("/quotes", (request,response) => response.send(quotes))

//Returning one quote
app.get("/quotes/random", (request, response) => response.send(lodash.sample(quotes)))

//Search handler
app.get("/quotes/search", (request,response) => {
  let searchQuery = request.query.term;
  let newQuoteArray = quotes.filter(singleQuote => {
    let {quote, author} = singleQuote;
    let regex = new RegExp(searchQuery, "i");
    return regex.test(quote) || regex.test(author);
  })
  // response.send(pickFromArray(newQuoteArray));
  response.send(lodash.sample(newQuoteArray))
})
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(5000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
