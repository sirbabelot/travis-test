var app = require('express')();

app.get('/', function(req, res) {
  res.send('HELLO MY HAM Rooter!');
});

app.listen(8888, function() {
  console.log('running!!');
});
