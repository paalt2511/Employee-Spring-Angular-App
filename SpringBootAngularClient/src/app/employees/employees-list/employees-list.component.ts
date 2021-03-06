import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.reloadData();
  }

  deleteEmployees() {
    this.employeeService.deleteAll()
      .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log('ERROR: ' + error));
  }

  reloadData() {
    console.log("employee data");
    console.log(this.employeeService.getEmployeesList());
    this.employees = this.employeeService.getEmployeesList();
  }
}
