const express = require('express');

app = express();

app.get('/', function(req, res) {
  res.send('Success!');
});

port = 8080;
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
