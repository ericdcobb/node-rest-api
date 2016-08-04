var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/route');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
