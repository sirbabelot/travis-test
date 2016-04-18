var app = require('express')();

app.get('/', function(req, res) {
  res.send('HELLO MY HAM SANDWICH!');
});

app.listen(8080, function() {
  console.log('running!!');
});
