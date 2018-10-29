var mongoose = require('mongoose')
var Schema = mongoose.Schema;
//insert schema name here
var EmployeeSchema = new mongoose.Schema({
    name: {type: String,
        required: [true, "Name is required!"],
        trim : true,
    },
    shiftsPerWeek: {type: Number,
        required: [true, "Please specify how many shifts per week this employee should receive."],
        },
    bartenderPerWeek: {type: Number,
        required: [true, "Please specify how many bartender shifts per week this employee should receive."],
        },
    shiftLeaderPerWeek: {type: Number,
        required: [true, "Please specify how many shifts per week this employee should lead."],
        },
    alsoServer:{
        type: Boolean
    },
    shifts: {
        mondayAM: {type: Boolean},
        mondayPM: {type: Boolean},
        tuesdayAM: {type: Boolean},
        tuesdayPM: {type: Boolean},
        wednesdayAM: {type: Boolean},
        wednesdayPM: {type: Boolean},
        thursdayAM: {type: Boolean},
        thursdayPM: {type: Boolean},
        fridayAM: {type: Boolean},
        fridayPM: {type: Boolean},
        saturdayAM: {type: Boolean},
        saturdayPM: {type: Boolean},
        sundayAM: {type: Boolean},
        sundayPM: {type: Boolean},
        },
    requests: [],
}, {timestamps: true})
var DefaultSchema = new mongoose.Schema({
    name: {type: String,
        required: [true, "Name is required!"],
        trim : true,
    },
    mondayAM: {type: Number},
    mondayPM: {type: Number},
    tuesdayAM: {type: Number},
    tuesdayPM: {type: Number},
    wednesdayAM: {type: Number},
    wednesdayPM: {type: Number},
    thursdayAM: {type: Number},
    thursdayPM: {type: Number},
    fridayAM: {type: Number},
    fridayPM: {type: Number},
    saturdayAM: {type: Number},
    saturdayPM: {type: Number},
    sundayAM: {type: Number},
    sundayPM: {type: Number},
}, {timestamps: true})
mongoose.model('employees', EmployeeSchema);
mongoose.model('defaults', DefaultSchema);