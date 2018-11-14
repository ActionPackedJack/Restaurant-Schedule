import {Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import * as $ from 'jquery';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee;
  employees;
  id;
  constructor(private _dataService: HttpService, private _route: ActivatedRoute, private router: Router) { }



  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = params['id']);
    this._dataService.getOneEmployee(this.id).subscribe(data => {
      console.log("HERE IS DATA: ", data);
      console.log("HERE IS DATA OF EMPLOYEE: ",data['employee']);
      // if(data['status'] == 'success'){
        this.employee=data['employee'];
        console.log("HERE IS EMPLOYEE: ", this.employee);
        // }
        // else{
          //   // this._route.navigateByUrl('')
          // }
        })
      }
      updateEmployee(form){
        let observable= this._dataService.updateEmployee(this.id, this.employee);
        observable.subscribe(data => {this.employee=data['employee']});
        this.router.navigate(['/'])
      }
      requestReset(){
        event.preventDefault();
        console.log("EXECUTING SELECTIVE RESET...")
        var items=document.getElementsByClassName('request');
        for(var i=0; i<items.length; i++){
          if(items[i].type=='checkbox')
            items[i].checked=false;
      }
    }	
      requestAll(){
        event.preventDefault();
        console.log("CHECKING ALL BOXEN...")
        var items=document.getElementsByClassName('request');
        for(var i=0; i<items.length; i++){
          if(items[i].type=='checkbox')
            items[i].checked=true;
      }
    }	
      deleteEmployee(id){
        console.log("RUNNING DELETE FROM COMPONENT WITH ID: ", id)
        let observable = this._dataService.delete(id);
        observable.subscribe(data => {this.router.navigate(['/'])});
        this.router.navigate(['/'])
        // .map(data => {
        //   this.employees = data['employees'];
        // }})
      }
}

