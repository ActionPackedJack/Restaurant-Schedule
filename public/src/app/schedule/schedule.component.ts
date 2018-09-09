import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private _dataService: HttpService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    var employees = [];
    this.getEmployees();
    console.log("HERE ARE EMPLOYEES:", employees)
    var schedule = {
      mondayAM: {},
      mondayPM: {},
      tuesdayAM: {},
      tuesdayPM: {},
      wednesdayAM: {},
      wednesdayPM: {},
      thursdayAM: {},
      thursdayPM: {},
      fridayAM: {},
      fridayPM: {},
      saturdayAM: {},
      saturdayPM: {},
      sundayAM: {},
      sundayPM: {},
    };
    var problems= [];
    
    var doubles = [];

    //The below code automatically assigns extra properties to each employee to help the algorithm make decisions

for (var i = 0; i < employees.length; i++) {
	var server = employees[i];
	//We keep track of the number of shifts that have been scheduled this week so that the limits will not be exceeded.
	server.shiftsScheduled = 0;
	server.bartenderScheduled = 0;
	server.shiftLeaderScheduled = 0;
	server.availability = 0;
	for (var key in server.shifts) {
		if (server.requests.indexOf(key.toString()) > -1) {
			server.shifts[key] = false;
		}
		if (server.shifts[key] === true) {
			server.availability++;
		}
	}
	server.priority = server.shiftsPerWeek + 14 - server.availability;
	//Priority decides who is scheduled when multiple employees can work the same shift. An employee will receive higher priority if there are less other shifts available for them, to guarantee that someone who can only work one particular shift will always get it. An employee who can work more shifts per week will receive higher priority; their priority will be higher than that of an employee with open availability who can only work once a week, but lower than that of a server who can only work one specific shift.
}

//The below function checks whether the shift currently being scheduled is a morning. If it is, it returns the night shift of the same day.
function isMorning(shift) {
	var str = shift.toString();
	if (str[str.length - 2] === 'P') {
		return "false";
	}
	var night = str.slice(0, str.length - 2) + 'PM';
	for (var key in employees[0].shifts) {
		if (key.toString() === night) {
			return key;
		}
	}
}

//The below function sorts the employees in order of highest to lowest based on priority, so that the scheduling function can evaluate them in the proper order.
function prioritySort(arr) {
	for (var i = 1; i < employees.length; i++) {
		if (employees[i].priority > employees[i - 1].priority) {
			var temp = employees[i - 1];
			employees[i - 1] = employees[i];
			employees[i] = temp;
			i = 1;
		}
	}
	return arr;
}
//This algorithm will not schedule an employ to a double shift, because anyone scheduled in the morning will be marked as unavailable for the evening. In the event that a PM shift cannot be filled, the below code will check and see if there is anyone eligible to work it who is already scheduled that morning, and return a list of employees who could be scheduled to a double if necessary.
function doublesCheck(shift){
  var result=[]
  for (let i=0; i<doubles.length; i++){
    if(doubles[i].indexOf(shift)===0){
      result.push(doubles[i].slice(shift.length+1, doubles[i].length));
    }
  }
  return result;
}
//The below function schedules the bartender for a single shift. This will be run on every day first, so that qualified bartenders will not be scheduled to serving shifts until all bartender shifts are filled.
function scheduleBartender(shift) {
  for(var key in schedule){
    if(key.toString()===shift.toString()){
      var shift:any=key;
    }
  }
	var sortedEmployees = prioritySort(employees);
	for (var i = 0; i < sortedEmployees.length; i++) {
		var server = sortedEmployees[i];
		if (
			server.shiftsScheduled < server.shiftsPerWeek &&
			server.bartenderScheduled < server.bartenderPerWeek &&
			server.shifts[shift] === true
		) {
      console.log("Scheduling " + server.name + " on " + shift + " as bartender.")
      schedule[shift].bartender = server.name;
			shift.bartender = server.name;
			server.bartenderScheduled++;
			server.shiftsScheduled++;
      server.shifts[shift] = false;
			//If this is a morning shift, the below code checks that server's availability for the corresponding night shift. If they are available, their availability will be set to false but a note will be made in their file that this has happened in case the manager needs to schedule someone to a double shift.
			if (isMorning(shift !="false")) {
        if(server.shifts[isMorning(shift)]===true){
				  server.shifts[isMorning(shift)] = false;
				  doubles.push(isMorning(shift) + " " + server.name);
        }
			}
      return;
		}
	}
  problems.push("Could not find eligible bartender on " + shift + ".")
}
//The below code is nearly identical to the bartender scheduling logic, but handles shift leaders.
function scheduleShiftLeader(shift) {
  for(var key in schedule){
    if(key.toString()===shift.toString()){
      var shift:any=key;
    }
  }
	var sortedEmployees = prioritySort(employees);
	for (var i = 0; i < sortedEmployees.length; i++) {
		var server = sortedEmployees[i];
		if (
			server.shiftsScheduled < server.shiftsPerWeek &&
			server.shiftLeaderScheduled < server.shiftLeaderPerWeek &&
			server.shifts[shift] === true
		) {
      console.log("Scheduling " + server.name + " on " + shift + " as shift leader.")
			schedule[shift].section1 = server.name;
			server.shiftLeaderScheduled++;
			server.shiftsScheduled++;
      server.shifts[shift] = false;
			if (isMorning(shift !="false")) {
        if(server.shifts[isMorning(shift)]===true){
				  server.shifts[isMorning(shift)] = false;
				  server.doubles.push(isMorning(shift));
        }
			}
      return;
		}
	}
  problems.push("Could not find eligible shift leader on " + shift + ".");
}

