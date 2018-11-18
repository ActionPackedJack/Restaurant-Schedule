import {Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
  newSchedule={
    mondayAMServers:4,
    mondayPMServers:4,
    tuesdayAMServers:4,
    tuesdayPMServers:4,
    wednesdayAMServers:4,
    wednesdayPMServers:4,
    thursdayAMServers:5,
    thursdayPMServers:5,
    fridayAMServers:6,
    fridayPMServers:6,
    saturdayAMServers:6,
    saturdayPMServers:6,
    sundayAMServers:4,
    sundayPMServers:4
  }

  constructor(private _dataService: HttpService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
generateSchedule(){
  const data ={
    mondayAMServers: this.newSchedule.mondayAMServers,
    mondayPMServers: this.newSchedule.mondayPMServers,
    tuesdayAMServers: this.newSchedule.tuesdayAMServers,
    tuesdayPMServers: this.newSchedule.tuesdayPMServers,
    wednesdayAMServers: this.newSchedule.wednesdayAMServers,
    wednesdayPMServers: this.newSchedule.wednesdayPMServers,
    thursdayAMServers: this.newSchedule.thursdayAMServers,
    thursdayPMServers: this.newSchedule.thursdayPMServers,
    fridayAMServers: this.newSchedule.fridayAMServers,
    fridayPMServers: this.newSchedule.fridayPMServers,
    saturdayAMServers: this.newSchedule.saturdayAMServers,
    saturdayPMServers: this.newSchedule.saturdayPMServers,
    sundayAMServers: this.newSchedule.sundayAMServers,
    sundayPMServers: this.newSchedule.sundayPMServers
  };
  this.router.navigate(['/schedule'],{queryParams:{
    mondayAMServers:data.mondayAMServers,
    mondayPMServers:data.mondayPMServers,
    tuesdayAMServers:data.tuesdayAMServers,
    tuesdayPMServers:data.tuesdayPMServers,
    wednesdayAMServers:data.wednesdayAMServers,
    wednesdayPMServers:data.wednesdayPMServers,
    thursdayAMServers:data.thursdayAMServers,
    thursdayPMServers:data.thursdayPMServers,
    fridayAMServers:data.fridayAMServers,
    fridayPMServers:data.fridayPMServers,
    saturdayAMServers:data.saturdayAMServers,
    saturdayPMServers:data.saturdayPMServers,
    sundayAMServers:data.sundayAMServers,
    sundayPMServers:data.sundayPMServers
  }})

}
}
