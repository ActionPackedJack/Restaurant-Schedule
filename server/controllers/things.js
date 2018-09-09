var mongoose = require('mongoose')
var Employee = mongoose.model("employees")
module.exports = {
    createEmployee: function(req, res){
        console.log ("CREATING EMPLOYEE IN THINGS.JS");
        var employee = new Employee;
        console.log("BODY: " ,req.body);
        employee.name= req.body.newEmployee.name;
        employee.shiftsPerWeek = req.body.newEmployee.shiftsPerWeek;
        employee.shiftLeaderPerWeek = req.body.newEmployee.shiftLeaderPerWeek;
        employee.bartenderPerWeek = req.body.newEmployee.bartenderPerWeek;
        employee.alsoServer = req.body.newEmployee.alsoServer;
        employee.requests = [];
        employee.shifts = req.body.newEmployee.shifts;
        console.log("EMPLOYEE: ", employee);
        employee.save(function(err, employee){
            if(err){
                res.json({status: 'error'})
            }
            else{
                res.json({status: 'success'})
            }
        })
    },
    getEmployees : function(req, res){
        console.log("RUNNING GETEMPLOYEES FROM THINGS.JS")
        Employee.find(function(err, employee){
            console.log("HERE ARE EMPLOYEES: ", employee);
            if(err){
                res.json({status: "error"})
            }
            else{
                res.json({status: "success", employees:employee
                })
            }
        })
    },
    getOneEmployee: function(req, res){  
        console.log("RUNNING GETONEEMPLOYEE FROM THINGS.JS")
        Employee.findOne({_id: req.params.id}, function(err, employee){
            if(err){
                console.log("FOUND ERROR:", err)
            }
            console.log("HERE IS EMPLOYEE: ",employee)
            res.json({employee:employee})
        })
    },
    deleteEmployee : function(req, res){
        console.log("MADE IT TO THE CONTROLLER")
        Employee.deleteOne({_id : req.params.id}, function
        (err, employees){
            if(err){
                res.json({status: 'error'})
            }
            else{
                Employee.find(function(err, employees){
                    if(err){
                        res.json({status: 'error'})
                    }
                    else{
                        res.json({status: 'success',
                        employees: employees})
                    }
                })
            }
        })         
    },
    update: function(req, res){
        console.log( "RUNNING UPDATE FUNCTION...")
        //req.body.updated_at = new Date();
        Employee.update({_id: req.params.id}, {$set :
        req.body}, function(err){
            if(err){
                console.log(err)
            }
            else{
                Employee.findOne({_id : req.params.id},
                function(err, employee){
                    if(err){
                        console.log(err)
                    }
                })
            }
        })
    }
}