/**
 * Created by nalantianyi on 16/8/12.
 */
var express = require("express"),
    app = express(),
    path = require('path');
app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var wechat = require('./routes/wechat');
app.use('/gw', wechat);
require('./routes/router')(app);
app.listen(7777, function () {
    console.log('hello,nalantianyi! crm server is start!');
});