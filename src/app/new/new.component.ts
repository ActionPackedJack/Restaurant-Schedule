import {Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  employeeToAdd={
    name: '', 
    shiftsPerWeek: 5, 
    bartenderPerWeek: 0,
    shiftLeaderPerWeek: 0,
    alsoServer: true,
    shifts: {
			mondayAM: true,
			mondayPM: true,
			tuesdayAM: true,
			tuesdayPM: true,
			wednesdayAM: true,
			wednesdayPM: true,
			thursdayAM: true,
			thursdayPM: true,
			fridayAM: true,
			fridayPM: true,
			saturdayAM: true,
			sundayAM: true,
			sundayPM: true,
    },
    requests: {
      mondayAMRequest: false,
      mondayPMRequest: false,
      tuesdayAMRequest: false,
      tuesdayPMRequest: false,
      wednesdayAMRequest: false,
      wednesdayPMRequest: false,
      thursdayAMRequest: false,
      thursdayPMRequest: false,
      fridayAMRequest: false,
      fridayPMRequest: false,
      saturdayAMRequest: false,
      saturdayPMRequest: false,
      sundayAMRequest: false,
      sundayPMRequest: false,
      }
  };
  constructor(private _dataService: HttpService, private _route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
  }
addEmployee(){
  const data = {
    name: this.employeeToAdd.name,
    shiftsPerWeek: this.employeeToAdd.shiftsPerWeek,
    bartenderPerWeek: this.employeeToAdd.bartenderPerWeek,
    alsoServer: this.employeeToAdd.alsoServer,
    shiftLeaderPerWeek: this.employeeToAdd.shiftLeaderPerWeek,
    shifts: this.employeeToAdd.shifts,
  };
  console.log("ADDING EMPLOYEE FROM NEW.COMPONENT.TS")
  let observable= this._dataService.addEmployee({newEmployee: data});
  observable.subscribe(data => console.log("Got our data!", data));
}
}
