import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpService} from '../http.service';
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value)
  }
}

@Pipe({
  name: 'values',
  pure: false
})
export class ValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key])
  }
}

@Component({
  selector: 'app-list',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  employees: any[];
  schedule: any;
  problems: any[];
  doubles: any[];
  hourmax: any[];
  barmax: any[];
  leadmax: any[];
  requestList: any[];
  shifts;
  newShifts;
  constructor(private _dataService: HttpService, private _route: ActivatedRoute, private router: Router) {
    this.employees= [];
    this.schedule = {
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
    this.problems= [];
    this.requestList = [];
    this.doubles = [];
    this.hourmax = [];
    this.barmax = [];
    this.leadmax = [];
   }

  ngOnInit() {
    //var employees = [];
    // this._route.params.subscribe((params: Params) => {
    //   this.mondayAMServers=params['mondayAM'];
    //   console.log("ID: ", this.id);
    // })
    this.getEmployees();
    //let mondayAMServers=this._route.snapshot.queryParams["mondayAMServers"];
    //console.log(mondayAMServers);
    // this._route.params.subscribe((params: Params) => {
    //   console.log(params['mondayAMServers']);
    // });
    //employees = this.getEmployees();
    

  }



//The below function checks whether the shift currently being scheduled is a morning. If it is, it returns the night shift of the same day.
isMorning(shift) {
	var str = shift.toString();
	if (str[str.length - 2] === 'P') {
		return "false";
	}
	var night = str.slice(0, str.length - 2) + 'PM';
	for (var key in this.employees[0].shifts) {
		if (key.toString() === night) {
			return key;
		}
	}
}

//The below function sorts the employees in order of highest to lowest based on priority, so that the scheduling function can evaluate them in the proper order.
prioritySort(arr) {
	for (var i = 1; i < this.employees.length; i++) {
		if (this.employees[i].priority > this.employees[i - 1].priority) {
			var temp = this.employees[i - 1];
			this.employees[i - 1] = this.employees[i];
			this.employees[i] = temp;
			i = 1;
		}
	}
	return arr;
}
//This algorithm will not schedule an employee to a double shift, because anyone scheduled in the morning will be marked as unavailable for the evening. In the event that a PM shift cannot be filled, the below code will check and see if there is anyone eligible to work it who is already scheduled that morning, and return a list of employees who could be scheduled to a double if necessary.
doublesCheck(shift){
  var result=[];
  for (let i=0; i<this.doubles.length; i++){
    if(this.doubles[i].indexOf(shift)===0){
      result.push(" " + this.doubles[i].slice(shift.length+1, this.doubles[i].length));
    }
  }
  return result;
}
//In the event that a shift cannot be filled, the below code checks whether anyone has requested it off.
requestCheck(shift){
  var result = [];
  for (let i=0; i<this.requestList.length; i++){
    if(this.requestList[i].indexOf(shift)===0){
      result.push(this.requestList[i].slice(shift.length+1, this.requestList[i].length));
    }
  }
  return result;
}
//In the event that a shift cannot be filled, the below code checks whether anyone could work it but has reached their allotted shifts for the week.
hourmaxCheck(shift){
  var result=[];
  for (let i=0; i<this.hourmax.length; i++){
    if(this.hourmax[i].indexOf(shift)===0){
      result.push(" " + this.hourmax[i].slice(shift.length+1, this.hourmax[i].length));
    }
  }
  return result;
}
//The below functions work like hourmaxCheck but check for bartender and shift leader designations.
leadmaxCheck(shift){
  let result=[];
  for (let i=0; i<this.leadmax.length; i++){
    if(this.leadmax[i].indexOf(shift)===0){
      result.push(" " + this.leadmax[i].slice(shift.length+1, this.leadmax[i].length));
    }
  }
  return result;
}
barmaxCheck(shift){
  let result=[];
  for (let i=0; i<this.barmax.length; i++){
    if(this.barmax[i].indexOf(shift)===0){
    }
  }
  return result;
}
//The below functions check for whether an employee has maxed their hours AND bartender/shift leader allotments so that they won't show up on both problem reports.
barmaxFilter(shift){
  let result = this.barmaxCheck(shift);
  for (let i=result.length; i>=0; i--){
    if(this.hourmaxCheck(shift).indexOf(result[i])>-1){
      result[i]=result[result.length-1];
      result.pop();
      i++;
    }
  }
  return result;
}
leadmaxFilter(shift){
  let result = this.leadmaxCheck(shift);
  for (let i=result.length; i>=0; i--){
    if(this.hourmaxCheck(shift).indexOf(result[i])>-1){
      result[i]=result[result.length-1];
      result.pop();
      i++;
    }
  }
  return result;
}
//The below function schedules the bartender for a single shift. This will be run on every day first, so that qualified bartenders will not be scheduled to serving shifts until all bartender shifts are filled.
scheduleBartender(shift) {
  // for(var key in this.schedule){
  //   if(key.toString()===shift.toString()){
  //     var shift:any=key;
  //   }
  // }
	var sortedEmployees = this.prioritySort(this.employees);
	for (var i = 0; i < sortedEmployees.length; i++) {
		var server = sortedEmployees[i];
		if (
      server.shifts[shift] === true
      && server.alreadyScheduled[shift] === false
		) {
      if(
        server.shiftsScheduled >= server.shiftsPerWeek 
       && this.hourmax.indexOf(shift + " " + server.name) === -1
      ){
        this.hourmax.push(shift + " " + server.name);
      }
      if(
        server.bartenderScheduled >= server.bartenderPerWeek
        && server. bartenderPerWeek > 0
       && this.barmax.indexOf(shift + " " + server.name) === -1
      ){
        this.barmax.push(shift + " " + server.name);
      }
      if(this.barmax.indexOf(shift + " " + server.name) > -1 || this.hourmax.indexOf(shift + " " + server.name) > -1){
        continue;
      }
      console.log("Scheduling " + server.name + " on " + shift + " as bartender.")
      this.schedule[shift].bartender = server.name;
			server.bartenderScheduled++;
			server.shiftsScheduled++;
      server.alreadyScheduled[shift] = true;
      //If this is a morning shift, the below code checks that server's availability for the corresponding night shift. If they are available, their availability will be set to false but a note will be made in their file that this has happened in case the manager needs to schedule someone to a double shift.
			if (this.isMorning(shift) !="false") {
        if(server.shifts[this.isMorning(shift)]===true){
          
				  server.alreadyScheduled[this.isMorning(shift)] = true;
				  this.doubles.push(this.isMorning(shift) + " " + server.name);
        }
			}
      return;
		}
	}
  let problem = "Could not find eligible shift leader on " + shift + ".";
  if(this.hourmaxCheck(shift).length>0){
    problem+= (" The following employees are available but have reached their allotted shifts for the week: " + this.hourmaxCheck(shift));
  }
  if(this.barmaxFilter(shift).length>0){
    problem+= (" The following employees are available but have already been assigned their alloted bartender shifts for the week: " + this.barmaxFilter(shift));
  }
  this.problems.push(problem);
}
//The below code is nearly identical to the bartender scheduling logic, but handles shift leaders.
scheduleShiftLeader(shift) {
  for(var key in this.schedule){
    if(key.toString()===shift.toString()){
      var shift:any=key;
    }
  }
	var sortedEmployees = this.prioritySort(this.employees);
	for (var i = 0; i < sortedEmployees.length; i++) {
		var server = sortedEmployees[i];
		if (
      server.alsoServer === true &&
      server.shifts[shift] === true
      && server.alreadyScheduled[shift] === false
    ) {
      if(
        server.shiftsScheduled >= server.shiftsPerWeek 
       && this.hourmax.indexOf(shift + " " + server.name) === -1
      ){
        this.hourmax.push(shift + " " + server.name);
      }
      if(
        server.shiftLeaderScheduled >= server.shiftLeaderPerWeek
        && server.shiftLeaderPerWeek > 0
       && this.leadmax.indexOf(shift + " " + server.name) === -1
      ){
        this.leadmax.push(shift + " " + server.name);
      }
      if(this.leadmax.indexOf(shift + " " + server.name) > -1 || this.hourmax.indexOf(shift + " " + server.name) > -1){
        continue;
      }
      console.log("Scheduling " + server.name + " on " + shift + " as shift leader.")
			this.schedule[shift].section1 = server.name;
			server.shiftLeaderScheduled++;
			server.shiftsScheduled++;
      server.alreadyScheduled[shift] = true;
			if (this.isMorning(shift) !="false") {
        if(server.shifts[this.isMorning(shift)]===true){
				  server.alreadyScheduled[this.isMorning(shift)] = true;
				  this.doubles.push(this.isMorning(shift) + " " + server.name);
        }
			}
      return;
		}
	}
  let problem = "Could not find eligible shift leader on " + shift + ".";
  if(this.hourmaxCheck(shift).length>0){
    problem+= (" The following employees are available but have reached their allotted shifts for the week: " + this.hourmaxCheck(shift));
  }
  if(this.leadmaxFilter(shift).length>0){
    problem+= (" The following employees are available but are already leading their alotted number of shifts for the week: " + this.leadmaxFilter(shift));
  }
  this.problems.push(problem);
}

//The below code fills out the shift with non-shift-leader, non-bartender servers. totalServers represents the total number of people working the shift, including shift leader and bartender.
scheduleRemainder(shift, totalServers=5){
  var sortedEmployees = this.prioritySort(this.employees);
  for(var i =2; i< totalServers; i++){
    var section = "section" + i.toString();
    for (var q = 0; q < sortedEmployees.length; q++) {
		  var server = sortedEmployees[q];
      if (
        server.alsoServer === true &&
        server.shifts[shift] === true
        && server.alreadyScheduled[shift] === false
      ) {
        if(
          server.shiftsScheduled >= server.shiftsPerWeek
          && this.hourmax.indexOf(shift + " " + server.name) === -1
        ) {
          this.hourmax.push(shift + " " + server.name);
          continue;
        }
        console.log("Scheduling " + server.name + " on " + shift + " as " + section + ".")
			  this.schedule[shift][section] = server.name;
			  server.shiftsScheduled++;
        server.alreadyScheduled[shift] = true;
			  if (this.isMorning(shift) !="false") {
          if(server.shifts[this.isMorning(shift)]===true){
				    server.alreadyScheduled[this.isMorning(shift)] = true;
				    this.doubles.push(this.isMorning(shift) + " " + server.name);
          }
			  }
        break;
      }
        continue;
    }
    let problem = ("Could not find employee to work " + section + " on " + shift + ".");
    if(this.doublesCheck(shift).length>0){
      problem+= (" Potential doubles: " + this.doublesCheck(shift));
    }
    if(this.requestCheck(shift).length>0){
      problem+= (". Employees requesting this shift off: " + this.requestCheck(shift)) + ".";
    }
    if(this.hourmaxCheck(shift).length>0){
      problem+= (" The following employees are available but have reached their allotted shifts for the week: " + this.hourmaxCheck(shift));
    }
    this.problems.push(problem);
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

makeSchedule(
  fridayAMServers=this._route.snapshot.queryParams["fridayAMServers"],
  fridayPMServers=this._route.snapshot.queryParams["fridayPMServers"],
  saturdayAMServers=this._route.snapshot.queryParams["saturdayAMServers"],
  saturdayPMServers=this._route.snapshot.queryParams["saturdayPMServers"],
  sundayAMServers=this._route.snapshot.queryParams["sundayAMServers"],
  sundayPMServers=this._route.snapshot.queryParams["sundayPMServers"],
  mondayAMServers=this._route.snapshot.queryParams["mondayAMServers"],
  mondayPMServers=this._route.snapshot.queryParams["mondayAMServers"],
  tuesdayAMServers=this._route.snapshot.queryParams["tuesdayAMServers"],
  tuesdayPMServers=this._route.snapshot.queryParams["tuesdayPMServers"],
  wednesdayAMServers=this._route.snapshot.queryParams["wednesdayAMServers"],
  wednesdayPMServers=this._route.snapshot.queryParams["wednesdayPMServers"],
  thursdayAMServers=this._route.snapshot.queryParams["thursdayAMServers"],
  thursdayPMServers=this._route.snapshot.queryParams["thursdayPMServers"],
  )
  {
    console.log(this.employees);
    this.scheduleBartender("fridayAM");
    this.scheduleBartender("fridayPM");
    this.scheduleBartender("saturdayAM");
    this.scheduleBartender("saturdayPM");
    this.scheduleBartender("sundayAM");
    this.scheduleBartender("sundayPM");
    this.scheduleBartender("thursdayAM");
    this.scheduleBartender("thursdayPM");
    this.scheduleBartender("wednesdayAM");
    this.scheduleBartender("wednesdayPM");
    this.scheduleBartender("tuesdayAM");
    this.scheduleBartender("tuesdayPM");
    this.scheduleBartender("mondayAM");
    this.scheduleBartender("mondayPM");
    this.scheduleShiftLeader("fridayAM");
    this.scheduleShiftLeader("fridayPM");
    this.scheduleShiftLeader("saturdayAM");
    this.scheduleShiftLeader("saturdayPM");
    this.scheduleShiftLeader("sundayAM");
    this.scheduleShiftLeader("sundayPM");
    this.scheduleShiftLeader("thursdayAM");
    this.scheduleShiftLeader("thursdayPM");
    this.scheduleShiftLeader("wednesdayAM");
    this.scheduleShiftLeader("wednesdayPM");
    this.scheduleShiftLeader("tuesdayAM");
    this.scheduleShiftLeader("tuesdayPM");
    this.scheduleShiftLeader("mondayAM");
    this.scheduleShiftLeader("mondayPM");
    this.scheduleRemainder("fridayAM", fridayAMServers);
    this.scheduleRemainder("fridayPM", fridayPMServers);
    this.scheduleRemainder("saturdayAM", saturdayAMServers);
    this.scheduleRemainder("saturdayPM", saturdayPMServers);
    this.scheduleRemainder("sundayAM", sundayAMServers);
    this.scheduleRemainder("sundayPM", sundayPMServers);
    this.scheduleRemainder("thursdayAM", thursdayAMServers);
    this.scheduleRemainder("thursdayPM", thursdayPMServers);
    this.scheduleRemainder("wednesdayAM", wednesdayAMServers);
    this.scheduleRemainder("wednesdayPM", wednesdayPMServers);
    this.scheduleRemainder("tuesdayAM", tuesdayAMServers);
    this.scheduleRemainder("tuesdayPM", tuesdayPMServers);
    this.scheduleRemainder("mondayAM", mondayAMServers);
    this.scheduleRemainder("mondayPM", mondayPMServers);
    console.log(this.schedule);
    for(let q=0; q<this.employees.length;q++){
      if(this.employees[q].shiftsPerWeek > this.employees[q].shiftsScheduled){
        this.problems.push(this.employees[q].name + " did not get the desired amount of shifts (" + this.employees[q].shiftsPerWeek + " expected, " + this.employees[q].shiftsScheduled + " received).")
      }
    }
    //console.log(this.schedule);
    console.log("Potential problems with this schedule:", this.problems);
    return this.schedule;
  }
  //employees=[];
  getEmployees() {
    let observable= this._dataService.getEmployees();
    observable.subscribe(data => {
        console.log("HERE IS THE OBSERVABLE", data);
        this.employees = data['employees'];
        console.log("HERE ARE THE EMPLOYEES: ", this.employees);

        //The below code automatically assigns extra properties to each employee to help the algorithm make decisions
        for (var i = 0; i < this.employees.length; i++) {
            var server = this.employees[i];
            //We keep track of the number of shifts that have been scheduled this week so that the limits will not be exceeded.
            server.shiftsScheduled = 0;
            server.bartenderScheduled = 0;
            server.shiftLeaderScheduled = 0;
            server.availability = 0;
            server.alreadyScheduled = {
              mondayAM:false,
              mondayPM:false,
              tuesdayAM:false,
              tuesdayPM:false,
              wednesdayAM:false,
              wednesdayPM:false,
              thursdayAM:false,
              fridayAM:false,
              fridayPM:false,
              saturdayAM:false,
              saturdayPM:false,
              sundayAM:false,
              sundayPM:false
            }
            for (var key in server.shifts) {
                let requestSearch = key.toString()+"Request";
                //console.log(requestSearch);
                //console.log(server.name, server.requests, server.requests.tuesdayPMRequest);
                if (server.requests[requestSearch] === true) {
                  console.log ("REQUEST FOUND FOR " + server.name + " ON " + key.toString());
                  server.shifts[key] = false;
                  this.requestList.push(key + " " + server.name);
                }
                if (server.shifts[key] === true) {
                    server.availability++;
                }
            }
            server.priority = server.shiftsPerWeek + 14 - server.availability;
            if(server.alsoServer===false){
              server.priority+=7;
            }
            //Priority decides who is scheduled when multiple employees can work the same shift. An employee will receive higher priority if there are less other shifts available for them, to guarantee that someone who can only work one particular shift will always get it. An employee who can work more shifts per week will receive higher priority; their priority will be higher than that of an employee with open availability who can only work once a week, but lower than that of a server who can only work one specific shift.  Also, an employee who only bartends and never serves will receive a sizable bump in priority for bartending shifts.
        }
        this.schedule = this.makeSchedule();
        console.log(this.schedule.fridayAM);
        console.log("HERE IS SCHEDULE: ", this.schedule);
        this.shifts= Object.entries(this.schedule);
        this.newShifts=[];
        for(let i=0; i<this.shifts.length;i++){
          var temp=[];
          
          var parts = Object.entries(this.shifts[i][1]);
          for( let partNum=0; partNum < parts.length; partNum++ ){
              temp.push({
                  section:    parts[partNum][0],
                  employee:    parts[partNum][1]
              })
          }
          this.newShifts.push(temp);
      }
        console.log(this.newShifts);
        // for(var shift in this.shifts){
        //   console.log(this.schedule.shift)
        // }
        console.log(this.shifts);
        //console.log("HERE ARE SHIFTS: ", this.shifts);
    })
}
}