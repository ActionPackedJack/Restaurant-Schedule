var Things = require('../controllers/things.js')
var path = require('path')
module.exports = function(app){
    app.post('/api/things', function(req, res){
        console.log("MADE IT TO ROUTES.JS   ")
        Things.createEmployee(req, res)
    })
    app.get('/api/things', function(req, res){
        console.log("EXECUTING BACKEND ROUTE API/THINGS")
        Things.getEmployees(req, res)
    })
    app.get('/api/things/delete/:id', function(req, res){
        console.log("ROUTES")
        Things.deleteEmployee(req,res)
    })
    app.get('/api/things/:id', function(req, res){
        Things.getOneEmployee(req, res)
    })
    app.put('/api/things/:id', function(req, res){
        Things.update(req, res)
    })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("dist/public/index.html"))
    });
}