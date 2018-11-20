import {Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private _dataService: HttpService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }
  employees=[];
  getEmployees(){
  let observable= this._dataService.getEmployees();
  observable.subscribe(data => {
    console.log("HERE IS THE OBSERVABLE", data);
    this.employees = data['employees'];
    console.log("EMPLOYEES: ", this.employees);
    })
  }
}