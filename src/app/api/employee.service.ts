import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  fromData:Employee;
  list : Employee[];
  //private Employee  = [];

  readonly url="http://122.165.104.216/WelcomeGroup/v3/api/User";
  constructor(private httpClient: HttpClient) {
        console.log(this.list);
   }
   InsertEmpolyee(fromData:Employee){
    return this.httpClient.post(this.url+'/insertdata',fromData);

   }
   GetLIstView(){
    this.httpClient.get(this.url+'/EmloyeeGet').toPromise().then(res =>this.list= res as Employee[]);

   }
}
