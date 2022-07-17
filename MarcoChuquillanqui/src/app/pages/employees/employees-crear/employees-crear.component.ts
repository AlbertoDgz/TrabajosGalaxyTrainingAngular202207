import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employees } from '../../models/employees.model';

@Component({
  selector: 'app-employees-crear',
  templateUrl: './employees-crear.component.html',
  styleUrls: ['./employees-crear.component.css']
})
export class EmployeesCrearComponent implements OnInit {

  [x: string]: any;

  createEmployee!: FormGroup;
  submited: boolean = false;
  
    constructor(private formBuilder : FormBuilder, private employeeService: EmployeeService, private router: Router) {
      this.createEmployee = formBuilder.group({
        nombre:['',Validators.required],
      })
     }
  
    ngOnInit(): void {
  
    }
    agregarEmployee() {
      this.submited=true;
      if(this.createEmployee.invalid) return;
      const employee: Employees={
        id : this.createEmployee.value.id,
        name: this.createEmployee.value.nombre
      }
      this.employeeService.postEmployees(employee).subscribe(res=>this.router.navigate(['pages/employeeslistar']));
    }

}
