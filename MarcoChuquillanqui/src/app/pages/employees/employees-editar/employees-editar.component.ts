import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Customers } from '../../models/customers.model';
import { Employees } from '../../models/employees.model';

@Component({
  selector: 'app-employees-editar',
  templateUrl: './employees-editar.component.html',
  styleUrls: ['./employees-editar.component.css']
})
export class EmployeesEditarComponent implements OnInit {

  editEmployee!: FormGroup;
  submited: boolean = false;
  
    constructor(
        private formBuilder : FormBuilder, 
        private employeeService: EmployeeService, 
        private router: Router, 
        private activatedRoute: ActivatedRoute
        ) {
      this.editEmployee = formBuilder.group({        
        codigo:['',Validators.required],
        nombre:['',Validators.required],
      })
     }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      let id = res["id"];
      this.employeeService.getEmployee(id).subscribe(res=>{
        this.editEmployee.setValue({
          codigo: res.id,
          nombre: res.name
        });
      });

    });
  }

  editarEmployee() {
    this.submited=true;
    if(this.editEmployee.invalid) return;
    const employee: Employees={
      id : this.editEmployee.value.codigo,      
      name: this.editEmployee.value.nombre
    }

    this.employeeService.postUpdateEmployees(employee).subscribe(res=>this.router.navigate(['pages/employeeslistar']));
  }
}
