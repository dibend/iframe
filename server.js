var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var app = express();
app.use(morgan('":remote-addr",":date[web]",":method",":url",":status",":response-time ms"'));
app.use(compression());

console.log('"ip","date","method","url","status","time"');

app.use(express.static('public', {extensions: ['html']}));

app.listen(8080);
