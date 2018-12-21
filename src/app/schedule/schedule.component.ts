import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute, Params } from "@angular/router";
import { HttpService } from "../http.service";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "keys",
  pure: false
})
export class KeysPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value);
  }
}

@Pipe({
  name: "values",
  pure: false
})
export class ValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}

@Component({
  selector: "app-list",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"]
})
export class ScheduleComponent implements OnInit {
  employees: any[];
  schedule: any;
  problems: any[];
  newProblems: any[];
  doubles: any[];
  formerDoubles: any[];
  hourmax: any[];
  formerHourmax: any[];
  barmax: any[];
  formerBarmax: any[];
  leadmax: any[];
  formerLeadmax: any[];
  requestList: any[];
  formerRequestList: any[];
  scrutinized: any;
  shifts;
  newShifts;
  scrutinizedShift;
  constructor(
    private _dataService: HttpService,
    private _route: ActivatedRoute,
    private router: Router
  ) {
    this.employees = [];
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
      sundayPM: {}
    };
    this.problems = [];
    this.requestList = [];
    this.formerRequestList = [];
    this.doubles = [];
    this.formerDoubles = [];
    this.hourmax = [];
    this.formerHourmax = [];
    this.barmax = [];
    this.formerBarmax = [];
    this.leadmax = [];
    this.formerLeadmax = [];
    this.scrutinized = {
      name: "",
      roster: {},
      requests: [],
      doubles: [],
      hourmax: [],
      leadmax: [],
      barmax: [],
      vacancies: [],
      eligible: []
    };
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

  moreInfo(shift) {
    console.log("RUNNING moreInfo for shift: ", shift);
    this.scrutinized.name = shift;
    this.scrutinized.roster = [];
    this.scrutinizedShift = Object.entries(this.schedule[shift]);
    //console.log(this.scrutinizedShift);
    for (let i = 0; i < this.scrutinizedShift.length; i++) {
      var temp = [] as object[];
      temp.push({
        section: this.scrutinizedShift[i][0],
        employee: this.scrutinizedShift[i][1]
      });
      this.scrutinized.roster.push(temp);
    }
    console.log("ROSTER: ", this.scrutinized.roster);
    if (this.requestCheck(shift).length > 0) {
      this.scrutinized.requests = this.requestCheck(shift);
    }
    if (this.hourmaxCheck(shift).length > 0) {
      this.scrutinized.hourmax = this.hourmaxCheck(shift);
    }
    if (this.barmaxCheck(shift).length > 0) {
      this.scrutinized.barmax = this.barmaxCheck(shift);
    }
    if (this.leadmaxCheck(shift).length > 0) {
      this.scrutinized.requests = this.leadmaxCheck(shift);
    }
    if (this.doublesCheck(shift).length > 0) {
      this.scrutinized.doubles = this.doublesCheck(shift);
    }
    for(let employee of this.employees){
      if(employee.shifts[shift]===true && employee.alreadyScheduled[shift]===false && employee.requests[shift+"Request"]===false && employee.shiftsPerWeek> employee.shiftsScheduled){
        this.scrutinized.eligible.push(employee.name);
      }
    }
    console.log("ELIGIBLE: ", this.scrutinized.eligible);
    this.scrutinized.vacancies = [];
    for (let i = 0; i < this.problems.length; i++) {
      if (this.problems[i].indexOf(shift) > -1) {
        if (this.problems[i].indexOf("shift leader") > -1) {
          this.scrutinized.vacancies.push("section1");
        } else if (this.problems[i].indexOf("bartender") > -1) {
          this.scrutinized.vacancies.push("bartender");
        } else {
          this.scrutinized.vacancies.push(
            this.problems[i].slice(
              this.problems[i].indexOf("work") + 5,
              this.problems[i].indexOf(" on ")
            )
          );
        }
      }
    }
    return this.scrutinized;
  }

