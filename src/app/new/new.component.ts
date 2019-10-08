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
      saturdayPM: true,
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
      },
  };
  constructor(private _dataService: HttpService, private _route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
  }
addEmployee(){
  var validationErrors = [];
  const data = {
    name: this.employeeToAdd.name,
    shiftsPerWeek: this.employeeToAdd.shiftsPerWeek,
    bartenderPerWeek: this.employeeToAdd.bartenderPerWeek,
    alsoServer: this.employeeToAdd.alsoServer,
    shiftLeaderPerWeek: this.employeeToAdd.shiftLeaderPerWeek,
    shifts: this.employeeToAdd.shifts,
  };
  console.log("DATA: ", data);
  if(data.name.length < 1){
    validationErrors.push("Name has not been entered.");
  }
  if(!data.shiftsPerWeek && data.shiftsPerWeek !==0){
    validationErrors.push("Employee has not been assigned a weekly shift limit.");
  }
  if(!data.bartenderPerWeek && data.bartenderPerWeek !==0){
    validationErrors.push("Employee has not been assigned a weekly bartender shift limit.");
  }
  if(!data.shiftLeaderPerWeek && data.shiftLeaderPerWeek !==0){
    validationErrors.push("Employee has not been assigned a weekly shift leader limit.")
  }
  console.log("Errors: " + validationErrors);
  console.log("ADDING EMPLOYEE FROM NEW.COMPONENT.TS")
  if(validationErrors.length > 0){
    let errorMessage = "Employee could not be created for the following reasons:\n"
    for (let i = 0; i < validationErrors.length; i++){
      errorMessage += validationErrors[i];
      if(i<validationErrors.length-1){
        errorMessage+= "\n";
      }
    }
    window.alert(errorMessage);
  }
  else{
  let observable= this._dataService.addEmployee({newEmployee: data});
  observable.subscribe(data => console.log("Got our data!", data));
  console.log("ROUTER NAVIGATE?")
  this.router.navigate(['/employees'])
  }
}
}
