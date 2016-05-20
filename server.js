var app = require('express')();

app.get('/', function(req, res) {
  res.send('HELLO MY DEPLOYMENT GUIDE TO DEPLOYMENT AND ko;!');
});

app.listen(8888, function() {
  console.log('running!!');
});
