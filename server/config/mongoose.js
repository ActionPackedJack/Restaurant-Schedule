var mongoose = require('mongoose')
var fs = require('fs');
var path = require('path');
//PUT DATABASE NAME IN THE LINE BELOW
mongoose.connect('mongodb+srv://<username>:<password>@employees.adkxf.mongodb.net/employees?retryWrites=true&w=majority');
//mongoose.connect('mongodb://localhost/employees');
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >=0){
        require(models_path + '/' + file);
    }
}); 