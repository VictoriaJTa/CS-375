const express = require('express');
const mysql = require('mysql');
const CONFIG = require('./config.json');


// Set up basic app
app = express();
app.get('/', function(req, res) {
  res.send('Success!');
});

// Configure basic SQL connection
let con = mysql.createConnection(CONFIG);

con.connect(function(err) {
  if (err) {
    console.log('Error connection to database');
  } else {
    console.log('Successfully connected to database!');
  }
});

port = 8080;
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
