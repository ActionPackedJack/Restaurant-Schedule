var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
var path = require('path');
app.use(express.static(path.join(__dirname, './dist/public/')));
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, 'dist'));
});
require('./server/config/mongoose.js');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://manager:password1234@ds135514.mlab.com:35514/employees"
//mongoose.Promise= global.Promise;

MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
    };
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.listen(app.get('port'), function(){
    console.log('Node app is running on port', app.get('port'))
});
})
