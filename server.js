var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
var path = require('path');
app.use(express.static(path.join(__dirname, './public/dist/public/')))
app.set('views', path.join(__dirname, '/public/dist'))
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.listen(process.env.PORT || 5000)
