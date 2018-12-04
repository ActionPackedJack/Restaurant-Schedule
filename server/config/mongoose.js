var mongoose = require('mongoose')
var fs = require('fs');
var path = require('path');
//PUT DATABASE NAME IN THE LINE BELOW
mongoose.connect('mongodb://manager:password1234@ds135514.mlab.com:35514/employees');
//'mongodb://localhost/employees'
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >=0){
        require(models_path + '/' + file);
    }
}); 