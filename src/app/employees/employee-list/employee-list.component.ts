import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/api/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private Service: EmployeeService) {
    //console.log(Service.list);
  }

  ngOnInit() {
    this.Service.GetLIstView();
  }
  //GetLIstView
}
