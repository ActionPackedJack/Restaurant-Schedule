import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employee;
  constructor(private _dataService: HttpService, private _route: ActivatedRoute, private router: Router) { }
  id;
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id=params['id'];
      console.log("ID: ", this.id);
    })
    console.log("WILL WE RUN GETONEEMPLOYEE?")
    this.getOneEmployee(this.id);
  }
  getOneEmployee(id){
    console.log("YES WE WILL! AND THE ID IS ", id)
  let observable= this._dataService.getOneEmployee(id);
  observable.subscribe(data => {
    console.log("HERE IS THE OBSERVABLE", data);
    this.employee = data['employee'];
    console.log(this.employee);
    })
  }
}