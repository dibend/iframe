var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var noBots = require('express-nobots');
var app = express();
app.use(morgan('":remote-addr",":date[web]",":method",":url",":status",":response-time ms"'));
app.use(compression());
app.use(noBots());

console.log('"ip","date","method","url","status","time"');

app.use(express.static('public', {extensions: ['html']}));

app.get('*', function(request, response) {
  response.redirect('/');
});

app.listen(8080);
