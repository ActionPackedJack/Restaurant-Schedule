import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService{

    constructor(private _http: HttpClient){}
    addEmployee(employee){
        console.log("ADDING EMPLOYEE", employee)
        return this._http.post('/api/things', employee);{

        }
    
    }
    getEmployees(){
        // our http response is an Observable, store it in a variable
        // let tempObservable = this._http.get('/pets');
        // subscribe to the Observable and provide the code we would like to do with our data from the response
        // tempObservable.subscribe(data => console.log("Pets retrieved!", data));
        console.log("GETTING THINGS...")
        console.log(this._http.get('/api/things'))
        return this._http.get('/api/things')
     }
    generateSchedule(){
        
    }
     getOneEmployee(id){
        console.log("HERE IS THE REQUESTED ID")
        console.log(id);
        return this._http.get('/api/things/'+id);
     }
     updateEmployee(id, employee){
      console.log( "RUNNING UPDATEEMPLOYEE")
      return this._http.put(`/api/things/${id}`, employee)
      //.map(data => data)
    }
    delete(id){
      console.log("RUNNING DELETE FROM SERVICE FOR ID: ", id);
      return this._http.get('/api/things/delete/'+id);
      //console.log( result)
    }
}