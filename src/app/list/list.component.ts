import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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