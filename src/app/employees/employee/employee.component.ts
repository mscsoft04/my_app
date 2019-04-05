import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/api/employee.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private Service: EmployeeService) {
    console.log(Service.fromData);
   }

  ngOnInit() {
    this.resetForm(null);

  }

  resetForm(form : NgForm){
     if(form!=null)
       form.resetForm();
      this.Service.fromData ={
          EmployeeID:null,
          Fname:"",
          Lname:"",
          Email:"",
          Address:"",

      }


  }
  onSubmit(form : NgForm){
   this.InsertData(form);

  }
  InsertData(form:NgForm){
   this.Service.InsertEmpolyee(form.value).subscribe(res=>{
      this.resetForm(form);
      this.Service.GetLIstView();
   });

  }

}
