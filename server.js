var app = require('express')();

app.get('/', function(req, res) {
  res.send('HELLO MY Noodle!');
});

app.listen(8080, function() {
  console.log('running!!');
});
