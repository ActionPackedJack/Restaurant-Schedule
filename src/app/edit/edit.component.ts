import {Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
//import * as $ from 'jquery';
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
    this.boxCheckSound = function(){
      var boxCheckSound = new Audio();
      boxCheckSound.src="./static/sounds/boxCheck1.wav";
      console.log(boxCheckSound);
      boxCheckSound.play();
    }
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
      boxCheckSound(){
        console.log("RUNNING SCRIPT TAG...")
        var boxCheckSound = new Audio();
        boxCheckSound.src="./static/sounds/boxCheck1.wav";
        console.log(boxCheckSound);
        boxCheckSound.play();
      }
      updateEmployee(form){
        let observable= this._dataService.updateEmployee(this.id, this.employee);
        observable.subscribe(data => {this.employee=data['employee']});
        this.router.navigate(['/'])
      }
      requestReset(){
        event.preventDefault();
        console.log("EXECUTING SELECTIVE RESET...")
        var items : HTMLCollectionOf<HTMLInputElement> =document.getElementsByClassName('request') as HTMLCollectionOf<HTMLInputElement>;
        for(var i=0; i<items.length; i++){
          if(items[i].type=='checkbox')
            items[i].checked=false;
            var requestedShift=items[i].value;
            this.employee.requests[requestedShift]=false;
            //console.log(this.employee.requests);
      }
    }	
      requestAll(){
        event.preventDefault();
        console.log("CHECKING ALL BOXEN...");
        var items : HTMLCollectionOf<HTMLInputElement> =document.getElementsByClassName('request') as HTMLCollectionOf<HTMLInputElement>;
        for(var i=0; i<items.length; i++){
          if(items[i].type=='checkbox')
            items[i].checked=true;
            var requestedShift=items[i].value;
            this.employee.requests[requestedShift]=true;
            //console.log(this.employee.requests);
      }
        // for (let request in this.employee.requests){
        //   this.employee.requests[request]=true;
        // }
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

