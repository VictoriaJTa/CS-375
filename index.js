const express = require('express');
const dbmanager = require('./dbmanager');

const CONFIG = require('./config.json');
let db = new dbmanager.DBManager(CONFIG);

// Set up basic app
app = express();
app.get('/', function(req, res) {
  res.send('Success!');
});

port = 8080;
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
