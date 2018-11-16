var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
var path = require('path');
app.use(express.static(path.join(__dirname, './public/dist/public/')));
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, '/public/dist'));
})
//app.set('views', path.join(__dirname, '/public/dist'))
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.listen(app.get('port'), function(){
    console.log('Node app is running on port', app.get('port'))
});