  //The below function checks whether the shift currently being scheduled is a morning. If it is, it returns the night shift of the same day.
  isMorning(shift) {
    var str = shift.toString();
    if (str[str.length - 2] === "P") {
      return "false";
    }
    var night = str.slice(0, str.length - 2) + "PM";
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
  doublesCheck(shift) {
    var result = [];
    for (let i = 0; i < this.doubles.length; i++) {
      if (this.doubles[i].indexOf(shift) === 0) {
        result.push(
          this.doubles[i].slice(shift.length + 1, this.doubles[i].length)
        );
      }
    }
    return result;
  }
  //In the event that a shift cannot be filled, the below code checks whether anyone has requested it off.
  requestCheck(shift) {
    var result = [];
    for (let i = 0; i < this.requestList.length; i++) {
      if (this.requestList[i].indexOf(shift) === 0) {
        result.push(
          this.requestList[i].slice(shift.length, this.requestList[i].length)
        );
      }
    }
    return result;
  }
  //In the event that a shift cannot be filled, the below code checks whether anyone could work it but has reached their allotted shifts for the week.
  hourmaxCheck(shift) {
    var result = [];
    for (let i = 0; i < this.hourmax.length; i++) {
      if (this.hourmax[i].indexOf(shift) === 0) {
        result.push(
          this.hourmax[i].slice(shift.length + 1, this.hourmax[i].length)
        );
      }
    }
    return result;
  }
  //The below functions work like hourmaxCheck but check for bartender and shift leader designations.
  leadmaxCheck(shift) {
    let result = [];
    for (let i = 0; i < this.leadmax.length; i++) {
      if (this.leadmax[i].indexOf(shift) === 0) {
        result.push(
          this.leadmax[i].slice(shift.length + 1, this.leadmax[i].length)
        );
      }
    }
    return result;
  }
  barmaxCheck(shift) {
    let result = [];
    for (let i = 0; i < this.barmax.length; i++) {
      if (this.barmax[i].indexOf(shift) === 0) {
      }
    }
    return result;
  }
  //The below functions check for whether an employee has maxed their hours AND bartender/shift leader allotments so that they won't show up on both problem reports.
  barmaxFilter(shift) {
    let result = this.barmaxCheck(shift);
    for (let i = result.length; i >= 0; i--) {
      if (this.hourmaxCheck(shift).indexOf(result[i]) > -1) {
        result[i] = result[result.length - 1];
        result.pop();
        i++;
      }
    }
    return result;
  }
  leadmaxFilter(shift) {
    let result = this.leadmaxCheck(shift);
    for (let i = result.length; i >= 0; i--) {
      if (this.hourmaxCheck(shift).indexOf(result[i]) > -1) {
        result[i] = result[result.length - 1];
        result.pop();
        i++;
      }
    }
    return result;
  }
  //The below function schedules the bartender for a single shift. This will be run on every day first, so that qualified bartenders will not be scheduled to serving shifts until all bartender shifts are filled.
  scheduleBartender(shift) {
    var sortedEmployees = this.prioritySort(this.employees);
    for (var i = 0; i < sortedEmployees.length; i++) {
      var server = sortedEmployees[i];
      if (
        server.shifts[shift] === true &&
        server.alreadyScheduled[shift] !== true
      ) {
        if (
          server.shiftsScheduled >= server.shiftsPerWeek &&
          this.hourmax.indexOf(shift + " " + server.name) === -1
        ) {
          this.hourmax.push(shift + " " + server.name);
        }
        if (
          server.bartenderScheduled >= server.bartenderPerWeek &&
          server.bartenderPerWeek > 0 &&
          this.barmax.indexOf(shift + " " + server.name) === -1
        ) {
          this.barmax.push(shift + " " + server.name);
        }
        if (
          this.barmax.indexOf(shift + " " + server.name) > -1 ||
          this.hourmax.indexOf(shift + " " + server.name) > -1
        ) {
          continue;
        }
        console.log(
          "Scheduling " + server.name + " on " + shift + " as bartender."
        );
        this.schedule[shift].bartender = server.name;
        server.bartenderScheduled++;
        server.shiftsScheduled++;
        server.alreadyScheduled[shift] = true;
        //If this is a morning shift, the below code checks that server's availability for the corresponding night shift. If they are available, their availability will be set to false but a note will be made in their file that this has happened in case the manager needs to schedule someone to a double shift.
        if (this.isMorning(shift) != "false") {
          if (server.shifts[this.isMorning(shift)] === true) {
            server.alreadyScheduled[this.isMorning(shift)] = true;
            this.doubles.push(this.isMorning(shift) + " " + server.name);
          }
        }
        return;
      }
    }
    // let problem = "Could not find eligible bartender on " + shift + ".";
    // if (this.hourmaxCheck(shift).length > 0) {
    //   problem =
    //     problem + " " + this.hourmaxCheck(shift).length + " overtime options.";
    // }
    // if (this.barmaxFilter(shift).length > 0) {
    //   problem =
    //     problem +
    //     " " +
    //     this.barmaxCheck(shift).length +
    //     " bartender overschedule options.";
    // }
    // this.problems.push(problem);
  }
  //The below code is nearly identical to the bartender scheduling logic, but handles shift leaders.
  scheduleShiftLeader(shift) {
    for (var key in this.schedule) {
      if (key.toString() === shift.toString()) {
        var shift: any = key;
      }
    }
    var sortedEmployees = this.prioritySort(this.employees);
    for (var i = 0; i < sortedEmployees.length; i++) {
      var server = sortedEmployees[i];
      if (
        server.alsoServer === true &&
        server.shifts[shift] === true &&
        server.alreadyScheduled[shift] !== true
      ) {
        if (
          server.shiftsScheduled >= server.shiftsPerWeek &&
          this.hourmax.indexOf(shift + " " + server.name) === -1
        ) {
          this.hourmax.push(shift + " " + server.name);
        }
        if (
          server.shiftLeaderScheduled >= server.shiftLeaderPerWeek &&
          server.shiftLeaderPerWeek > 0 &&
          this.leadmax.indexOf(shift + " " + server.name) === -1
        ) {
          this.leadmax.push(shift + " " + server.name);
        }
        if (
          this.leadmax.indexOf(shift + " " + server.name) > -1 ||
          this.hourmax.indexOf(shift + " " + server.name) > -1
        ) {
          continue;
        }
        console.log(
          "Scheduling " + server.name + " on " + shift + " as shift leader."
        );
        this.schedule[shift].section1 = server.name;
        server.shiftLeaderScheduled++;
        server.shiftsScheduled++;
        server.alreadyScheduled[shift] = true;
        if (this.isMorning(shift) != "false") {
          if (server.shifts[this.isMorning(shift)] === true) {
            server.alreadyScheduled[this.isMorning(shift)] = true;
            this.doubles.push(this.isMorning(shift) + " " + server.name);
          }
        }
        return;
      }
    }
    // let problem = "Could not find eligible shift leader on " + shift + ".";
    // if (this.hourmaxCheck(shift).length > 0) {
    //   problem =
    //     problem + " " + this.hourmaxCheck(shift).length + " overtime options.";
    // }
    // if (this.leadmaxFilter(shift).length > 0) {
    //   problem =
    //     problem +
    //     " " +
    //     this.leadmaxFilter(shift).length +
    //     " leader overschedule options.";
    // }
    // this.problems.push(problem);
  }

  //The below code fills out the shift with non-shift-leader, non-bartender servers. totalServers represents the total number of people working the shift, including shift leader and bartender.
  scheduleRemainder(shift, totalServers = 5) {
    var sortedEmployees = this.prioritySort(this.employees);
    //outerloop:
    for (var i = 2; i < totalServers; i++) {
      var section = "section" + i.toString();
      innerloop: for (var q = 0; q < sortedEmployees.length; q++) {
        var server = sortedEmployees[q];
        if (
          server.alsoServer === true &&
          server.shifts[shift] === true &&
          server.alreadyScheduled[shift] !== true
        ) {
          if (server.shiftsScheduled >= server.shiftsPerWeek) {
            if (this.hourmax.indexOf(shift + " " + server.name) === -1) {
              //console.log("Adding to hourmax: " + shift + " " + server.name);
              this.hourmax.push(shift + " " + server.name);
            }
            continue innerloop;
          }
          console.log(
            "Scheduling " +
              server.name +
              " on " +
              shift +
              " as " +
              section +
              "."
          );
          this.schedule[shift][section] = server.name;
          server.shiftsScheduled++;
          server.alreadyScheduled[shift] = true;
          if (this.isMorning(shift) != "false") {
            if (server.shifts[this.isMorning(shift)] === true) {
              server.alreadyScheduled[this.isMorning(shift)] = true;
              this.doubles.push(this.isMorning(shift) + " " + server.name);
            }
          }
          break innerloop;
        }
      }
      // if (!this.schedule[shift][section]) {
      //   let problem =
      //     "Could not find employee to work " + section + " on " + shift + ".";
      //   if (this.doublesCheck(shift).length > 0) {
      //     problem =
      //       problem +
      //       " " +
      //       this.doublesCheck(shift).length +
      //       " potential doubles.";
      //   }
      //   if (this.requestCheck(shift).length > 0) {
      //     problem =
      //       problem + " " + this.requestCheck(shift).length + " requests.";
      //   }
      //   if (this.hourmaxCheck(shift).length > 0) {
      //     problem =
      //       problem +
      //       " " +
      //       this.hourmaxCheck(shift).length +
      //       " overtime options.";
      //   }
      //   this.problems.push(problem);
      // }
    }
  }

  makeSchedule(
    fridayAMServers = this._route.snapshot.queryParams["fridayAMServers"],
    fridayPMServers = this._route.snapshot.queryParams["fridayPMServers"],
    saturdayAMServers = this._route.snapshot.queryParams["saturdayAMServers"],
    saturdayPMServers = this._route.snapshot.queryParams["saturdayPMServers"],
    sundayAMServers = this._route.snapshot.queryParams["sundayAMServers"],
    sundayPMServers = this._route.snapshot.queryParams["sundayPMServers"],
    mondayAMServers = this._route.snapshot.queryParams["mondayAMServers"],
    mondayPMServers = this._route.snapshot.queryParams["mondayAMServers"],
    tuesdayAMServers = this._route.snapshot.queryParams["tuesdayAMServers"],
    tuesdayPMServers = this._route.snapshot.queryParams["tuesdayPMServers"],
    wednesdayAMServers = this._route.snapshot.queryParams["wednesdayAMServers"],
    wednesdayPMServers = this._route.snapshot.queryParams["wednesdayPMServers"],
    thursdayAMServers = this._route.snapshot.queryParams["thursdayAMServers"],
    thursdayPMServers = this._route.snapshot.queryParams["thursdayPMServers"]
  ) {
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
    //console.log("Potential problems with this schedule:", this.problems);
    this.problemCheck();
    //console.log(this.employees[3]);
    //this.patch("Lord Nightstalker","saturdayPM", "section4");
    console.log("FORMER REQUEST LIST: ", this.formerRequestList);
    //this.remove("Manuel", "fridayAM", "section2");
    //console.log(this.employees[3]);
    return this.schedule;
  }
  problemCheck() {
    this.newProblems = [];
    for (let q = 0; q < this.employees.length; q++) {
      if (
        this.employees[q].shiftsPerWeek > this.employees[q].shiftsScheduled &&
        this.employees[q].hiatus === false
      ) {
        this.newProblems.push(
          this.employees[q].name +
            " did not get the desired amount of shifts (" +
            this.employees[q].shiftsPerWeek +
            " expected, " +
            this.employees[q].shiftsScheduled +
            " received)."
        );
      }
      if (
        this.employees[q].shiftsPerWeek < this.employees[q].shiftsScheduled &&
        this.employees[q].hiatus === false
      ) {
        this.newProblems.push(
          this.employees[q].name +
            " received more shifts than desired (" +
            this.employees[q].shiftsPerWeek +
            " expected, " +
            this.employees[q].shiftsScheduled +
            " received)."
        );
      }
    }
    for (var shift in this.schedule) {
      if (!this.schedule[shift].bartender) {
        let problem = "Could not find eligible bartender on " + shift + ".";
        if (this.hourmaxCheck(shift).length > 0) {
          problem =
            problem +
            " " +
            this.hourmaxCheck(shift).length +
            " overtime options.";
        }
        if (this.barmaxFilter(shift).length > 0) {
          problem =
            problem +
            " " +
            this.barmaxCheck(shift).length +
            " bartender overschedule options.";
        }
        this.newProblems.push(problem);
      }
      if (!this.schedule[shift].section1) {
        let problem = "Could not find eligible shift leader on " + shift + ".";
        if (this.hourmaxCheck(shift).length > 0) {
          problem =
            problem +
            " " +
            this.hourmaxCheck(shift).length +
            " overtime options.";
        }
        if (this.leadmaxFilter(shift).length > 0) {
          problem =
            problem +
            " " +
            this.leadmaxCheck(shift).length +
            " leader overschedule options.";
        }
        this.newProblems.push(problem);
      }
      for (
        let i = 2;
        i < this._route.snapshot.queryParams[shift + "Servers"];
        i++
      ) {
        let section = "section" + i;
        if (!this.schedule[shift][section]) {
          let problem =
            "Could not find employee to work " + section + " on " + shift + ".";
          if (this.doublesCheck(shift).length > 0) {
            problem =
              problem +
              " " +
              this.doublesCheck(shift).length +
              " potential doubles.";
          }
          if (this.requestCheck(shift).length > 0) {
            problem =
              problem + " " + this.requestCheck(shift).length + " requests.";
          }
          if (this.hourmaxCheck(shift).length > 0) {
            problem =
              problem +
              " " +
              this.hourmaxCheck(shift).length +
              " overtime options.";
          }
          this.newProblems.push(problem);
        }
      }
    }
    console.log("NEWPROBLEMS: ", this.newProblems);
    this.problems = this.newProblems;
  }
  //The below method pulls the rest of the data for an employee when only the name is available.
  findEmployeeByName(name) {
    console.log("SEARCHING FOR " + name + "...");
    for (var x in this.employees) {
      console.log(this.employees[x].name);
      if (this.employees[x].name === name) {
        console.log("FOUND " + name);
        return this.employees[x];
      }
    }
  }
  //The below function executes when a server is manually scheduled after the automatic schedule creation.
  patch(employee, shift, section) {
    //console.log("EMPLOYEE: ", employee);
    console.log("Patching " + employee + " as " + section + " on " + shift);
    var server = this.findEmployeeByName(employee);
    //console.log("SERVER: " +server);
    //console.log("PATCHING WITH SERVER.NAME:", server.name);
    // for(var x in this.employees){
    //   if(this.employees[x].name===employee){
    //     var server = this.employees[x];
    //     break;
    //   }
    // }
    this.schedule[shift][section] = server.name;
    server.shiftsScheduled++;
    if (shift === "bartender") {
      server.bartenderScheduled++;
    }
    if (shift === "section1") {
      server.shiftLeaderScheduled++;
    }
    server.alreadyScheduled[shift] === true;
    if (this.isMorning(shift) != "false") {
      if (server.shifts[this.isMorning(shift)] === true) {
        server.alreadyScheduled[this.isMorning(shift)] = false;
      }
    }
    for (let i = 0; i < this.doubles.length; i++) {
      if (
        this.doubles[i].indexOf(server.name) > -1 &&
        this.doubles[i].indexOf(shift) > -1
      ) {
        this.formerDoubles.push(this.doubles[i]);
        this.doubles[i] = this.doubles[this.doubles.length - 1];
        this.doubles.pop();
        break;
      }
    }
    for (let i = 0; i < this.requestList.length; i++) {
      if (
        this.requestList[i].indexOf(server.name) > -1 &&
        this.requestList[i].indexOf(shift) > -1
      ) {
        this.formerRequestList.push(this.requestList[i]);
        this.requestList[i] = this.requestList[this.requestList.length - 1];
        this.requestList.pop();
        break;
      }
    }
    for (let i = 0; i < this.hourmax.length; i++) {
      if (
        this.hourmax[i].indexOf(server.name) > -1 &&
        this.hourmax[i].indexOf(shift) > -1
      ) {
        this.formerHourmax.push(this.hourmax[i]);
        this.hourmax[i] = this.hourmax[this.hourmax.length - 1];
        this.hourmax.pop();
        break;
      }
    }
    for (let i = 0; i < this.leadmax.length; i++) {
      if (
        this.leadmax[i].indexOf(server.name) > -1 &&
        this.leadmax[i].indexOf(shift) > -1
      ) {
        this.formerLeadmax.push(this.leadmax[i]);
        this.leadmax[i] = this.leadmax[this.leadmax.length - 1];
        this.leadmax.pop();
        break;
      }
    }
    for (let i = 0; i < this.barmax.length; i++) {
      if (
        this.barmax[i].indexOf(server.name) > -1 &&
        this.barmax[i].indexOf(shift) > -1
      ) {
        this.formerBarmax.push(this.barmax[i]);
        this.barmax[i] = this.barmax[this.barmax.length - 1];
        this.barmax.pop();
        break;
      }
    }
    console.log("THIS.SCRUTINIZED.ELIGIBLE: ", this.scrutinized.eligible);
    console.log("SERVER.NAME: ", server.name);
    for (let i = 0; i < this.scrutinized.eligible.length; i++) {
      if (
        this.scrutinized.eligible[i]===server.name
      ) {
        this.scrutinized.eligible[i] = this.scrutinized.eligible[this.scrutinized.eligible.length - 1];
        this.scrutinized.eligible.pop();
        break;
      }
    }
    for (let i = 0; i < this.schedule[shift].length; i++) {

    }
    console.log("PATCHED SHIFT: ", this.schedule[shift]);
    this.problemCheck();
    this.moreInfo(shift);
    this.updateSchedule();
  }
  remove(employee, shift, section) {
    //console.log("EMPLOYEE: ", employee);
    console.log("Removing " + employee + " from " + section + " on " + shift);
    var server = this.findEmployeeByName(employee);
    delete this.schedule[shift][section];
    server.shiftsScheduled--;
    if (section === "bartender") {
      server.bartenderScheduled--;
    }
    if (section === "section1") {
      server.shiftLeaderScheduled--;
    }
    server.alreadyScheduled[shift] = false;
    console.log("SERVER ALREADY: ", server.alreadyScheduled[shift]);
    if (this.isMorning(shift) != "false") {
      if (server.shifts[this.isMorning(shift)] === true) {
        server.alreadyScheduled[this.isMorning(shift)] = false;
        //this.doubles.push(this.isMorning(shift) + " " + server.name);
      }
    }
    for (let i = 0; i < this.formerDoubles.length; i++) {
      if (
        this.formerDoubles[i].indexOf(server.name) > -1 &&
        this.formerDoubles[i].indexOf(shift) > -1
      ) {
        this.doubles.push(this.formerDoubles[i]);
        this.formerDoubles[i] = this.formerDoubles[this.formerDoubles.length - 1];
        this.formerDoubles.pop();
        break;
      }
    }
    for (let i = 0; i < this.formerRequestList.length; i++) {
      if (
        this.formerRequestList[i].indexOf(server.name) > -1 &&
        this.formerRequestList[i].indexOf(shift) > -1
      ) {
        this.requestList.push(this.formerRequestList[i]);
        this.formerRequestList[i] = this.formerRequestList[this.formerRequestList.length - 1];
        this.formerRequestList.pop();
        break;
      }
    }
    for (let i = 0; i < this.formerHourmax.length; i++) {
      if (
        this.formerHourmax[i].indexOf(server.name) > -1 &&
        this.formerHourmax[i].indexOf(shift) > -1
      ) {
        this.hourmax.push(this.formerHourmax[i]);
        this.formerHourmax[i] = this.formerHourmax[this.formerHourmax.length - 1];
        this.formerHourmax.pop();
        break;
      }
    }
    for (let i = 0; i < this.formerLeadmax.length; i++) {
      if (
        this.formerLeadmax[i].indexOf(server.name) > -1 &&
        this.formerLeadmax[i].indexOf(shift) > -1
      ) {
        this.leadmax.push(this.leadmax[i]);
        this.formerLeadmax[i] = this.formerLeadmax[this.formerLeadmax.length - 1];
        this.formerLeadmax.pop();
        break;
      }
    }
    for (let i = 0; i < this.formerBarmax.length; i++) {
      if (
        this.formerBarmax[i].indexOf(server.name) > -1 &&
        this.formerBarmax[i].indexOf(shift) > -1
      ) {
        this.barmax.push(this.formerBarmax[i]);
        this.formerBarmax[i] = this.formerBarmax[this.formerBarmax.length - 1];
        this.formerBarmax.pop();
        break;
      }
    }
    // for (let i = 0; i < this.schedule[shift].length; i++) {

    // }
    console.log("TRIMMED SHIFT: ", this.schedule[shift]);
    this.problemCheck();
    this.moreInfo(shift);
    this.updateSchedule();
  }
  updateSchedule(){
    this.shifts = Object.entries(this.schedule);
    this.newShifts = [];
    for (let i = 0; i < this.shifts.length; i++) {
      var temp = [];
      var parts = Object.entries(this.shifts[i][1]);
      for (let partNum = 0; partNum < parts.length; partNum++) {
        temp.push({
          section: parts[partNum][0],
          employee: parts[partNum][1]
        });
      }
      this.newShifts.push(temp);
    }
    console.log("NEWSHIFTS: ", this.newShifts);
  }
  getEmployees() {
    let observable = this._dataService.getEmployees();
    observable.subscribe(data => {
      console.log("HERE IS THE OBSERVABLE", data);
      this.employees = data["employees"];
      console.log("HERE ARE THE EMPLOYEES: ", this.employees);

      //The below code automatically assigns extra properties to each employee to help the algorithm make decisions
      for (var i = 0; i < this.employees.length; i++) {
        var server = this.employees[i];
        //We keep track of the number of shifts that have been scheduled this week so that the limits will not be exceeded.
        server.shiftsScheduled = 0;
        server.bartenderScheduled = 0;
        server.shiftLeaderScheduled = 0;
        server.availability = 0;
        //The below code checks whether the employee has requested the entire week off, in order to keep someone who is on hiatus from being recommended for shifts.
        server.hiatus = true;
        for (let key in server.requests) {
          if (server.requests[key] === false) {
            server.hiatus = false;
          }
        }
        //We keep track of whether an employee has already been scheduled to a particular shift so that they will not work two sections on the same shift.
        server.alreadyScheduled = {
          mondayAM: false,
          mondayPM: false,
          tuesdayAM: false,
          tuesdayPM: false,
          wednesdayAM: false,
          wednesdayPM: false,
          thursdayAM: false,
          fridayAM: false,
          fridayPM: false,
          saturdayAM: false,
          saturdayPM: false,
          sundayAM: false,
          sundayPM: false
        };
        for (var key in server.shifts) {
          let requestSearch = key.toString() + "Request";
          //console.log(requestSearch);
          //console.log(server.name, server.requests, server.requests.tuesdayPMRequest);
          if (server.requests[requestSearch] === true) {
            // console.log(
            //   "REQUEST FOUND FOR " + server.name + " ON " + key.toString()
            // );
            server.shifts[key] = false;
            if (server.hiatus === false) {
              this.requestList.push(key + server.name);
            }
          }
          if (server.shifts[key] === true) {
            server.availability++;
          }
        }
        server.priority = server.shiftsPerWeek + 14 - server.availability;
        if (server.alsoServer === false) {
          server.priority += 7;
        }
        //Priority decides who is scheduled when multiple employees can work the same shift. An employee will receive higher priority if there are less other shifts available for them, to guarantee that someone who can only work one particular shift will always get it. An employee who can work more shifts per week will receive higher priority; their priority will be higher than that of an employee with open availability who can only work once a week, but lower than that of a server who can only work one specific shift.  Also, an employee who only bartends and never serves will receive a sizable bump in priority for bartending shifts.
      }
      this.schedule = this.makeSchedule();
      console.log("HERE IS SCHEDULE: ", this.schedule);
      this.updateSchedule();
    });
  }
}