//The below code fills out the shift with non-shift-leader, non-bartender servers. totalServers represents the total number of people working the shift, including shift leader and bartender.
function scheduleRemainder(shift, totalServers=5){
  var sortedEmployees = prioritySort(employees);
  for(var i =2; i< totalServers; i++){
    var section = "section" + i.toString();
    for (var q = 0; q < sortedEmployees.length; q++) {
		  var server = sortedEmployees[q];
		  if (
			  server.shiftsScheduled < server.shiftsPerWeek &&
			  server.shifts[shift] === true
		  ) {
        console.log("Scheduling " + server.name + " on " + shift + " as " + section + ".")
			  schedule[shift][section] = server.name;
			  server.shiftsScheduled++;
        server.shifts[shift] = false;
			  if (isMorning(shift !="false")) {
          if(server.shifts[isMorning(shift)]===true){
				    server.shifts[isMorning(shift)] = false;
				    server.doubles.push(isMorning(shift));
          }
			  }
        break;
      }
        continue;
    }
    let problem = ("Could not find employee to work " + section + " on " + shift + ".");
    if(doublesCheck(shift).length>0){
      problem+= (" Potential doubles: " + doublesCheck(shift));
    }
    problems.push(problem);
  }
}
// scheduleBartender("mondayAM");
// scheduleBartender("mondayPM");
// scheduleShiftLeader("mondayAM");
// scheduleShiftLeader("mondayPM");
// scheduleRemainder("mondayAM");
// scheduleRemainder("mondayPM");
// console.log(schedule);
// console.log(problems)

function makeSchedule(
  fridayAMServers=7, 
  fridayPMServers=7, 
  saturdayAMServers=7, 
  saturdayPMServers=7,
  sundayAMServers=5,
  sundayPMServers=5,
  mondayAMServers=5,
  mondayPMServers=5,
  tuesdayAMServers=5,
  tuesdayPMServers=5,
  wednesdayAMServers=5,
  wednesdayPMServers=5,
  thursdayAMServers=5,
  thursdayPMServers=5)
  {
    scheduleBartender("fridayAM");
    scheduleBartender("fridayPM");
    scheduleBartender("saturdayAM");
    scheduleBartender("saturdayPM");
    scheduleBartender("sundayAM");
    scheduleBartender("sundayPM");
    scheduleBartender("thursdayAM");
    scheduleBartender("thursdayPM");
    scheduleBartender("wednesdayAM");
    scheduleBartender("wednesdayPM");
    scheduleBartender("tuesdayAM");
    scheduleBartender("tuesdayPM");
    scheduleBartender("mondayAM");
    scheduleBartender("mondayPM");
    scheduleShiftLeader("fridayAM");
    scheduleShiftLeader("fridayPM");
    scheduleShiftLeader("saturdayAM");
    scheduleShiftLeader("saturdayPM");
    scheduleShiftLeader("sundayAM");
    scheduleShiftLeader("sundayPM");
    scheduleShiftLeader("thursdayAM");
    scheduleShiftLeader("thursdayPM");
    scheduleShiftLeader("wednesdayAM");
    scheduleShiftLeader("wednesdayPM");
    scheduleShiftLeader("tuesdayAM");
    scheduleShiftLeader("tuesdayPM");
    scheduleShiftLeader("mondayAM");
    scheduleShiftLeader("mondayPM");
    scheduleRemainder("fridayAM", fridayAMServers);
    scheduleRemainder("fridayPM", fridayPMServers);
    scheduleRemainder("saturdayAM", saturdayAMServers);
    scheduleRemainder("saturdayPM", saturdayPMServers);
    scheduleRemainder("sundayAM", sundayAMServers);
    scheduleRemainder("sundayPM", sundayPMServers);
    scheduleRemainder("thursdayAM", thursdayAMServers);
    scheduleRemainder("thursdayPM", thursdayPMServers);
    scheduleRemainder("wednesdayAM", wednesdayAMServers);
    scheduleRemainder("wednesdayPM", wednesdayPMServers);
    scheduleRemainder("tuesdayAM", tuesdayAMServers);
    scheduleRemainder("tuesdayPM", tuesdayPMServers);
    scheduleRemainder("mondayAM", mondayAMServers);
    scheduleRemainder("mondayPM", mondayPMServers);
    console.log(schedule);
    for(let q=0; q<employees.length;q++){
      if(employees[q].shiftsPerWeek > employees[q].shiftsScheduled){
        problems.push(employees[q].name + " did not get the desired amount of shifts (" + employees[q].shiftsPerWeek + " expected, " + employees[q].shiftsScheduled + " received).")
      }
    }
    console.log(schedule);
    console.log("Potential problems with this schedule:", problems);
  }
  makeSchedule()
  }
  employees=[];
  getEmployees(){
  let observable= this._dataService.getEmployees();
  observable.subscribe(data => {
    console.log("HERE IS THE OBSERVABLE", data);
    this.employees = data['employees'];
    console.log("HERE ARE THE EMPLOYEES: ", this.employees);
    return this.employees;
    })
  }
}