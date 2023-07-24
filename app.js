var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('pino-http')


var indexRouter = require('./routes/index');

var app = express();
app.set('view engine', 'hbs');
app.use(logger())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


app.get('/sitemap.xml', function(req, res) {
    res.sendFile(__dirname + '/sitemap.xml');
});

module.exports = app;
